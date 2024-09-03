// import { Box, Button, Grid, TextField } from "@mui/material";
// import React from "react";
// import AddressCard from "../AddressCard/AddressCard";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { createOrder } from "../../../State/Order/Action";

// const DeliveryAddressForm = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { auth } = useSelector((store) => store);
//   // console.log("auth", auth.user);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const data = new FormData(e.currentTarget);

//     const address = {
//       firstName: data.get("firstName"),
//       lastName: data.get("lastName"),
//       phoneNumber: data.get("phoneNumber"),
//       streetAddress: data.get("streetAddress"),
//       city: data.get("city"),
//       state: data.get("state"),
//       pincode: data.get("pincode"),
//       landmark: data.get("landmark"),
//       email: data.get("email"),
//     };

//     const orderData = { address, navigate };
//     dispatch(createOrder(orderData));
//     console.log("address", address);
//   };
//   return (
//     <div>
//       <Grid container spacing={4}>
//         <Grid
//           xs={12}
//           lg={5}
//           className="lg:mt-7 mt-4 border border-opacity-30 border-[#4f332c] rounded-xl shadow-lg h-[30.5rem] overflow-y-scroll scroll-3 bg-[#F5F5F5]"
//         >
//           <div className="p-5 py-7 border border-opacity-10 border-[#4f332c] shadow-lg">
//             {auth.user?.addresses.map((item) => (
//               <AddressCard address={item} />
//             ))}
//             <Button
//               sx={{
//                 mt: 2,
//                 bgcolor: "#8b7a67",
//                 text: "white",
//                 ":hover": { bgcolor: "#aa9d8f" },
//               }}
//               size="large"
//               variant="contained"
//             >
//               Deliver Here
//             </Button>
//           </div>
//         </Grid>
//         <Grid item xs={12} lg={7}>
//           <Box className="border border-opacity-15 bg-[#F5F5F5] rounded-md shadow-md p-5">
//             <form onSubmit={handleSubmit}>
//               <Grid container spacing={3}>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="firstName"
//                     name="firstName"
//                     label="First Name"
//                     fullWidth
//                     autoComplete="given-first-name"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="lastName"
//                     name="lastName"
//                     label="Last Name"
//                     fullWidth
//                     autoComplete="given-last-name"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="phoneNumber"
//                     name="phoneNumber"
//                     label="10-Digit Mobile Number"
//                     fullWidth
//                     autoComplete="given-name"
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     required
//                     id="streetAddress"
//                     name="streetAddress"
//                     label="Address (Area and Street)"
//                     fullWidth
//                     autoComplete="given-address"
//                     multiline
//                     rows={4}
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="city"
//                     name="city"
//                     label="City/District/Town"
//                     fullWidth
//                     autoComplete="given-name"
//                   />
//                 </Grid>{" "}
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="state"
//                     name="state"
//                     label="State"
//                     fullWidth
//                     autoComplete="given-name"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="pincode"
//                     name="pincode"
//                     label="Pincode"
//                     fullWidth
//                     autoComplete="shipping postal-code"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     id="landmark"
//                     name="landmark"
//                     label="Landmark (Optional)"
//                     fullWidth
//                     autoComplete="given-name"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="email"
//                     name="email"
//                     label="Email Address"
//                     fullWidth
//                     autoComplete="given-name"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <Button
//                     sx={{
//                       px: "2rem",
//                       py: "0.7rem",
//                       bgcolor: "#8b7a67",
//                       text: "white",
//                       ":hover": { bgcolor: "#aa9d8f" },
//                     }}
//                     size="large"
//                     variant="contained"
//                     type="submit"
//                   >
//                     SAVE AND DELIVER HERE
//                   </Button>
//                 </Grid>
//               </Grid>
//             </form>
//           </Box>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default DeliveryAddressForm;

// import { Box, Button, Grid, TextField } from "@mui/material";
// import React, { useState } from "react";
// import AddressCard from "../AddressCard/AddressCard";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { createOrder } from "../../../State/Order/Action";

