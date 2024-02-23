import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";

const DeliveryAddressForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const address = {
      fullName: data.get("fullName"),
      phoneNumber: data.get("phoneNumber"),
      address: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      pincode: data.get("pincode"),
      landmark: data.get("landmark"),
      email: data.get("email"),
    };
    console.log("address", address);
  };
  return (
    <div>
      <Grid container spacing={4}>
        <Grid
          xs={12}
          lg={5}
          className="lg:mt-7 mt-4 border border-opacity-30 border-[#4f332c] rounded-xl shadow-lg h-[30.5rem] overflow-y-scroll scroll-3 bg-[#F5F5F5]"
        >
          <div className="p-5 py-7 border border-opacity-10 border-[#4f332c] shadow-lg">
            <AddressCard />
            <Button
              sx={{
                mt: 2,
                bgcolor: "#8b7a67",
                text: "white",
                ":hover": { bgcolor: "#aa9d8f" },
              }}
              size="large"
              variant="contained"
            >
              Deliver Here
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box className="border border-opacity-15 bg-[#F5F5F5] rounded-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="fullName"
                    name="fullName"
                    label="Full Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                {/* <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid> */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="10-Digit Mobile Number"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address (Area and Street)"
                    fullWidth
                    autoComplete="given-name"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City/District/Town"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>{" "}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="pincode"
                    name="pincode"
                    label="Pincode"
                    fullWidth
                    autoComplete="shipping postal-code"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="landmark"
                    name="landmark"
                    label="Landmark (Optional)"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="email"
                    name="email"
                    label="Email Address"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    sx={{
                      px: "2rem",
                      py: "0.7rem",
                      bgcolor: "#8b7a67",
                      text: "white",
                      ":hover": { bgcolor: "#aa9d8f" },
                    }}
                    size="large"
                    variant="contained"
                    type="submit"
                  >
                    SAVE AND DELIVER HERE
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
