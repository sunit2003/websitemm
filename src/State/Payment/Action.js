import { api } from "../../config/apiConfig";
import {
  CREATE_PAYMENT_REQUEST,
  CREATE_PAYMENT_SUCCESS,
  CREATE_PAYMENT_FAILURE,
  UPDATE_PAYMENT_REQUEST,
  UPDATE_PAYMENT_SUCCESS,
  UPDATE_PAYMENT_FAILURE,
} from "./ActionType";

// import axios from "axios";

// export const createPayment = (orderId) => async (dispatch) => {
//   dispatch({ type: CREATE_PAYMENT_REQUEST });
//   try {
//     console.log(`Creating payment for order ID: ${orderId}`);
//     const { data } = await api.post(`/api/payments/${orderId}`, {});

//     if (data.payment_link_url) {
//       window.location.href = data.Payment_link_url;
//     }
//   } catch (error) {
//     dispatch({
//       type: CREATE_PAYMENT_FAILURE,
//       payload: error.message,
//     });
//   }
// };
export const createPayment = (orderId) => async (dispatch) => {
  dispatch({ type: CREATE_PAYMENT_REQUEST });
  try {
    const { data } = await api.post(`/api/payments/${orderId}`, {});

    console.log(`Received data:`, data); // Log received data for debugging
    if (data.Payment_link_url) {
      // Note the capital "P" here
      window.location.href = data.Payment_link_url; // Redirect if URL is present
    } else {
      console.log("No payment link URL returned"); // Log for debugging if no URL
    }
  } catch (error) {
    console.error(
      "Payment creation failed:",
      error.response ? error.response.data : error.message
    );
    dispatch({
      type: CREATE_PAYMENT_FAILURE,
      payload: error.message,
    });
  }
};

export const updatePayment = (reqData) => async (dispatch) => {
  dispatch({ type: UPDATE_PAYMENT_REQUEST });
  try {
    const { data } = await api.get(
      `/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`
    );

    console.log("update payment:-", data);
  } catch (error) {
    dispatch({ type: CREATE_PAYMENT_FAILURE });
  }
};

// export const updatePaymentRequest = () => {
//   return {
//     type: UPDATE_PAYMENT_REQUEST,
//   };
// };

// export const updatePaymentSuccess = (payment) => {
//   return {
//     type: UPDATE_PAYMENT_SUCCESS,
//     payload: payment,
//   };
// };

// export const updatePaymentFailure = (error) => {
//   return {
//     type: UPDATE_PAYMENT_FAILURE,
//     payload: error,
//   };
// };
