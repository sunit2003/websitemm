import { Fragment, useEffect, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { navigation } from "./navigationData";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useLocation, useNavigate } from "react-router-dom";
import AuthModal from "../../Auth/AuthModal";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logout } from "../../../State/Auth/Action";
import Marquee from "react-fast-marquee";

import { getCart } from "../../../State/Cart/Action"; // Adjust the path as needed

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openUserMenu = Boolean(anchorEl);
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  const handleUserClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseUserMenu = (event) => {
    setAnchorEl(null);
  };

  const handleOpen = () => {
    setOpenAuthModal(true);
  };
  const handleClose = () => {
    setOpenAuthModal(false);
  };
  const handleCartClick = () => {
    navigate("/cart");
  };

  const handleCategoryClick = (category, section, item, close) => {
    navigate(`/${category.id}/${section.id}/${item.id}`);
    close();
  };

  useEffect(() => {
    if (auth.jwt) {
      dispatch(getUser(jwt));
    }
  }, [auth.jwt, jwt]);

  useEffect(() => {
    if (auth.user) {
      handleClose();
    }
    if (location.pathname === "/login" || location.pathname === "/register") {
      navigate(-1);
    }
  }, [auth.user]);

  // const handleLogout = () => {
  //   dispatch(logout());
  //   handleCloseUserMenu();
  // };
  const handleLogout = () => {
    dispatch(logout());
    setAnchorEl(null);
    setOpenAuthModal(false); // Ensure modal is also closed on logout
  };

  // const [cartItemCount, setCartItemCount] = useState(0);
  // const cartItems = useSelector((state) => state.cart.cartItems);

  // useEffect(() => {
  //   const fetchCart = async () => {
  //     await dispatch(getCart());
  //   };

  //   fetchCart();
  // }, [dispatch]);

  // useEffect(() => {
  //   if (cartItems) {
  //     const itemCount = cartItems.reduce(
  //       (total, item) => total + item.quantity,
  //       0
  //     );
  //     setCartItemCount(itemCount);
  //   }
  // }, [cartItems]);

  const [cartItemCount, setCartItemCount] = useState(0);
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    const fetchCart = async () => {
      await dispatch(getCart());
    };

    fetchCart();
  }, []);

  useEffect(() => {
    console.log("cartItems:", cartItems); // Log cartItems to inspect
    if (cartItems && Array.isArray(cartItems)) {
      const itemCount = cartItems.reduce((total, item) => {
        console.log("item:", item); // Log each item
        if (item && typeof item.quantity === "number") {
          return total + item.quantity;
        }
        return total; // Safeguard for undefined or malformed items
      }, 0);
      setCartItemCount(itemCount);
    }
  }, [cartItems]);

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                {/* Assuming setOpen is a state setter function from useState used to manage dialog visibility */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected
                                ? "border-indigo-600 text-indigo-600"
                                : "border-transparent text-gray-900",
                              "flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium border-none"
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel
                        key={category.name}
                        className="space-y-10 px-4 pb-8 pt-10"
                      >
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p
                              id={`${section.name}-heading`}
                              className="font-medium text-gray-900"
                            >
                              {section.name}
                            </p>

                            <ul
                              role="list"
                              aria-labelledby={`${section.name}-heading`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <p
                                    onClick={() =>
                                      handleCategoryClick(
                                        category,
                                        section,
                                        item,
                                        () => setOpen(false) // Use setOpen to close the modal
                                      )
                                    }
                                    className="cursor-pointer hover:text-gray-800 border-b-4"
                                  >
                                    {item.name}
                                    <NavigateNextIcon sx={{ color: "black" }} />
                                  </p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a
                        href={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                {/* User authentication and profile section */}
                <div className="border-t border-gray-200 px-4 py-6">
                  {auth.user ? (
                    <div className="flex items-center space-x-3">
                      <Avatar
                        className="cursor-pointer"
                        onClick={handleUserClick}
                        sx={{ bgcolor: "#E5E1DA", color: "black" }}
                      >
                        <PersonOutlineIcon sx={{ color: "black" }} />
                        Account
                      </Avatar>
                      <div className="cursor-pointer" onClick={handleUserClick}>
                        {auth.user.firstName}
                      </div>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openUserMenu}
                        onClose={handleCloseUserMenu}
                        MenuListProps={{ "aria-labelledby": "basic-button" }}
                      >
                        <MenuItem onClick={handleCloseUserMenu}>
                          Profile
                        </MenuItem>
                        <MenuItem onClick={() => navigate("/account/order")}>
                          My Orders
                        </MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                      </Menu>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-3">
                      <PermIdentityIcon
                        onClick={handleOpen}
                        className="cursor-pointer text-xl text-gray-700 hover:text-gray-800"
                        sx={{ fontSize: 28 }}
                      />
                      <div onClick={handleOpen} className="cursor-pointer">
                        Sign In
                      </div>
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <div className="bg-black">
          <Marquee speed={100}>
            <div className="flex h-10 items-center justify-center bg-black px-4 text-sm font-medium text-white sm:px-6 lg:px-8 ">
              Get free delivery on orders over &#8377;499
            </div>
            <div className="flex h-10 items-center justify-center bg-black px-4 text-sm font-medium text-white sm:px-6 lg:px-[500px]">
              Get free delivery on orders over &#8377;499
            </div>
          </Marquee>
        </div>

        <nav aria-label="Top" className="mx-auto">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center px-2">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className=" object-cover ml-4 flex lg:ml-0">
                {/* <span className="sr-only">MoonMade</span> */}
                <img
                  src="https://github.com/sunit2003/websitemm/blob/main/public/logo.png?raw=true"
                  alt="MOONMADE"
                  className="h-12 w-30 mr-2 cursor-pointer"
                />
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch z-10">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open, close }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "text-indigo-600"
                                  : "text-gray-700 hover:text-gray-800",
                                "relative z-10 -mb-px flex items-center pt-px text-sm font-medium transition-colors duration-200 ease-out focus:outline-none focus:ring-none focus:ring-none",

                                "border-none"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="absolute">
                                <div className="px-8 ml-72 bg-white">
                                  <div className="gap-x-8 pt-5 pb-10 w-40 ">
                                    <div className="gap-x-8 gap-y-10 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p
                                            id={`${section.name}-heading`}
                                            className="font-medium text-gray-900"
                                          >
                                            {section.name}
                                          </p>
                                          {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-10 sm:mt-4 sm:space-y-4"
                                          >
                                            {section.items.map((item) => (
                                              <li
                                                key={item.name}
                                                className="flex"
                                              >
                                                <p
                                                  onClick={() =>
                                                    handleCategoryClick(
                                                      category,
                                                      section,
                                                      item,
                                                      close
                                                    )
                                                  }
                                                  className="cursor-pointer hover:text-gray-800 border-b-4"
                                                >
                                                  {item.name}
                                                  {
                                                    <NavigateNextIcon
                                                      sx={{ color: "black" }}
                                                    />
                                                  }
                                                </p>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {auth.user ? (
                    <div className="relative flex items-center space-x-3">
                      {" "}
                      {/* Ensure this container is relative */}
                      <Avatar
                        className="cursor-pointer"
                        onClick={handleUserClick}
                        aria-controls={openUserMenu ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={openUserMenu ? "true" : undefined}
                        sx={{
                          bgcolor: "#E5E1DA",
                          color: "black",
                          cursor: "pointer",
                        }}
                      >
                        <PersonOutlineIcon sx={{ color: "black" }} />
                      </Avatar>
                      <div
                        onClick={handleUserClick}
                        className="cursor-pointer"
                        aria-controls={openUserMenu ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={openUserMenu ? "true" : undefined}
                      >
                        {auth.user.firstName}
                      </div>
                      <Menu
                        className="absolute mt-4 w-48"
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={openUserMenu}
                        onClose={handleCloseUserMenu}
                        MenuListProps={{ "aria-labelledby": "basic-button" }}
                      >
                        <MenuItem onClick={handleCloseUserMenu}>
                          Profile
                        </MenuItem>
                        <MenuItem onClick={() => navigate("/account/order")}>
                          My Orders
                        </MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                      </Menu>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-3">
                      <PermIdentityIcon
                        onClick={handleOpen}
                        className="cursor-pointer text-xl text-gray-700 hover:text-gray-800"
                        sx={{ fontSize: 28 }}
                      />
                    </div>
                  )}
                </div>

                {/* Search */}
                {/* <div className="flex lg:ml-6">
                  <p className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </p>
                </div> */}

                {/* Cart */}
                <div className="relative ml-4 flow-root lg:ml-6">
                  <Button className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      onClick={handleCartClick}
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    {cartItemCount > 0 && (
                      <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-600 rounded-full">
                        {cartItemCount}
                      </span>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <AuthModal handleClose={handleClose} open={openAuthModal} />
    </div>
  );
}