// const DeliveryAddressForm = () => {
//   const [selectedAddress, setSelectedAddress] = useState(null);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { auth } = useSelector((store) => store);

//   const handleAddressSelect = (address) => {
//     setSelectedAddress(address);
//   };

//   const handleDeliverHere = () => {
//     if (selectedAddress) {
//       const orderData = { address: selectedAddress, navigate };
//       dispatch(createOrder(orderData));
//     }
//   };

//   const handleEditAddress = () => {
//     // Implement address editing functionality if needed
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = new FormData(e.currentTarget);

//     const address = {
//       firstName: data.get("firstName"),
//       lastName: data.get("lastName"),
//       phoneNumber: data.get("phoneNumber"),
//       streetAddress: data.get("streetAddress"),
//       city: data.get("city"),
//       state: data.get("state"),
//       pincode: data.get("pincode"),
//       landmark: data.get("landmark"),
//       email: data.get("email"),
//     };

//     const orderData = { address, navigate };
//     dispatch(createOrder(orderData));
//     console.log("New Address:", address);
//   };

//   return (
//     <div>
//       <Grid container spacing={4}>
//         <Grid
//           item
//           xs={12}
//           lg={5}
//           className="lg:mt-7 mt-4 border border-opacity-30 border-[#4f332c] rounded-xl shadow-lg h-[30.5rem] overflow-y-scroll scroll-3 bg-[#F5F5F5]"
//         >
//           <div className="p-5 py-7 border border-opacity-10 border-[#4f332c] shadow-lg">
//             {auth.user?.addresses.map((item) => (
//               <div
//                 key={item._id}
//                 className={`mb-4 p-4 border rounded-lg ${
//                   selectedAddress?._id === item._id
//                     ? "bg-[#e0e0e0]"
//                     : "bg-[#ffffff]"
//                 }`}
//               >
//                 <AddressCard address={item} />
//                 <div className="flex justify-between mt-2">
//                   <Button
//                     onClick={() => handleAddressSelect(item)}
//                     sx={{
//                       bgcolor:
//                         selectedAddress?._id === item._id
//                           ? "#8b7a67"
//                           : "#f0f0f0",
//                       color:
//                         selectedAddress?._id === item._id
//                           ? "#ffffff"
//                           : "#000000",
//                       ":hover": {
//                         bgcolor:
//                           selectedAddress?._id === item._id
//                             ? "#aa9d8f"
//                             : "#e0e0e0",
//                       },
//                     }}
//                   >
//                     {selectedAddress?._id === item._id ? "Selected" : "Select"}
//                   </Button>
//                   {selectedAddress?._id === item._id && (
//                     <div>
//                       <Button
//                         onClick={handleDeliverHere}
//                         sx={{
//                           ml: 2,
//                           bgcolor: "#8b7a67",
//                           color: "#ffffff",
//                           ":hover": { bgcolor: "#aa9d8f" },
//                         }}
//                       >
//                         Deliver Here
//                       </Button>
//                       <Button
//                         onClick={handleEditAddress}
//                         sx={{
//                           ml: 2,
//                           bgcolor: "#f0f0f0",
//                           color: "#000000",
//                           ":hover": { bgcolor: "#e0e0e0" },
//                         }}
//                       >
//                         Edit
//                       </Button>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </Grid>
//         <Grid item xs={12} lg={7}>
//           <Box className="border border-opacity-15 bg-[#F5F5F5] rounded-md shadow-md p-5">
//             <form onSubmit={handleSubmit}>
//               <Grid container spacing={3}>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="firstName"
//                     name="firstName"
//                     label="First Name"
//                     fullWidth
//                     autoComplete="given-first-name"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="lastName"
//                     name="lastName"
//                     label="Last Name"
//                     fullWidth
//                     autoComplete="given-last-name"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="phoneNumber"
//                     name="phoneNumber"
//                     label="10-Digit Mobile Number"
//                     fullWidth
//                     autoComplete="given-name"
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     required
//                     id="streetAddress"
//                     name="streetAddress"
//                     label="Address (Area and Street)"
//                     fullWidth
//                     autoComplete="given-address"
//                     multiline
//                     rows={4}
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="city"
//                     name="city"
//                     label="City/District/Town"
//                     fullWidth
//                     autoComplete="given-name"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="state"
//                     name="state"
//                     label="State"
//                     fullWidth
//                     autoComplete="given-name"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="pincode"
//                     name="pincode"
//                     label="Pincode"
//                     fullWidth
//                     autoComplete="shipping postal-code"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     id="landmark"
//                     name="landmark"
//                     label="Landmark (Optional)"
//                     fullWidth
//                     autoComplete="given-name"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="email"
//                     name="email"
//                     label="Email Address"
//                     fullWidth
//                     autoComplete="given-name"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <Button
//                     sx={{
//                       px: "2rem",
//                       py: "0.7rem",
//                       bgcolor: "#8b7a67",
//                       color: "#ffffff",
//                       ":hover": { bgcolor: "#aa9d8f" },
//                     }}
//                     size="large"
//                     variant="contained"
//                     type="submit"
//                   >
//                     SAVE AND DELIVER HERE
//                   </Button>
//                 </Grid>
//               </Grid>
//             </form>
//           </Box>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default DeliveryAddressForm;

