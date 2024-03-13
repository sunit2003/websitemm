export const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "/",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Collection",
          href: "/",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "Rings",
          name: "Clothing",
          items: [
            { name: "Cartier", id: "tops", href: `{women/clothing/tops}` },
            { name: "Evil Eye", id: "women_dress", href: "#" },
            { name: "Roman infinity", id: "women_jeans" },
            { name: "Infinity studded", id: "lengha_choli" },
            { name: "Hug ring", id: "sweater" },
            { name: "Zirconia roman", id: "t-shirt" },
            { name: "Green stone", id: "jacket" },
            { name: "Buckel", id: "gouns" },
            // { name: "Sarees", id: "saree" },
            // { name: "Kurtas", id: "kurtas" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Bracelets", id: "watch" },
            { name: "Rings", id: "wallet" },
            { name: "Necklace", id: "bag" },
            { name: "Chains", id: "sunglasse" },
            { name: "Earings", id: "hat" },
           
          ],
        },
        // {
        //   id: "brands",
        //   name: "Brands",
        //   items: [
        //     { name: "Full Nelson", id: "#" },
        //     { name: "My Way", id: "#" },
        //     { name: "Re-Arranged", id: "#" },
        //     { name: "Counterfeit", id: "#" },
        //     { name: "Significant Other", id: "#" },
        //   ],
        // },
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        // {
        //   name: "New Arrivals",
        //   id: "#",
        //   imageSrc:
        //     "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
        //   imageAlt:
        //     "Drawstring top with elastic loop closure and textured interior padding.",
        // },
        // {
        //   name: "Artwork Tees",
        //   id: "#",
        //   imageSrc:
        //     "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
        //   imageAlt:
        //     "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        // },
      ],
      sections: [
        {
          id: "clothing",
          name: "Bracelets",
          items: [
            { name: "Mamba Black", id: "mens_kurta" },
            { name: "Cuban ", id: "shirt" },
            { name: "Twisted Infinite", id: "men_jeans" },
            { name: "Semi Studded", id: "#" },
            { name: "Gold Shiny", id: "t-shirt" },
            // { name: "Jackets", id: "#" },
            // { name: "Activewear", id: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Rings", id: "#" },
            { name: "Bracelets", id: "#" },
            { name: "Chains", id: "#" },
            // { name: "Sunglasses", id: "#" },
         
          ],
        },
        // {
        //   id: "brands",
        //   name: "Brands",
        //   items: [
        //     { name: "Re-Arranged", id: "#" },
        //     { name: "Counterfeit", id: "#" },
        //     { name: "Full Nelson", id: "#" },
        //     { name: "My Way", id: "#" },
          // ],
        // },
      ],
    },
  ],
  pages: [
    { name: "Company", id: "/" },
    { name: "Stores", id: "/" },
  ],
}