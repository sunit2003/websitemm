// import axios from "axios";

// import {
//   GET_USER_FAILURE,
//   GET_USER_REQUEST,
//   GET_USER_SUCCESS,
//   LOGIN_FAILURE,
//   LOGIN_REQUEST,
//   LOGIN_SUCCESS,
//   LOGOUT,
//   REGISTER_FAILURE,
//   REGISTER_REQUEST,
//   REGISTER_SUCCESS,
// } from "./ActionType";
// import { API_BASE_URL } from "../../config/apiConfig";

// const token = localStorage.getItem("jwt");

// const registerRequest = () => ({ type: REGISTER_REQUEST });
// const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
// const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

// export const register = (userData) => async (dispatch) => {
//   dispatch(registerRequest());
//   try {
//     const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
//     const user = response.data;
//     if (user.jwt) {
//       localStorage.setItem("jwt", user.jwt);
//     }
//     console.log("user", user);
//     dispatch(registerSuccess(user.jwt));
//     window.location.reload();
//   } catch (error) {
//     dispatch(registerFailure(error.message));
//   }
// };

// const loginRequest = () => ({ type: LOGIN_REQUEST });
// const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
// const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

// export const login = (userData) => async (dispatch) => {
//   dispatch(loginRequest());
//   try {
//     const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
//     const user = response.data;
//     if (user.jwt) {
//       localStorage.setItem("jwt", user.jwt);
//     }

//     dispatch(loginSuccess(user.jwt));
//     window.location.reload();
//     console.log("user", user);
//   } catch (error) {
//     dispatch(loginFailure(error.message));
//   }
// };

// const getUserRequest = () => ({ type: GET_USER_REQUEST });
// const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
// const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

// export const getUser = () => async (dispatch) => {
//   dispatch(getUserRequest());
//   try {
//     const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
//       headers: {
//         " Authorization": `Bearer ${token}`,
//       },
//     });
//     const user = response.data;
//     // console.log("user", user);
//     dispatch(getUserSuccess(user));
//   } catch (error) {
//     dispatch(getUserFailure(error.message));
//   }
// };

// export const logout = () => (dispatch) => {
//   dispatch({ type: LOGOUT, payload: null });
//   localStorage.clear();
//   window.location.reload();
// };

import axios from "axios";
import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./ActionType";
import { API_BASE_URL } from "../../config/apiConfig";
import {
  getCartFromLocalStorage,
  clearLocalStorageCart,
  getCart,
} from "../../State/Cart/Action";

const token = localStorage.getItem("jwt");

const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

export const register = (userData) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    const user = response.data;
    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    }
    console.log("user", user);
    dispatch(registerSuccess(user.jwt));
    window.location.reload();
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};

const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (userData) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
    const user = response.data;
    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    }

    dispatch(loginSuccess(user.jwt));

    // Merge local storage cart with server cart
    const localCart = getCartFromLocalStorage();
    if (localCart) {
      await mergeCartWithServer(localCart, user.jwt); // Function to merge cart
      clearLocalStorageCart(); // Clear local storage after merging
    }

    // Fetch updated cart from server
    dispatch(getCart());

    window.location.reload();
    console.log("user", user);
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

const mergeCartWithServer = async (localCart, token) => {
  try {
    await axios.put(`${API_BASE_URL}/api/cart/merge`, localCart, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error("Error merging cart with server:", error.message);
  }
};

const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

export const getUser = () => async (dispatch) => {
  dispatch(getUserRequest());
  try {
    const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const user = response.data;
    dispatch(getUserSuccess(user));
  } catch (error) {
    dispatch(getUserFailure(error.message));
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT, payload: null });
  localStorage.clear();
  window.location.reload();
};