// import {
//   Box,
//   Button,
//   Grid,
//   TextField,
//   Snackbar,
//   Alert,
//   IconButton,
// } from "@mui/material";
// import React, { useState, useEffect } from "react";
// import AddressCard from "../AddressCard/AddressCard";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { createOrder } from "../../../State/Order/Action";
// import {
//   updateAddress,
//   deleteAddress,
//   fetchAddresses,
// } from "../../../State/Address/Action";
// import CloseIcon from "@mui/icons-material/Close";

// const DeliveryAddressForm = () => {
//   const [selectedAddress, setSelectedAddress] = useState(null);
//   const [addressForm, setAddressForm] = useState({});
//   const [showSnackbar, setShowSnackbar] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState("");
//   const [isEditing, setIsEditing] = useState(false);
//   const [editAddressId, setEditAddressId] = useState(null);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { auth } = useSelector((store) => store);

//   useEffect(() => {
//     dispatch(fetchAddresses());
//   }, [dispatch]);

//   const handleAddressSelect = (address) => {
//     setSelectedAddress(address);
//     setIsEditing(false);
//     setAddressForm({});
//   };

//   const handleDeliverHere = () => {
//     if (selectedAddress) {
//       const orderData = { address: selectedAddress, navigate };
//       dispatch(createOrder(orderData));
//     }
//   };

//   const handleEditAddress = (address) => {
//     setIsEditing(true);
//     setEditAddressId(address._id);
//     setAddressForm({
//       firstName: address.firstName,
//       lastName: address.lastName,
//       phoneNumber: address.phoneNumber,
//       streetAddress: address.streetAddress,
//       city: address.city,
//       state: address.state,
//       pincode: address.pincode,
//       landmark: address.landmark || "",
//       email: address.email || "",
//     });
//   };

//   const handleDeleteAddress = (addressId) => {
//     dispatch(deleteAddress(addressId));
//     setSnackbarMessage("Address deleted successfully!");
//     setShowSnackbar(true);
//   };

//   const handleFormChange = (e) => {
//     setAddressForm({ ...addressForm, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isEditing) {
//       dispatch(updateAddress(editAddressId, addressForm));
//       setSnackbarMessage("Address updated successfully!");
//     } else {
//       // Save the new address
//       dispatch(createOrder({ address: addressForm, navigate }));
//       setSnackbarMessage("New address added and order created!");
//     }
//     setShowSnackbar(true);
//     setIsEditing(false);
//     setAddressForm({});
//     setSelectedAddress(null);
//   };

