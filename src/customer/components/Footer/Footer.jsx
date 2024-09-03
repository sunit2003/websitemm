// import { Grid } from "@mui/material";
// import React from "react";
// import { Button } from "@mui/material";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";

// const Footer = () => {
//   return (
//     <div className="lg:mt-20 mt-10 border-t pt-5 border-[#4f332c] border-opacity-15">
//       <Grid
//         className="bg-[#cec8c1] text-center"
//         container
//         sx={{
//           bg: "#cec8c1",
//           color: "#482c2c",
//         }}
//       >
//         <Grid item xs={12} sm={6} md={3} className="pl-20 text-start">
//           <h3 className="pb-3 font-[cinzel] text-[#482c2c] font-bold text-2xl">
//             CUSTOMER CARE
//           </h3>
//           <div>
//             <h4 className="text-lg text-[#482c2c] font-semibold">
//               Mob: +91 9582919857
//             </h4>
//           </div>
//           <div>
//             <h4 className="text-lg text-[#482c2c] font-semibold text-left ">
//               +91 8178314273
//             </h4>
//           </div>
//           <div>
//             <h4 className="text-lg font-semibold text-start text-[#482c2c]">
//               Email:
//             </h4>
//             <p className="text-lg text-[#482c2c] font-semibold">
//               themoonmade@gmail.com
//             </p>
//           </div>
//           <div>
//             <p className="text-lg text-[#482c2c]">(Mon to Sat 10 AM to 6 PM)</p>
//           </div>
//         </Grid>

//         <Grid item xs={12} sm={6} md={3} className="pl-20 text-start">
//           <h3 className="pb-5 font-[cinzel] text-[#482c2c] font-bold text-2xl">
//             SHOP OUR PRODUCTS
//           </h3>
//           <div>
//             <Button className="pb-2" variant="h6" gutterbuttom>
//               SHOP
//             </Button>
//           </div>
//           <div>
//             <Button className="pb-5" variant="h6" gutterbuttom>
//               GIFTS
//             </Button>
//           </div>
//           <div>
//             <Button className="bestseller" variant="h6" gutterbuttom>
//               BEST SELLER
//             </Button>
//           </div>
//           <div>
//             <Button className="pb-5" variant="h6" gutterbuttom>
//               MEN
//             </Button>
//           </div>
//           <div>
//             <Button className="pb-5" variant="h6" gutterbuttom>
//               WOMEN
//             </Button>
//           </div>
//         </Grid>

//         <Grid item xs={12} sm={6} md={3} className="pl-20 m text-start">
//           <h3 className="pb-5 font-[cinzel] text-[#482c2c] font-bold text-2xl">
//             USEFUL LINKS
//           </h3>
//           <div>
//             <Button className="text-start" variant="h6" gutterbuttom>
//               SEARCH
//             </Button>
//           </div>
//           <div>
//             <Button className="pb-5" variant="h6" gutterbuttom>
//               TRACK YOUR ORDER
//             </Button>
//           </div>
//           <div>
//             <Button className="pb-5" variant="h6" gutterbuttom>
//               About Us
//             </Button>
//           </div>
//           <div>
//             <Button className="pb-5" variant="h6" gutterbuttom>
//               Terms of Service
//             </Button>
//           </div>
//           <div>
//             <Button className="pb-5" variant="h6" gutterbuttom>
//               Refund Policy
//             </Button>
//           </div>
//         </Grid>

//         <Grid item xs={12} sm={6} md={3}>
//           <h3 className="pb-5 font-[cinzel] text-[#482c2c] font-bold text-2xl">
//             OUR MISSION
//           </h3>
//           <div>
//             <p className="text-lg text-[#482c2c] text-left ">
//               We at MoonMade focus solely on presenting our customers with the
//               most authentic and intricate designs for routine and special
//               occasions, at a very affordable prices with assured quality
//             </p>
//           </div>
//         </Grid>
//       </Grid>
//       <Grid className="">
//         <div className=" pb-5 pr-48 px-10 lg:px-52 flex justify-end">
//           <div className="">
//             <h4 className="font-[cinzel] text-xl lg:text-2xl text-[#482c2c] font-semibold ">
//               <u>Follow Us On</u>
//             </h4>
//           </div>
//         </div>
//         <div className="flex justify-end px-44 pb-10">
//           <a
//             href="https://www.instagram.com/moonmadeofficial?igsh=MWQ1cndhbDNtM3kyNQ=="
//             target="blank"
//           >
//             <div className="mx-3">
//               <InstagramIcon fontSize="large" sx={{ cursor: "pointer" }} />
//             </div>
//           </a>

