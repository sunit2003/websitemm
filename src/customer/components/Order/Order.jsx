import { Grid } from "@mui/material";
import React from "react";
import OrderCard from "./OrderCard";

const Order = () => {
  return (
    <div>
      <Grid item xs={9}>
        {[1, 1, 1].map((item) => (
          <OrderCard />
        ))}
      </Grid>
    </div>
  );
};

export default Order;