//   const handleSnackbarClose = () => {
//     setShowSnackbar(false);
//   };

//   return (
//     <div>
//       <Grid container spacing={4}>
//         <Grid
//           item
//           xs={12}
//           lg={5}
//           className="lg:mt-7 mt-4 border border-opacity-30 border-[#4f332c] rounded-xl shadow-lg h-[30.5rem] overflow-y-scroll scroll-3 bg-[#F5F5F5]"
//         >
//           <div className="p-5 py-7 border border-opacity-10 border-[#4f332c] shadow-lg">
//             {auth.user?.addresses.map((item) => (
//               <div
//                 key={item._id}
//                 className={`mb-4 p-4 border rounded-lg ${
//                   selectedAddress?._id === item._id
//                     ? "bg-[#e0e0e0]"
//                     : "bg-[#ffffff]"
//                 }`}
//               >
//                 <AddressCard address={item} />
//                 <div className="flex justify-between mt-2">
//                   <Button
//                     onClick={() => handleAddressSelect(item)}
//                     sx={{
//                       bgcolor:
//                         selectedAddress?._id === item._id
//                           ? "#8b7a67"
//                           : "#f0f0f0",
//                       color:
//                         selectedAddress?._id === item._id
//                           ? "#ffffff"
//                           : "#000000",
//                       ":hover": {
//                         bgcolor:
//                           selectedAddress?._id === item._id
//                             ? "#aa9d8f"
//                             : "#e0e0e0",
//                       },
//                     }}
//                   >
//                     {selectedAddress?._id === item._id ? "Selected" : "Select"}
//                   </Button>
//                   <div>
//                     <Button
//                       onClick={() => handleDeliverHere()}
//                       sx={{
//                         ml: 2,
//                         bgcolor: "#8b7a67",
//                         color: "#ffffff",
//                         ":hover": { bgcolor: "#aa9d8f" },
//                       }}
//                     >
//                       Deliver Here
//                     </Button>
//                     <Button
//                       onClick={() => handleEditAddress(item)}
//                       sx={{
//                         ml: 2,
//                         bgcolor: "#f0f0f0",
//                         color: "#000000",
//                         ":hover": { bgcolor: "#e0e0e0" },
//                       }}
//                     >
//                       Edit
//                     </Button>
//                     <Button
//                       onClick={() => handleDeleteAddress(item._id)}
//                       sx={{
//                         ml: 2,
//                         bgcolor: "#f44336",
//                         color: "#ffffff",
//                         ":hover": { bgcolor: "#d32f2f" },
//                       }}
//                     >
//                       Delete
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </Grid>
//         <Grid item xs={12} lg={7}>
//           <Box className="border border-opacity-15 bg-[#F5F5F5] rounded-md shadow-md p-5">
//             <form onSubmit={handleSubmit}>
//               <Grid container spacing={3}>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="firstName"
//                     name="firstName"
//                     label="First Name"
//                     fullWidth
//                     value={addressForm.firstName || ""}
//                     onChange={handleFormChange}
//                     autoComplete="given-first-name"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="lastName"
//                     name="lastName"
//                     label="Last Name"
//                     fullWidth
//                     value={addressForm.lastName || ""}
//                     onChange={handleFormChange}
//                     autoComplete="given-last-name"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="phoneNumber"
//                     name="phoneNumber"
//                     label="10-Digit Mobile Number"
//                     fullWidth
//                     value={addressForm.phoneNumber || ""}
//                     onChange={handleFormChange}
//                     autoComplete="given-name"
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     required
//                     id="streetAddress"
//                     name="streetAddress"
//                     label="Address (Area and Street)"
//                     fullWidth
//                     value={addressForm.streetAddress || ""}
//                     onChange={handleFormChange}
//                     autoComplete="given-address"
//                     multiline
//                     rows={4}
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="city"
//                     name="city"
//                     label="City/District/Town"
//                     fullWidth
//                     value={addressForm.city || ""}
//                     onChange={handleFormChange}
//                     autoComplete="given-name"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="state"
//                     name="state"
//                     label="State"
//                     fullWidth
//                     value={addressForm.state || ""}
//                     onChange={handleFormChange}
//                     autoComplete="given-name"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="pincode"
//                     name="pincode"
//                     label="Pincode"
//                     fullWidth
//                     value={addressForm.pincode || ""}
//                     onChange={handleFormChange}
//                     autoComplete="shipping postal-code"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     id="landmark"
//                     name="landmark"
//                     label="Landmark (Optional)"
//                     fullWidth
//                     value={addressForm.landmark || ""}
//                     onChange={handleFormChange}
//                     autoComplete="given-name"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="email"
//                     name="email"
//                     label="Email Address"
//                     fullWidth
//                     value={addressForm.email || ""}
//                     onChange={handleFormChange}
//                     autoComplete="given-name"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <Button
//                     sx={{
//                       px: "2rem",
//                       py: "0.7rem",
//                       bgcolor: "#8b7a67",
//                       color: "#ffffff",
//                       ":hover": { bgcolor: "#aa9d8f" },
//                     }}
//                     size="large"
//                     variant="contained"
//                     type="submit"
//                   >
//                     {isEditing ? "Save Changes" : "Save Address"}
//                   </Button>
//                 </Grid>
//               </Grid>
//             </form>
//           </Box>
//         </Grid>
//       </Grid>
//       <Snackbar
//         open={showSnackbar}
//         autoHideDuration={6000}
//         onClose={handleSnackbarClose}
//         action={
//           <IconButton
//             size="small"
//             aria-label="close"
//             color="inherit"
//             onClick={handleSnackbarClose}
//           >
//             <CloseIcon fontSize="small" />
//           </IconButton>
//         }
//       >
//         <Alert
//           onClose={handleSnackbarClose}
//           severity="success"
//           sx={{ width: "100%" }}
//         >
//           {snackbarMessage}
//         </Alert>
//       </Snackbar>
//     </div>
//   );
// };