//           <a
//             href="https://www.facebook.com/profile.php?id=100090975503111&mibextid=ZbWKwL"
//             target="blank"
//           >
//             <div className="mx-3">
//               <FacebookIcon fontSize="large" sx={{ cursor: "pointer" }} />
//             </div>
//           </a>

//           <a
//             href="https://youtube.com/@Moonmadeofficial?si=BpcQjxOau1Gxr0kW"
//             target="blank"
//           >
//             <div className="mx-3">
//               <YouTubeIcon fontSize="large" sx={{ cursor: "pointer" }} />
//             </div>
//           </a>

//           <a href="https://www.linkedin.com/company/moon-made/" target="blank">
//             <div className="mx-3">
//               <LinkedInIcon fontSize="large" sx={{ cursor: "pointer" }} />
//             </div>
//           </a>
//         </div>
//       </Grid>
//       <Grid className="pt-5  bg-[#b5a491]" item xs={12}>
//         <p
//           className="pb-5 font-semibold text-[#482c2c] text-xl"
//           component="p"
//           align="center"
//         >
//           &copy; 2024 MoonMade. All Rights Reserved
//         </p>
//       </Grid>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "@mui/material";

const Footer = () => {
  const socialLinks = [
    {
      icon: <InstagramIcon />,
      url: "https://www.instagram.com/moonmadeofficial?igsh=MWQ1cndhbDNtM3kyNQ==",
    },
    {
      icon: <FacebookIcon />,
      url: "https://www.facebook.com/profile.php?id=100090975503111&mibextid=ZbWKwL",
    },
    {
      icon: <YouTubeIcon />,
      url: "https://youtube.com/@Moonmadeofficial?si=BpcQjxOau1Gxr0kW",
    },
    {
      icon: <LinkedInIcon />,
      url: "https://www.linkedin.com/company/moon-made/",
    },
  ];

  return (
    <Box
      sx={{
        mt: { xs: "10px", lg: "20px" },
        borderTop: 1,
        borderColor: "rgba(79, 51, 44, 0.15)",
        pt: 2,
        bgcolor: "#cec8c1",
        color: "#482c2c",
      }}
    >
      <Grid container spacing={2} sx={{ px: { xs: 2, sm: 4, md: 6 }, py: 1 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h5"
            gutterBottom
            fontWeight="bold"
            fontFamily="cinzel"
          >
            CUSTOMER CARE
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Mob: +91 9582919857
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            +91 8178314273
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Email: themoonmade@gmail.com
          </Typography>
          <Typography variant="subtitle1">
            (Mon to Sat 10 AM to 6 PM)
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h5"
            gutterBottom
            fontWeight="bold"
            fontFamily="cinzel"
          >
            SHOP OUR PRODUCTS
          </Typography>
          {["SHOP", "GIFTS", "BEST SELLER", "MEN", "WOMEN"].map(
            (item, index) => (
              <Button
                key={index}
                sx={{ pb: 2, display: "block", color: "black" }}
              >
                {item}
              </Button>
            )
          )}
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h5"
            gutterBottom
            fontWeight="bold"
            fontFamily="cinzel"
          >
            USEFUL LINKS
          </Typography>
          {[
            "SEARCH",
            "TRACK YOUR ORDER",
            "About Us",
            "Terms of Service",
            "Refund Policy",
          ].map((item, index) => (
            <Button
              key={index}
              sx={{ pb: 2, display: "block", color: "black" }}
            >
              {item}
            </Button>
          ))}
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h5"
            gutterBottom
            fontWeight="bold"
            fontFamily="cinzel"
          >
            OUR MISSION
          </Typography>
          <Typography variant="subtitle1">
            We at MoonMade focus solely on presenting our customers with the
            most authentic and intricate designs for routine and special
            occasions, at very affordable prices with assured quality.
          </Typography>
        </Grid>
      </Grid>

      <Box
        sx={{
          mt: 4,
          display: "flex",
          justifyContent: "flex-end",
          pr: { xs: 2, sm: 4, lg: 8 },
        }}
      >
        <Typography
          variant="h6"
          fontFamily="cinzel"
          fontWeight="semibold"
          sx={{ textDecoration: "underline" }}
        >
          Follow Us On
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: { xs: 2, sm: 4 },
        }}
      >
        {socialLinks.map((link, index) => (
          <Box key={index} sx={{ mx: 2 }}>
            <Link
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "black", "& svg": { fontSize: "40px" } }}
            >
              {link.icon}
            </Link>
          </Box>
        ))}
      </Box>

      <Grid item xs={12} sx={{ bgcolor: "#b5a491", py: 2 }}>
        <Typography
          align="center"
          variant="subtitle1"
          fontWeight="bold"
          sx={{ color: "#482c2c" }}
        >
          &copy; 2024 MoonMade. All Rights Reserved
        </Typography>
      </Grid>
    </Box>
  );
};

export default Footer;
