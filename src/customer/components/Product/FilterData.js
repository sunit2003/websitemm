export const color = ["Gold", "RoseGold", "Silver"];

export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "gold", label: "Gold" },
      { value: "rosegold", label: "RoseGold" },
      { value: "silver", label: "Silver" },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "6", label: "6" },
      { value: "7", label: "7" },
      { value: "8", label: "8" },
      { value: "9", label: "9" },
    ],
  },
  // {
  //   id: "type",
  //   name: "Type",
  //   options: [
  //     { value: "adjustable", label: "Adjustable" },
  //     { value: "non-adjustable", label: "Non Adjustable" },
  //   ],
  // },
  {
    id: "price",
    name: "Price",
    options: [
      { value: "0-399", label: "₹0 To ₹399" },
      { value: "399-599", label: "₹399 To ₹599" },
      { value: "599-799", label: "₹599 To ₹799" },
      { value: "799-999", label: "₹799 To ₹999" },
    ],
  },
  {
    id: "discount",
    name: "Discount",
    options: [
      {
        value: "10",
        label: "10% And Above",
      },
      { value: "20", label: "20% And Above" },
      { value: "30", label: "30% And Above" },
      { value: "40", label: "40% And Above" },
      { value: "50", label: "50% And Above" },
      { value: "60", label: "60% And Above" },
      { value: "70", label: "70% And Above" },
      { value: "80", label: "80% And Above" },
    ],
  },
  {
    id: "stock",
    name: "Availability",
    options: [
      { value: "in_stock", label: "In Stock" },
      { value: "out_of_stock", label: "Out Of Stock" },
    ],
  },
];

export const sortOptions = [
  { name: "Price: Low to High", query: "price_low", current: false },
  { name: "Price: High to Low", query: "price_high", current: false },
  // { name: "Most Popular", href: "#", current: true },
  // { name: "Newest", href: "#", current: false },
];
