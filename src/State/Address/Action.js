// // src/State/Address/actions.js
// import { api } from "../../../config/apiConfig";
// import {
//   UPDATE_ADDRESS_REQUEST,
//   UPDATE_ADDRESS_SUCCESS,
//   UPDATE_ADDRESS_FAILURE,
//   DELETE_ADDRESS_REQUEST,
//   DELETE_ADDRESS_SUCCESS,
//   DELETE_ADDRESS_FAILURE,
// } from "./ActionTypes";

// export const updateAddress = (id, addressData) => async (dispatch) => {
//   dispatch({ type: UPDATE_ADDRESS_REQUEST });
//   try {
//     const response = await api.put(`/api/admin/addresses/${id}`, addressData);
//     dispatch({ type: UPDATE_ADDRESS_SUCCESS, payload: response.data });
//   } catch (error) {
//     dispatch({ type: UPDATE_ADDRESS_FAILURE, payload: error.message });
//   }
// };

// export const deleteAddress = (id) => async (dispatch) => {
//   dispatch({ type: DELETE_ADDRESS_REQUEST });
//   try {
//     await api.delete(`/api/admin/addresses/${id}`);
//     dispatch({ type: DELETE_ADDRESS_SUCCESS, payload: id });
//   } catch (error) {
//     dispatch({ type: DELETE_ADDRESS_FAILURE, payload: error.message });
//   }
// };

// import {
//   UPDATE_ADDRESS_REQUEST,
//   UPDATE_ADDRESS_SUCCESS,
//   UPDATE_ADDRESS_FAILURE,
//   DELETE_ADDRESS_REQUEST,
//   DELETE_ADDRESS_SUCCESS,
//   DELETE_ADDRESS_FAILURE,
// } from "./ActionType";
// import axios from "axios";

// // Update address
// export const updateAddress = (id, updatedAddress) => async (dispatch) => {
//   dispatch({ type: UPDATE_ADDRESS_REQUEST });
//   try {
//     const response = await axios.put(`/api/addresses/${id}`, updatedAddress);
//     dispatch({ type: UPDATE_ADDRESS_SUCCESS, payload: response.data });
//   } catch (error) {
//     dispatch({ type: UPDATE_ADDRESS_FAILURE, payload: error.message });
//   }
// };

// // Delete address
// export const deleteAddress = (id) => async (dispatch) => {
//   dispatch({ type: DELETE_ADDRESS_REQUEST });
//   try {
//     await axios.delete(`/api/addresses/${id}`);
//     dispatch({ type: DELETE_ADDRESS_SUCCESS, payload: id });
//   } catch (error) {
//     dispatch({ type: DELETE_ADDRESS_FAILURE, payload: error.message });
//   }
// };

// // Fetch addresses
// export const fetchAddresses = () => async (dispatch) => {
//   try {
//     const response = await axios.get("/api/addresses");
//     dispatch({ type: "FETCH_ADDRESSES_SUCCESS", payload: response.data });
//   } catch (error) {
//     dispatch({ type: "FETCH_ADDRESSES_FAILURE", payload: error.message });
//   }
// };

import {
  UPDATE_ADDRESS_REQUEST,
  UPDATE_ADDRESS_SUCCESS,
  UPDATE_ADDRESS_FAILURE,
  DELETE_ADDRESS_REQUEST,
  DELETE_ADDRESS_SUCCESS,
  DELETE_ADDRESS_FAILURE,
  FETCH_ADDRESSES_REQUEST,
  FETCH_ADDRESSES_SUCCESS,
  FETCH_ADDRESSES_FAILURE,
} from "./ActionType";
// import axios from "axios";
import { api } from "../../config/apiConfig";

// Update address
export const updateAddress = (id, updatedAddress) => async (dispatch) => {
  dispatch({ type: UPDATE_ADDRESS_REQUEST });
  try {
    const response = await api.put(`/api/addresses/${id}`, updatedAddress);
    dispatch({ type: UPDATE_ADDRESS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: UPDATE_ADDRESS_FAILURE, payload: error.message });
  }
};

// Delete address
export const deleteAddress = (id) => async (dispatch) => {
  dispatch({ type: DELETE_ADDRESS_REQUEST });
  try {
    await api.delete(`/api/addresses/${id}`);
    dispatch({ type: DELETE_ADDRESS_SUCCESS, payload: id });
  } catch (error) {
    dispatch({ type: DELETE_ADDRESS_FAILURE, payload: error.message });
  }
};

// Fetch addresses
export const fetchAddresses = () => async (dispatch) => {
  dispatch({ type: FETCH_ADDRESSES_REQUEST });
  try {
    const response = await api.get("/api/addresses");
    dispatch({ type: FETCH_ADDRESSES_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_ADDRESSES_FAILURE, payload: error.message });
  }
};