// export default DeliveryAddressForm;

// import {
//   Box,
//   Button,
//   Grid,
//   TextField,
//   Snackbar,
//   Alert,
//   IconButton,
//   Icon,
// } from "@mui/material";
// import React, { useState, useEffect } from "react";
// import AddressCard from "../AddressCard/AddressCard";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { createOrder } from "../../../State/Order/Action";
// import {
//   updateAddress,
//   deleteAddress,
//   fetchAddresses,
// } from "../../../State/Address/Action";
// import CloseIcon from "@mui/icons-material/Close";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// const DeliveryAddressForm = () => {
//   const [selectedAddress, setSelectedAddress] = useState(null);
//   const [addressForm, setAddressForm] = useState({});
//   const [showSnackbar, setShowSnackbar] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState("");
//   const [isEditing, setIsEditing] = useState(false);
//   const [editAddressId, setEditAddressId] = useState(null);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { auth } = useSelector((store) => store);

//   useEffect(() => {
//     dispatch(fetchAddresses());
//   }, [dispatch]);

//   const handleAddressSelect = (address) => {
//     setSelectedAddress(address);
//     setIsEditing(false);
//     setAddressForm({});
//   };

//   const handleDeliverHere = (address) => {
//     if (address) {
//       const orderData = { address, navigate };
//       dispatch(createOrder(orderData));
//     }
//   };

//   const handleEditAddress = (address) => {
//     setIsEditing(true);
//     setEditAddressId(address._id);
//     setAddressForm({
//       firstName: address.firstName,
//       lastName: address.lastName,
//       phoneNumber: address.phoneNumber,
//       streetAddress: address.streetAddress,
//       city: address.city,
//       state: address.state,
//       pincode: address.pincode,
//       landmark: address.landmark || "",
//       email: address.email || "",
//     });
//   };

//   const handleDeleteAddress = (addressId) => {
//     dispatch(deleteAddress(addressId));
//     setSnackbarMessage("Address deleted successfully!");
//     setShowSnackbar(true);
//   };

