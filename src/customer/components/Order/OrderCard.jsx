import { Grid } from "@mui/material";
import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/account/order/${5}`)}>
      <Grid container spacing={1} sx={{ justifyContent: "center", mt: "1rem" }}>
        <Grid item xs={6}>
          <div className="flex justify-between cursor-pointer p-5 border bg-[#F5F5F5] border-[#4f332c] border-opacity-15 rounded-lg">
            <div className="ml-1 flex flex-row">
              <div>
                <img
                  className="w-[10rem] h-[10rem] object-cover object-top"
                  src="Bracelet/crossed roman numeral bracelet/Third-Picture-6-scaled.jpg"
                  alt=""
                />
              </div>
              <div className="lg:pt-5 pt-2 px-5">
                {" "}
                <p className="font-[cinzel] font-semibold">
                  Crossed Roman Numeral Bracelet
                </p>
                <p className="opacity-70">Size:15</p>
                <p className="opacity-70">Color:RoseGold</p>
              </div>
            </div>
            <div className="lg:pt-5 pt-2">
              {" "}
              {/* <Grid item xs={2}> */}
              <p>₹549</p>
              {/* </Grid> */}
            </div>
            <div className="lg:pt-5 pt-2">
              {true && (
                <p>
                  <FiberManualRecordIcon sx={{ color: "green" }} />
                  <span>Delivered on Feb 09</span>
                </p>
              )}
              {false && (
                <p>
                  <span>Your item has been delivered</span>
                </p>
              )}
            </div>
          </div>
        </Grid>
        {/* <Grid item xs={2}>
          <p>₹549</p>
        </Grid> */}
        {/* <Grid item xs={4}> */}

        {/* </Grid> */}
      </Grid>
    </div>
  );
};

export default OrderCard;
