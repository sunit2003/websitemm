import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { useDispatch, useSelector } from "react-redux";
// import { Store } from "@mui/icons-material";
// import { store } from "../State/store";
import { getUser, register } from "../State/Auth/Action";
// import { Store } from "@mui/icons-material";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  useEffect(() => {
    if (jwt) {
      dispatch(getUser());
    }
  }, [dispatch, jwt, auth.jwt]);

  const [visible, setVisible] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const userData = {
      fullName: data.get("fullName"),
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch(register(userData));
    console.log("userData", userData);
  };

  //  | Password show and hide toggle button
  //  v

  const EndAdorment = ({ visible, setVisible }) => {
    return (
      <InputAdornment position="end">
        <IconButton onClick={() => setVisible(!visible)}>
          {visible ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
        </IconButton>
      </InputAdornment>
    );
  };

  const EmailAdorment = () => {
    return (
      <InputAdornment position="start">
        <EmailIcon />
      </InputAdornment>
    );
  };
  const PasswordAdorment = () => {
    return (
      <InputAdornment position="start">
        <LockIcon />
      </InputAdornment>
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="fullName"
              name="fullName"
              label="Full Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              //  <EmailIcon />
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
              InputProps={{
                startAdornment: <EmailAdorment />,
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
                  <EndAdorment visible={visible} setVisible={setVisible} />
                ),
                startAdornment: <PasswordAdorment />,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              className=" w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={{
                borderRadius: "10rem",
                padding: "1rem 0.5rem",
                background: "#8b7a67",
                color: "black",
                ":hover": { background: "#B19470" },
              }}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center">
          <p>Already a User?</p>
          <Button
            onClick={() => navigate("/login")}
            className="ml-5 "
            size="small"
            sx={{ color: "#38419D" }}
          >
            LOGIN
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
