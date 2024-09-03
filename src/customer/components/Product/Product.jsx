import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import ProductCard from "./ProductCard";
import { filters, sortOptions } from "./FilterData";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProducts } from "../../../State/Product/Action";
import { Pagination } from "@mui/material";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Product() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const location = useLocation();
  // const jwt = localStorage.getItem("jwt");
  const navigate = useNavigate();
  const param = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);

  const decodedQueryString = decodeURIComponent(location.search);
  const searchParams = new URLSearchParams(decodedQueryString);
  const colorValue = searchParams.get("color");
  const sizeValue = searchParams.get("size");
  const priceValue = searchParams.get("price");
  const discount = searchParams.get("discount");
  const sortValue = searchParams.get("sort");
  const pageNumber = searchParams.get("page") || 1;
  const stock = searchParams.get("stock");

  const handlePaginationChange = (event, value) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", value);
    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };

  const handleFilter = (value, sectionId) => {
    const searchParams = new URLSearchParams(location.search);
    let filterValues = searchParams.getAll(sectionId);
    if (filterValues.length > 0 && filterValues[0].split(",").includes(value)) {
      filterValues = filterValues[0]
        .split(",")
        .filter((item) => item !== value);
      if (filterValues.length === 0) {
        searchParams.delete(sectionId);
      }
    } else {
      filterValues.push(value);
    }
    if (filterValues.length > 0) {
      searchParams.set(sectionId, filterValues.join(","));
    }
    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };

  useEffect(() => {
    const [minPrice, maxPrice] =
      priceValue === null ? [0, 3000] : priceValue.split("-").map(Number);
    const data = {
      category: param.levelThree,
      color: colorValue || [],
      sizes: sizeValue || [],
      minPrice,
      maxPrice,
      minDiscount: discount || 0,
      sort: sortValue || "price_low",
      pageNumber: pageNumber - 1,
      pageSize: 20,
      stock: stock,
    };
    dispatch(findProducts(data));
  }, [
    dispatch,
    param.levelThree,
    colorValue,
    sizeValue,
    priceValue,
    discount,
    sortValue,
    pageNumber,
    stock,
  ]);

  console.log("products", products);

  return (
    <div className="bg-[#dfdcd8]">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-[#3a2823] bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-[#dfdcd8] py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-[#3a2823]">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-[#dfdcd8] p-2 text-[#3a2823]"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  {/* Filters */}
                  <form className="mt-4 border-t border-[#3a2823]">
                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-700 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-[#dfdcd8] px-2 py-3 text-[#3a2823] hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded-x border-[#3a2823] text-[#3a2823] focus:ring-[#3a2823]"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-[#3a2823]"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
        <main className="mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-baseline justify-between border-b border-[#3a2823] pb-6 pt-5">
            <h1 className="text-4xl font-[cinzel] font-semibold tracking-tight text-[#3a2823]">
              Rings For Her
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-[#3a2823] hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-[#3a2823] group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-[#dfdcd8] shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                active ? "bg-[#dfdcd8]" : "",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-[#3a2823] hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-[#3a2823] hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="hidden sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 select-none lg:grid-cols-5">
              {/* Filters */}
              <div>
                <div className="hidden lg:pb-7 lg:flex lg:justify-between lg:items-center">
                  <h1 className="text-lg opacity-75 font-semibold">Filters</h1>
                  <FilterListIcon />
                </div>

                <form className="hidden lg:block">
                  {filters.map((section) => (
                    <Disclosure
                      as="div"
                      key={section.id}
                      className="border-b border-[#3a2823] py-5"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-[#dfdcd8] py-3 text-sm text-[#3a2823] hover:text-gray-500">
                              <span className="font-medium text-[#3a2823]">
                                {section.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-4">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    onChange={() =>
                                      handleFilter(option.value, section.id)
                                    }
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    className="h-4 w-4 rounded accent-gray-500 border-[#3a2823] text-[#3a2823 focus:ring-[#3a2823]"
                                  />
                                  <label
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className="ml-3 text-sm text-[#3a2823]"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </div>

              {/* Product grid */}
              <div className="lg:col-span-4 w-full">
                <div className="flex flex-wrap justify-center bg-[#dfdcd8] py-5">
                  {products.products &&
                    products.products?.content?.map((item) => (
                      <ProductCard product={item} />
                    ))}
                </div>
              </div>
            </div>
          </section>
          <section className="w-full px-[3.6rem]">
            <div className="px-4 py-5 flex justify-center">
              <Pagination
                count={products.products?.totalPages}
                onChange={handlePaginationChange}
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

// import { Fragment, useEffect, useState } from "react";
// import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
// import { XMarkIcon } from "@heroicons/react/24/outline";
// import {
//   ChevronDownIcon,
//   FunnelIcon,
//   MinusIcon,
//   PlusIcon,
//   Squares2X2Icon,
// } from "@heroicons/react/20/solid";
// import ProductCard from "./ProductCard";
// import { filterValue, sortOptions } from "./FilterData";
// import FilterListIcon from "@mui/icons-material/FilterList";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { RingCards } from "../../../Data/RingCards";
// import { useDispatch, useSelector } from "react-redux";
// import { findProducts, findProductsById } from "../../../State/Product/Action";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }
// export default function Product() {
//   const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
//   const location = useLocation();
//   const jwt = localStorage.getItem("jwt");
//   const navigate = useNavigate();
//   const param = useParams();
//   const dispatch = useDispatch();
//   // const { product } = useSelector((store) => store);

//   const decodedQueryString = decodeURIComponent(location.search);
//   const searchParams = new URLSearchParams(decodedQueryString);
//   const colorValue = searchParams.get("color");
//   const sizeValue = searchParams.get("sizes");
//   const priceValue = searchParams.get("price");
//   const discount = searchParams.get("discount");
//   // const sortValue = searchParams.get("sort");
//   const pageNumber = searchParams.get("page") || 1;
//   // const stock = searchParams.get("stock");

//   const handleFilter = (value, sectionId) => {
//     const searchParams = new URLSearchParams(location.search);
//     let filterValues = searchParams.getAll(sectionId);
//     if (filterValues.length > 0 && filterValues[0].split(",").includes(value)) {
//       filterValues = filterValue[0].split(",").filter((item) => item !== value);
//       if (filterValue.length === 0) {
//         searchParams.delete(sectionId);
//       }
//     } else {
//       filterValue.push(value);
//     }
//     if (filterValue.length > 0) {
//       searchParams.set(sectionId, filterValue.join(","));
//     }
//     const query = searchParams.toString();
//     navigate({ search: `?${query}` });
//   };

//   useEffect(() => {
//     const [minPrice, maxPrice] =
//       priceValue === null ? [0, 3000] : priceValue.split("-").map(Number);
//     const data = {
//       category: param.levelThree,
//       color: colorValue || [],
//       sizes: sizeValue || [],
//       minPrice,
//       maxPrice,
//       minDiscount: discount || 0,
//       // sort: sortValue || "price_low",
//       pageNumber: pageNumber - 1,
//       pageSize: 10,
//       // stock: stock,
//     };
//     dispatch(findProducts(data));
//   }, [
//     param.levelThree,
//     colorValue,
//     sizeValue,
//     priceValue,
//     discount,
//     // sortValue,
//     pageNumber,
//     // stock,
//     dispatch,
//   ]);

//   return (
//     <div className="bg-[#dfdcd8]">
//       <div>
//         {/* Mobile filter dialog */}
//         <Transition.Root show={mobileFiltersOpen} as={Fragment}>
//           <Dialog
//             as="div"
//             className="relative z-40 lg:hidden"
//             onClose={setMobileFiltersOpen}
//           >
//             <Transition.Child
//               as={Fragment}
//               enter="transition-opacity ease-linear duration-300"
//               enterFrom="opacity-0"
//               enterTo="opacity-100"
//               leave="transition-opacity ease-linear duration-300"
//               leaveFrom="opacity-100"
//               leaveTo="opacity-0"
//             >
//               <div className="fixed inset-0 bg-[#3a2823] bg-opacity-25" />
//             </Transition.Child>

//             <div className="fixed inset-0 z-40 flex">
//               <Transition.Child
//                 as={Fragment}
//                 enter="transition ease-in-out duration-300 transform"
//                 enterFrom="translate-x-full"
//                 enterTo="translate-x-0"
//                 leave="transition ease-in-out duration-300 transform"
//                 leaveFrom="translate-x-0"
//                 leaveTo="translate-x-full"
//               >
//                 <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-[#dfdcd8] py-4 pb-12 shadow-xl">
//                   <div className="flex items-center justify-between px-4">
//                     <h2 className="text-lg font-medium text-[#3a2823]">
//                       Filters
//                     </h2>
//                     <button
//                       type="button"
//                       className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-[#dfdcd8] p-2 text-[#3a2823]"
//                       onClick={() => setMobileFiltersOpen(false)}
//                     >
//                       <span className="sr-only">Close menu</span>
//                       <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                     </button>
//                   </div>

//                   {/* Filters */}
//                   <form className="mt-4 border-t border-[#3a2823]">
//                     {filterValue.map((section) => (
//                       <Disclosure
//                         as="div"
//                         key={section.id}
//                         className="border-t border-gray-700 px-4 py-6"
//                       >
//                         {({ open }) => (
//                           <>
//                             <h3 className="-mx-2 -my-3 flow-root">
//                               <Disclosure.Button className="flex w-full items-center justify-between bg-[#dfdcd8] px-2 py-3 text-[#3a2823] hover:text-gray-500">
//                                 <span className="font-medium text-gray-900">
//                                   {section.name}
//                                 </span>
//                                 <span className="ml-6 flex items-center">
//                                   {open ? (
//                                     <MinusIcon
//                                       className="h-5 w-5"
//                                       aria-hidden="true"
//                                     />
//                                   ) : (
//                                     <PlusIcon
//                                       className="h-5 w-5"
//                                       aria-hidden="true"
//                                     />
//                                   )}
//                                 </span>
//                               </Disclosure.Button>
//                             </h3>
//                             <Disclosure.Panel className="pt-6">
//                               <div className="space-y-6">
//                                 {section.options.map((option, optionIdx) => (
//                                   <div
//                                     key={option.value}
//                                     className="flex items-center"
//                                   >
//                                     <input
//                                       id={`filter-mobile-${section.id}-${optionIdx}`}
//                                       name={`${section.id}[]`}
//                                       defaultValue={option.value}
//                                       type="checkbox"
//                                       defaultChecked={option.checked}
//                                       className="h-4 w-4 rounded-x border-[#3a2823] text-[#3a2823] focus:ring-[#3a2823]"
//                                     />
//                                     <label
//                                       htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
//                                       className="ml-3 min-w-0 flex-1 text-[#3a2823]"
//                                     >
//                                       {option.label}
//                                     </label>
//                                   </div>
//                                 ))}
//                               </div>
//                             </Disclosure.Panel>
//                           </>
//                         )}
//                       </Disclosure>
//                     ))}
//                   </form>
//                 </Dialog.Panel>
//               </Transition.Child>
//             </div>
//           </Dialog>
//         </Transition.Root>

//         <main className="mx-auto px-4 sm:px-6 lg:px-12">
//           <div className="flex items-baseline justify-between border-b border-[#3a2823] pb-6 pt-5">
//             <h1 className="text-4xl font-[cinzel] font-semibold tracking-tight text-[#3a2823]">
//               Rings For Her
//             </h1>

//             <div className="flex items-center">
//               <Menu as="div" className="relative inline-block text-left">
//                 <div>
//                   <Menu.Button className="group inline-flex justify-center text-sm font-medium text-[#3a2823] hover:text-gray-900">
//                     Sort
//                     <ChevronDownIcon
//                       className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-[#3a2823] group-hover:text-gray-500"
//                       aria-hidden="true"
//                     />
//                   </Menu.Button>
//                 </div>

//                 <Transition
//                   as={Fragment}
//                   enter="transition ease-out duration-100"
//                   enterFrom="transform opacity-0 scale-95"
//                   enterTo="transform opacity-100 scale-100"
//                   leave="transition ease-in duration-75"
//                   leaveFrom="transform opacity-100 scale-100"
//                   leaveTo="transform opacity-0 scale-95"
//                 >
//                   <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-[#dfdcd8] shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
//                     <div className="py-1">
//                       {sortOptions.map((option) => (
//                         <Menu.Item key={option.name}>
//                           {({ active }) => (
//                             <a
//                               href={option.href}
//                               className={classNames(
//                                 option.current
//                                   ? "font-medium text-gray-900"
//                                   : "text-gray-500",
//                                 active ? "bg-[#dfdcd8]" : "",
//                                 "block px-4 py-2 text-sm"
//                               )}
//                             >
//                               {option.name}
//                             </a>
//                           )}
//                         </Menu.Item>
//                       ))}
//                     </div>
//                   </Menu.Items>
//                 </Transition>
//               </Menu>

//               <button
//                 type="button"
//                 className="-m-2 ml-5 p-2 text-[#3a2823] hover:text-gray-500 sm:ml-7"
//               >
//                 <span className="sr-only">View grid</span>
//                 <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
//               </button>
//               <button
//                 type="button"
//                 className="-m-2 ml-4 p-2 text-[#3a2823] hover:text-gray-500 sm:ml-6 lg:hidden"
//                 onClick={() => setMobileFiltersOpen(true)}
//               >
//                 <span className="sr-only">Filters</span>
//                 <FunnelIcon className="h-5 w-5" aria-hidden="true" />
//               </button>
//             </div>
//           </div>

//           <section aria-labelledby="products-heading" className="pb-24 pt-6">
//             <h2 id="products-heading" className="sr-only">
//               Products
//             </h2>

//             <div className="grid grid-cols-1 gap-x-8 gap-y-10 select-none lg:grid-cols-5">
//               {/* Filters */}
//               <div>
//                 <div className="pb-7 flex justify-between items-center">
//                   <h1 className="text-lg opacity-75 font-semibold">Filters</h1>
//                   <FilterListIcon />
//                 </div>

//                 <form className="hidden lg:block">
//                   {filterValue.map((section) => (
//                     <Disclosure
//                       as="div"
//                       key={section.id}
//                       className="border-b border-[#3a2823] py-5"
//                     >
//                       {({ open }) => (
//                         <>
//                           <h3 className="-my-3 flow-root">
//                             <Disclosure.Button className="flex w-full items-center justify-between bg-[#dfdcd8] py-3 text-sm text-[#3a2823] hover:text-gray-500">
//                               <span className="font-medium text-[#3a2823]">
//                                 {section.name}
//                               </span>
//                               <span className="ml-6 flex items-center">
//                                 {open ? (
//                                   <MinusIcon
//                                     className="h-5 w-5"
//                                     aria-hidden="true"
//                                   />
//                                 ) : (
//                                   <PlusIcon
//                                     className="h-5 w-5"
//                                     aria-hidden="true"
//                                   />
//                                 )}
//                               </span>
//                             </Disclosure.Button>
//                           </h3>
//                           <Disclosure.Panel className="pt-6">
//                             <div className="space-y-4">
//                               {section.options.map((option, optionIdx) => (
//                                 <div
//                                   key={option.value}
//                                   className="flex items-center"
//                                 >
//                                   <input
//                                     onChange={() =>
//                                       handleFilter(option.value, section.id)
//                                     }
//                                     id={`filter-${section.id}-${optionIdx}`}
//                                     name={`${section.id}[]`}
//                                     defaultValue={option.value}
//                                     type="checkbox"
//                                     defaultChecked={option.checked}
//                                     className="h-4 w-4 rounded accent-gray-500 border-[#3a2823] text-[#3a2823 focus:ring-[#3a2823]"
//                                   />
//                                   <label
//                                     htmlFor={`filter-${section.id}-${optionIdx}`}
//                                     className="ml-3 text-sm text-[#3a2823]"
//                                   >
//                                     {option.label}
//                                   </label>
//                                 </div>
//                               ))}
//                             </div>
//                           </Disclosure.Panel>
//                         </>
//                       )}
//                     </Disclosure>
//                   ))}
//                 </form>
//               </div>

//               {/* Product grid */}
//               <div className="lg:col-span-4 w-full">
//                 <div className="flex flex-wrap justify-center bg-[#dfdcd8] py-5">
//                   {
//                     // product.products &&
//                     // product.products?.content?
//                     RingCards.map((item) => (
//                       <ProductCard product={item} />
//                     ))
//                   }
//                 </div>
//               </div>
//             </div>
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// }
