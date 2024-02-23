// import { Step, StepLabel, Stepper } from "@mui/material";
// import React from "react";
// import { StepConnector } from "@mui/material";

// const steps = ["Order Confirmed", "Shipped", "Out for delivery", "Delivered"];

// const OrderTracker = ({ activeStep }) => {
//   return (
//     <div className="w-full">
//       <Stepper activeStep={activeStep} alternativeLabel connector={""}>
//         {steps.map((label) => (
//           <Step>
//             <StepLabel sx={{ color: "#9155FD", fontSize: "44px" }}>
//               {label}
//             </StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//     </div>
//   );
// };

// export default OrderTracker;

// import { Step, StepLabel, Stepper, StepConnector } from "@mui/material";
// import React from "react";
// import { styled } from "@mui/material/styles";

// // Customizing the StepConnector
// const CustomConnector = styled(StepConnector)(({ theme }) => ({
//   "& .MuiStepConnector-line": {
//     borderColor: "#26a541", // Custom connector line color
//     borderWidth: 2, // Custom connector line thickness
//   },
// }));

// const steps = ["Order Confirmed", "Shipped", "Out for delivery", "Delivered"];

// const OrderTracker = ({ activeStep }) => {
//   return (
//     <div className="w-full">
//       <Stepper
//         activeStep={activeStep}
//         alternativeLabel
//         connector={<CustomConnector />}
//       >
//         {steps.map((label, index) => (
//           <Step key={label}>
//             <StepLabel
//               sx={{
//                 color: "#26a541",
//                 "& .MuiStepLabel-label": {
//                   color: "#26a541",
//                   fontSize: "16px",
//                   "&.Mui-active": { color: "gray" },
//                   "&.Mui-completed": { color: "" },
//                 },
//               }}
//             >
//               {label}
//             </StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//     </div>
//   );
// };

// export default OrderTracker;

// import React from "react";
// import { Step, StepLabel, Stepper, StepConnector } from "@mui/material";
// import { styled } from "@mui/material/styles";

// // Customizing the StepConnector
// const CustomConnector = styled(StepConnector)(({ theme }) => ({
//   "& .MuiStepConnector-line": {
//     borderColor: "#26a541", // Custom connector line color
//     borderWidth: 2, // Custom connector line thickness
//   },
// }));

// const steps = ["Order Confirmed", "Shipped", "Out for delivery", "Delivered"];

// const OrderTracker = ({ activeStep }) => {
//   return (
//     <div className="w-full">
//       <Stepper
//         activeStep={activeStep}
//         alternativeLabel
//         connector={<CustomConnector />}
//       >
//         {steps.map((label, index) => (
//           <Step key={label}>
//             <StepLabel
//               StepIconProps={{
//                 sx: {
//                   color: "gray", // Default step icon color
//                   "&.Mui-active": { color: "#7D7C7C" }, // Active step icon color
//                   "&.Mui-completed": { color: "#26a541" }, // Completed step icon color
//                 },
//               }}
//               sx={{
//                 "& .MuiStepLabel-label": {
//                   color: "#26a541",
//                   fontSize: "16px",
//                   "&.Mui-active": { color: "#7D7C7C" },
//                   "&.Mui-completed": { color: "#26a541" },
//                 },
//               }}
//             >
//               {label}
//             </StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//     </div>
//   );
// };

// export default OrderTracker;

import React from "react";
import { Step, StepLabel, Stepper } from "@mui/material";
import "./OrderTracker.css"; // Make sure to import the CSS file

const steps = ["Order Confirmed", "Shipped", "Out for delivery", "Delivered"];

const OrderTracker = ({ activeStep }) => {
  return (
    <div className="w-full">
      <Stepper activeStep={activeStep} alternativeLabel className="stepper">
        {steps.map((label, index) => (
          <Step key={label} className={index < activeStep ? "completed" : ""}>
            <StepLabel
              StepIconProps={{
                sx: {
                  color: "gray", // Default step icon color
                  "&.Mui-active": { color: "#7D7C7C" }, // Active step icon color
                  "&.Mui-completed": { color: "#26a541" }, // Completed step icon color
                },
              }}
              sx={{
                "& .MuiStepLabel-label": {
                  fontFamily: "rubik",
                  color: "#7D7C7C",
                  fontSize: "16px",
                  "&.Mui-active": { color: "#7D7C7C" },
                  "&.Mui-completed": { color: "#26a541" },
                },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default OrderTracker;