//   const handleFormChange = (e) => {
//     setAddressForm({ ...addressForm, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isEditing) {
//       dispatch(updateAddress(editAddressId, addressForm));
//       setSnackbarMessage("Address updated successfully!");
//     } else {
//       // Save the new address
//       dispatch(createOrder({ address: addressForm, navigate }));
//       setSnackbarMessage("New address added and order created!");
//     }
//     setShowSnackbar(true);
//     setIsEditing(false);
//     setAddressForm({});
//     setSelectedAddress(null);
//   };

//   const handleSnackbarClose = () => {
//     setShowSnackbar(false);
//   };

//   return (
//     <div>
//       <Grid container spacing={4}>
//         <Grid
//           item
//           xs={12}
//           lg={5}
//           className="lg:mt-7 mt-4 border border-opacity-30 border-[#4f332c] rounded-xl shadow-lg h-[30.5rem] overflow-y-scroll scroll-3 bg-[#F5F5F5]"
//         >
//           <div className="p-5 py-7 border border-opacity-10 border-[#4f332c] shadow-lg">
//             {auth.user?.addresses.map((item) => (
//               <div
//                 key={item._id}
//                 className={`mb-4 p-4 border rounded-lg ${
//                   selectedAddress?._id === item._id
//                     ? "bg-[#e0e0e0]"
//                     : "bg-[#ffffff]"
//                 }`}
//               >
//                 <AddressCard address={item} />
//                 <div className="flex justify-between mt-2">
//                   <Button
//                     onClick={() => handleDeliverHere(item)}
//                     sx={{
//                       color: "white",
//                       bgcolor: "#FE5A1D",

