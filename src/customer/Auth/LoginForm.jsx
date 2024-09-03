// import React from "react";
// import {
//   Button,
//   Grid,
//   IconButton,
//   InputAdornment,
//   TextField,
// } from "@mui/material";
// import { useState } from "react";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
// import { useNavigate } from "react-router-dom";
// import EmailIcon from "@mui/icons-material/Email";
// import LockIcon from "@mui/icons-material/Lock";
// import { useDispatch } from "react-redux";
// import { login } from "../../State/Auth/Action";

// const LoginForm = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // useEffect(() => {
//   //   if (jwt) {
//   //     dispatch(getUser());
//   //   }
//   // }, [jwt, auth.jwt]);

//   const [visible, setVisible] = useState(true);
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const data = new FormData(event.currentTarget);
//     const userData = {
//       email: data.get("email"),
//       password: data.get("password"),
//     };

//     dispatch(login(userData));
//     console.log("userData", userData);
//   };
//   const EndAdorment = ({ visible, setVisible }) => {
//     return (
//       <InputAdornment position="end">
//         <IconButton onClick={() => setVisible(!visible)}>
//           {visible ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
//         </IconButton>
//       </InputAdornment>
//     );
//   };
//   const EmailAdorment = () => {
//     return (
//       <InputAdornment position="start">
//         <EmailIcon />
//       </InputAdornment>
//     );
//   };
//   const PasswordAdorment = () => {
//     return (
//       <InputAdornment position="start">
//         <LockIcon />
//       </InputAdornment>
//     );
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={3}>
//           <Grid item xs={12}>
//             <TextField
//               required
//               id="email"
//               name="email"
//               label="Email"
//               fullWidth
//               autoComplete="email"
//               InputProps={{
//                 startAdornment: <EmailAdorment />,
//               }}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               required
//               id="password"
//               name="password"
//               label="Password"
//               fullWidth
//               autoComplete="password"
//               type={visible ? "password" : "text"}
//               InputProps={{
//                 endAdornment: (
//                   <EndAdorment visible={visible} setVisible={setVisible} />
//                 ),
//                 startAdornment: <PasswordAdorment />,
//               }}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Button
//               className=" w-full"
//               type="submit"
//               variant="contained"
//               size="large"
//               sx={{
//                 padding: "1rem 0.5rem",
//                 background: "#8b7a67",
//                 ":hover": { background: "#B19470" },
//               }}
//             >
//               Login
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//       <div className="flex justify-center flex-col items-center">
//         <div className="py-3 flex items-center">
//           <p>New to MoonMade?</p>
//           <Button
//             onClick={() => navigate("/register")}
//             className="ml-5"
//             size="small"
//             sx={{ color: "#38419D" }}
//           >
//             Create an Account
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;

// import React, { useState } from "react";
// import {
//   Button,
//   Grid,
//   IconButton,
//   InputAdornment,
//   TextField,
// } from "@mui/material";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
// import { useNavigate } from "react-router-dom";
// import EmailIcon from "@mui/icons-material/Email";
// import LockIcon from "@mui/icons-material/Lock";
// import { useDispatch } from "react-redux";
// import { login } from "../../State/Auth/Action";

// const LoginForm = ({ handleClose }) => {
//   // Accept handleClose as a prop
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [visible, setVisible] = useState(true);
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const data = new FormData(event.currentTarget);
//     const userData = {
//       email: data.get("email"),
//       password: data.get("password"),
//     };

//     // Assuming `dispatch(login(userData))` returns a Promise
//     dispatch(login(userData))
//       .then(() => {
//         handleClose(); // Call handleClose after successful login
//         navigate("/"); // Navigate to homepage or dashboard as required
//       })
//       .catch((error) => {
//         console.error("Login failed:", error);
//         // Handle login failure (e.g., show an error message)
//       });

//     console.log("userData", userData);
//   };

//   // ...the rest of your component

//   const EndAdorment = ({ visible, setVisible }) => {
//     return (
//       <InputAdornment position="end">
//         <IconButton onClick={() => setVisible(!visible)}>
//           {visible ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
//         </IconButton>
//       </InputAdornment>
//     );
//   };
//   const EmailAdorment = () => {
//     return (
//       <InputAdornment position="start">
//         <EmailIcon />
//       </InputAdornment>
//     );
//   };
//   const PasswordAdorment = () => {
//     return (
//       <InputAdornment position="start">
//         <LockIcon />
//       </InputAdornment>
//     );
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={3}>
//           <Grid item xs={12}>
//             <TextField
//               required
//               id="email"
//               name="email"
//               label="Email"
//               fullWidth
//               autoComplete="email"
//               InputProps={{
//                 startAdornment: <EmailAdorment />,
//               }}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               required
//               id="password"
//               name="password"
//               label="Password"
//               fullWidth
//               autoComplete="password"
//               type={visible ? "password" : "text"}
//               InputProps={{
//                 endAdornment: (
//                   <EndAdorment visible={visible} setVisible={setVisible} />
//                 ),
//                 startAdornment: <PasswordAdorment />,
//               }}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Button
//               className=" w-full"
//               type="submit"
//               variant="contained"
//               size="large"
//               sx={{
//                 padding: "1rem 0.5rem",
//                 background: "#8b7a67",
//                 ":hover": { background: "#B19470" },
//               }}
//             >
//               Login
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//       <div className="flex justify-center flex-col items-center">
//         <div className="py-3 flex items-center">
//           <p>New to MoonMade?</p>
//           <Button
//             onClick={() => navigate("/register")}
//             className="ml-5"
//             size="small"
//             sx={{ color: "#38419D" }}
//           >
//             Create an Account
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;

import React, { useState } from "react";
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { useDispatch } from "react-redux";
import { login } from "../../State/Auth/Action";

const LoginForm = ({ handleClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [visible, setVisible] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    // Assuming `dispatch(login(userData))` returns a Promise
    dispatch(login(userData))
      .then((response) => {
        if (response && response.success) {
          // Only close modal after successful login
          handleClose(); // Call handleClose after successful login
          // Remove navigate("/") to prevent automatic redirection
        } else {
          console.error("Login failed:", response.error);
          // Handle login failure (e.g., show an error message)
        }
      })
      .catch((error) => {
        console.error("Login failed:", error);
        // Handle login failure (e.g., show an error message)
      });
  };

  const EndAdornment = ({ visible, setVisible }) => (
    <InputAdornment position="end">
      <IconButton onClick={() => setVisible(!visible)}>
        {visible ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
      </IconButton>
    </InputAdornment>
  );

  const EmailAdornment = () => (
    <InputAdornment position="start">
      <EmailIcon />
    </InputAdornment>
  );

  const PasswordAdornment = () => (
    <InputAdornment position="start">
      <LockIcon />
    </InputAdornment>
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
              InputProps={{
                startAdornment: <EmailAdornment />,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="password"
              type={visible ? "password" : "text"}
              InputProps={{
                endAdornment: (
                  <EndAdornment visible={visible} setVisible={setVisible} />
                ),
                startAdornment: <PasswordAdornment />,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              className="w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={{
                padding: "1rem 0.5rem",
                background: "#8b7a67",
                ":hover": { background: "#B19470" },
              }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center">
          <p>New to MoonMade?</p>
          <Button
            onClick={() => navigate("/register")}
            className="ml-5"
            size="small"
            sx={{ color: "#38419D" }}
          >
            Create an Account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
