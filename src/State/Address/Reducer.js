// // src/State/Address/reducer.js
// import {
//   UPDATE_ADDRESS_REQUEST,
//   UPDATE_ADDRESS_SUCCESS,
//   UPDATE_ADDRESS_FAILURE,
//   DELETE_ADDRESS_REQUEST,
//   DELETE_ADDRESS_SUCCESS,
//   DELETE_ADDRESS_FAILURE,
// } from "./ActionType";

// const initialState = {
//   loading: false,
//   addresses: [],
//   error: "",
// };

// const addressReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case UPDATE_ADDRESS_REQUEST:
//     case DELETE_ADDRESS_REQUEST:
//       return { ...state, loading: true };
//     case UPDATE_ADDRESS_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         addresses: state.addresses.map((address) =>
//           address._id === action.payload._id ? action.payload : address
//         ),
//       };
//     case DELETE_ADDRESS_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         addresses: state.addresses.filter(
//           (address) => address._id !== action.payload
//         ),
//       };
//     case UPDATE_ADDRESS_FAILURE:
//     case DELETE_ADDRESS_FAILURE:
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// export default addressReducer;

// import {
//   UPDATE_ADDRESS_REQUEST,
//   UPDATE_ADDRESS_SUCCESS,
//   UPDATE_ADDRESS_FAILURE,
//   DELETE_ADDRESS_REQUEST,
//   DELETE_ADDRESS_SUCCESS,
//   DELETE_ADDRESS_FAILURE,
// } from "./ActionType";

// const initialState = {
//   addresses: [],
//   loading: false,
//   error: null,
// };

// const addressReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case UPDATE_ADDRESS_REQUEST:
//     case DELETE_ADDRESS_REQUEST:
//       return { ...state, loading: true };

//     case UPDATE_ADDRESS_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         addresses: state.addresses.map((address) =>
//           address._id === action.payload._id ? action.payload : address
//         ),
//       };

//     case DELETE_ADDRESS_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         addresses: state.addresses.filter(
//           (address) => address._id !== action.payload
//         ),
//       };

//     case UPDATE_ADDRESS_FAILURE:
//     case DELETE_ADDRESS_FAILURE:
//       return { ...state, loading: false, error: action.payload };

//     case "FETCH_ADDRESSES_SUCCESS":
//       return { ...state, addresses: action.payload };

//     case "FETCH_ADDRESSES_FAILURE":
//       return { ...state, error: action.payload };

//     default:
//       return state;
//   }
// };

// export default addressReducer;

// import {
//   UPDATE_ADDRESS_REQUEST,
//   UPDATE_ADDRESS_SUCCESS,
//   UPDATE_ADDRESS_FAILURE,
//   DELETE_ADDRESS_REQUEST,
//   DELETE_ADDRESS_SUCCESS,
//   DELETE_ADDRESS_FAILURE,
//   FETCH_ADDRESSES_REQUEST,
//   FETCH_ADDRESSES_SUCCESS,
//   FETCH_ADDRESSES_FAILURE,
//   FETCH_USER_ADDRESSES_REQUEST,
//   FETCH_USER_ADDRESSES_SUCCESS,
//   FETCH_USER_ADDRESSES_FAILURE,
// } from "./ActionType";

// const initialState = {
//   addresses: [],
//   loading: false,
//   error: null,
// };

// const addressReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_ADDRESSES_REQUEST:
//     case FETCH_USER_ADDRESSES_REQUEST:
//       return { ...state, loading: true, error: null };

//     case FETCH_ADDRESSES_SUCCESS:
//     case FETCH_USER_ADDRESSES_SUCCESS:
//       return { ...state, loading: false, addresses: action.payload };

//     case FETCH_ADDRESSES_FAILURE:
//     case FETCH_USER_ADDRESSES_FAILURE:
//       return { ...state, loading: false, error: action.payload };

//     case UPDATE_ADDRESS_REQUEST:
//     case DELETE_ADDRESS_REQUEST:
//       return { ...state, loading: true, error: null };

//     case UPDATE_ADDRESS_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         addresses: state.addresses.map((address) =>
//           address._id === action.payload._id ? action.payload : address
//         ),
//       };

//     case DELETE_ADDRESS_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         addresses: state.addresses.filter(
//           (address) => address._id !== action.payload
//         ),
//       };

//     case UPDATE_ADDRESS_FAILURE:
//     case DELETE_ADDRESS_FAILURE:
//       return { ...state, loading: false, error: action.payload };

//     default:
//       return state;
//   }
// };

// export default addressReducer;

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

const initialState = {
  addresses: [],
  loading: false,
  error: null,
};

const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADDRESSES_REQUEST:
      return { ...state, loading: true };
    case FETCH_ADDRESSES_SUCCESS:
      return { ...state, loading: false, addresses: action.payload };
    case FETCH_ADDRESSES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case UPDATE_ADDRESS_REQUEST:
      return { ...state, loading: true };
    case UPDATE_ADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        addresses: state.addresses.map((address) =>
          address._id === action.payload._id ? action.payload : address
        ),
      };
    case UPDATE_ADDRESS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case DELETE_ADDRESS_REQUEST:
      return { ...state, loading: true };
    case DELETE_ADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        addresses: state.addresses.filter(
          (address) => address._id !== action.payload
        ),
      };
    case DELETE_ADDRESS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default addressReducer;