//                       ":hover": { bgcolor: "#FF7538" },
//                     }}
//                   >
//                     {/* {selectedAddress?._id === item._id
//                       ? "Deliver Here"
//                       : "Deliver Here"} */}
//                     Deliver Here
//                   </Button>
//                   <div>
//                     <Button
//                       onClick={() => handleEditAddress(item)}
//                       sx={{
//                         ml: 2,
//                         bgcolor: "#f0f0f0",
//                         color: "#000000",
//                         ":hover": { bgcolor: "#e0e0e0" },
//                       }}
//                     >
//                       <EditIcon
//                         sx={{
//                           height: "15px",
//                         }}
//                       />
//                       Edit
//                     </Button>
//                     <Button
//                       onClick={() => handleDeleteAddress(item._id)}
//                       sx={{
//                         ml: 2,
//                         bgcolor: "#E5E4E2",
//                         color: "black",
//                         ":hover": { bgcolor: "#DA2C43" },
//                       }}
//                     >
//                       <DeleteIcon />
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </Grid>
//         <Grid item xs={12} lg={7}>
//           <Box className="border border-opacity-15 bg-[#F5F5F5] rounded-md shadow-md p-5">
//             <form onSubmit={handleSubmit}>
//               <Grid container spacing={3}>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="firstName"
//                     name="firstName"
//                     label="First Name"
//                     fullWidth
//                     value={addressForm.firstName || ""}
//                     onChange={handleFormChange}
//                     autoComplete="given-first-name"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="lastName"
//                     name="lastName"
//                     label="Last Name"
//                     fullWidth
//                     value={addressForm.lastName || ""}
//                     onChange={handleFormChange}
//                     autoComplete="given-last-name"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="phoneNumber"
//                     name="phoneNumber"
//                     label="10-Digit Mobile Number"
//                     fullWidth
//                     value={addressForm.phoneNumber || ""}
//                     onChange={handleFormChange}
//                     autoComplete="given-name"
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     required
//                     id="streetAddress"
//                     name="streetAddress"
//                     label="Address (Area and Street)"
//                     fullWidth
//                     value={addressForm.streetAddress || ""}
//                     onChange={handleFormChange}
//                     autoComplete="given-address"
//                     multiline
//                     rows={4}
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="city"
//                     name="city"
//                     label="City/District/Town"
//                     fullWidth
//                     value={addressForm.city || ""}
//                     onChange={handleFormChange}
//                     autoComplete="given-name"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="state"
//                     name="state"
//                     label="State"
//                     fullWidth
//                     value={addressForm.state || ""}
//                     onChange={handleFormChange}
//                     autoComplete="given-name"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="pincode"
//                     name="pincode"
//                     label="Pincode"
//                     fullWidth
//                     value={addressForm.pincode || ""}
//                     onChange={handleFormChange}
//                     autoComplete="shipping postal-code"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     id="landmark"
//                     name="landmark"
//                     label="Landmark (Optional)"
//                     fullWidth
//                     value={addressForm.landmark || ""}
//                     onChange={handleFormChange}
//                     autoComplete="given-name"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     required
//                     id="email"
//                     name="email"
//                     label="Email Address"
//                     fullWidth
//                     value={addressForm.email || ""}
//                     onChange={handleFormChange}
//                     autoComplete="given-name"
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <Button
//                     sx={{
//                       px: "2rem",
//                       py: "0.7rem",
//                       bgcolor: "#8b7a67",
//                       color: "#ffffff",
//                       ":hover": { bgcolor: "#aa9d8f" },
//                     }}
//                     size="large"
//                     variant="contained"
//                     type="submit"
//                   >
//                     {isEditing ? "UPDATE ADDRESS" : "SAVE AND DELIVER HERE"}
//                   </Button>
//                 </Grid>
//               </Grid>
//             </form>
//           </Box>
//         </Grid>
//       </Grid>
//       <Snackbar
//         open={showSnackbar}
//         autoHideDuration={6000}
//         onClose={handleSnackbarClose}
//         action={
//           <IconButton
//             size="small"
//             aria-label="close"
//             color="inherit"
//             onClick={handleSnackbarClose}
//           >
//             <CloseIcon fontSize="small" />
//           </IconButton>
//         }
//       >
//         <Alert
//           onClose={handleSnackbarClose}
//           severity="success"
//           sx={{ width: "100%" }}
//         >
//           {snackbarMessage}
//         </Alert>
//       </Snackbar>
//     </div>
//   );
// };

// export default DeliveryAddressForm;

