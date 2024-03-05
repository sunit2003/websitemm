import React from "react";
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { useDispatch } from "react-redux";
import { login } from "../../State/Auth/Action";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (jwt) {
  //     dispatch(getUser());
  //   }
  // }, [jwt, auth.jwt]);

  const [visible, setVisible] = useState(true);
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    dispatch(login(userData));
    console.log("userData", userData);
  };
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
