// import { Avatar, Grid, Box } from "@mui/material";
import React from "react";
import { Rating, Avatar, Grid, Box } from "@mui/material";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3.5}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 50, height: 50, bgcolor: "#b5a491" }}
            >
              S
            </Avatar>
          </Box>
        </Grid>

        <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Person</p>
              <p className="opacity-70">01 Feb,2024</p>
            </div>
          </div>
          <Rating
            className="py-1"
            value={4.5}
            precision={0.5}
            name="half-rating"
            readOnly
          />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Quidem,Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Tenetur ipsa magni nobis, sunt, ex, quae aliquid labore molestias
            non assumenda atque error incidunt nostrum. Possimus facilis natus
            in vero a.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
