import { Box, Modal } from "@mui/material";
import React from "react";
import RegisterForm from "./RegisterForm";
import { useLocation } from "react-router-dom";
import LoginForm from "./LoginForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "white",
  borderRadius: 5,
  //   border: "2px solid #000",
  outline: "solid 1px #F5F5F5 ",
  boxShadow: 20,
  p: 6,
  py: 8,
};

const AuthModal = ({ handleClose, open }) => {
  const location = useLocation();

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        // className="backdrop-blur-sm"
      >
        <Box sx={style}>
          {location.pathname === "/login" ? <LoginForm /> : <RegisterForm />}
        </Box>
      </Modal>
    </div>
  );
};

export default AuthModal;
