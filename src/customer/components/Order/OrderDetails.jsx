import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
const OrderDetails = () => {
  return (
    <div className="lg:px-20 px-5 lg:mt-20 mt-10">
      <div className="shadow-lg bg-[#F5F5F5] border-opacity-15 border border-[#4f332c]">
        <div>
          <h1 className="bg-[#8b7a67] font-[rubik] font-semibold px-5 py-3 text-lg">
            DELIVERY ADDRESS
          </h1>
        </div>
        <AddressCard />
      </div>
      <div className="py-6 bg-[#F5F5F5] my-5">
        <OrderTracker activeStep={2} />
      </div>
      <Grid className="space-y-5" container>
        {[1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-xl rounded-md p-5 border border-opacity-15 border-[#4f332c] bg-[#F5F5F5] "
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={12} xl={8}>
              <div className="flex items-center lg:space-x-5">
                <img
                  className="w-[8rem] h-[8rem] lg:w-[15rem] lg:h-[15rem] object-cover object-top"
                  src="Bracelet/crossed roman numeral bracelet/Third-Picture-6-scaled.jpg"
                  alt=""
                />

                <div className="lg:pt-5 pt-2 lg:px-5 px-2 space-y-2 lg:ml-5">
                  <p className="font-[rubik] lg:text-xl text-md">
                    Crossed Roman Numeral Bracelet bracelet roman crossed
                    numeral
                  </p>{" "}
                  <p className="opacity-70 lg:text-lg">Color: RoseGold</p>
                  <p className="opacity-70 lg:text-lg">Size: 15</p>
                  <p className="lg:text-xl font-[rubik]">₹549</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <Box sx={{ color: "#26a541" }}>
                <StarBorderIcon sx={{ fontSize: "2rem" }} />
                <span className="align-middle">Rate and Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