import {
  Box,
  Button,
  Grid,
  TextField,
  Snackbar,
  Alert,
  IconButton,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../../State/Order/Action";
import {
  updateAddress,
  deleteAddress,
  fetchAddresses,
} from "../../../State/Address/Action";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const DeliveryAddressForm = () => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [addressForm, setAddressForm] = useState({});
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editAddressId, setEditAddressId] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    dispatch(fetchAddresses());
  }, [dispatch]);

  // const handleAddressSelect = (address) => {
  //   setSelectedAddress(address);
  //   setIsEditing(false);
  //   setAddressForm({});
  // };

  const handleDeliverHere = (address) => {
    if (address) {
      const orderData = { address, navigate };
      dispatch(createOrder(orderData));
    }
  };

  const handleEditAddress = (address) => {
    setIsEditing(true);
    setEditAddressId(address._id);
    setAddressForm({
      firstName: address.firstName,
      lastName: address.lastName,
      phoneNumber: address.phoneNumber,
      streetAddress: address.streetAddress,
      city: address.city,
      state: address.state,
      pincode: address.pincode,
      landmark: address.landmark || "",
      email: address.email || "",
    });
  };

  const handleDeleteAddress = (addressId) => {
    dispatch(deleteAddress(addressId));
    setSnackbarMessage("Address deleted successfully!");
    setShowSnackbar(true);
  };

  const handleFormChange = (e) => {
    setAddressForm({ ...addressForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      dispatch(updateAddress(editAddressId, addressForm));
      setSnackbarMessage("Address updated successfully!");
    } else {
      // Save the new address
      dispatch(createOrder({ address: addressForm, navigate }));
      setSnackbarMessage("New address added and order created!");
    }
    setShowSnackbar(true);
    setIsEditing(false);
    setAddressForm({});
    setSelectedAddress(null);
  };

  const handleSnackbarClose = () => {
    setShowSnackbar(false);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          className="border border-opacity-30 border-[#4f332c] rounded-xl shadow-lg h-[30.5rem] overflow-y-auto bg-[#F5F5F5]"
        >
          <div className="p-5 py-7 border border-opacity-10 border-[#4f332c] shadow-lg">
            {auth.user?.addresses.map((item) => (
              <div
                key={item._id}
                className={`mb-4 p-4 border rounded-lg ${
                  selectedAddress?._id === item._id
                    ? "bg-[#e0e0e0]"
                    : "bg-[#ffffff]"
                }`}
              >
                <AddressCard address={item} />
                <div className="flex flex-col sm:flex-row justify-between mt-2">
                  <Button
                    onClick={() => handleDeliverHere(item)}
                    sx={{
                      color: "white",
                      bgcolor: "#FE5A1D",
                      ":hover": { bgcolor: "#FF7538" },
                      mb: { xs: 1, sm: 0 },
                      width: { xs: "100%", sm: "auto" },
                    }}
                  >
                    Deliver Here
                  </Button>
                  <div className="flex flex-col sm:flex-row mt-1 sm:mt-0">
                    <Button
                      onClick={() => handleEditAddress(item)}
                      sx={{
                        ml: 0,
                        sm: 1,
                        bgcolor: "#f0f0f0",
                        color: "#000000",
                        ":hover": { bgcolor: "#e0e0e0" },
                        mb: { xs: 1, sm: 0 },
                        width: { xs: "100%", sm: "auto" },
                      }}
                    >
                      <EditIcon sx={{ height: "15px", mr: 0.5 }} />
                      Edit
                    </Button>
                    <Button
                      onClick={() => handleDeleteAddress(item._id)}
                      sx={{
                        ml: 0,
                        sm: 1,
                        bgcolor: "#E5E4E2",
                        color: "black",
                        ":hover": { bgcolor: "#DA2C43" },
                        width: { xs: "100%", sm: "auto" },
                      }}
                    >
                      <DeleteIcon />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className="border border-opacity-15 bg-[#F5F5F5] rounded-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    value={addressForm.firstName || ""}
                    onChange={handleFormChange}
                    autoComplete="given-first-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    value={addressForm.lastName || ""}
                    onChange={handleFormChange}
                    autoComplete="given-last-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="10-Digit Mobile Number"
                    fullWidth
                    value={addressForm.phoneNumber || ""}
                    onChange={handleFormChange}
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="streetAddress"
                    name="streetAddress"
                    label="Address (Area and Street)"
                    fullWidth
                    value={addressForm.streetAddress || ""}
                    onChange={handleFormChange}
                    autoComplete="given-address"
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
                    value={addressForm.city || ""}
                    onChange={handleFormChange}
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State"
                    fullWidth
                    value={addressForm.state || ""}
                    onChange={handleFormChange}
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
                    value={addressForm.pincode || ""}
                    onChange={handleFormChange}
                    autoComplete="shipping postal-code"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="landmark"
                    name="landmark"
                    label="Landmark (Optional)"
                    fullWidth
                    value={addressForm.landmark || ""}
                    onChange={handleFormChange}
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
                    value={addressForm.email || ""}
                    onChange={handleFormChange}
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    sx={{
                      px: "2rem",
                      py: "0.7rem",
                      bgcolor: "#8b7a67",
                      color: "#ffffff",
                      ":hover": { bgcolor: "#aa9d8f" },
                      width: "100%",
                    }}
                    size="large"
                    variant="contained"
                    type="submit"
                  >
                    {isEditing ? "UPDATE ADDRESS" : "SAVE AND DELIVER HERE"}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleSnackbarClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default DeliveryAddressForm;
