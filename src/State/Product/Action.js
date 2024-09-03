// import { type } from "@testing-library/user-event/dist/cjs/utility/type.js";
// import { API_BASE_URL, api } from "../../config/apiConfig.js";
// import {
//   CREATE_PRODUCT_FAILURE,
//   CREATE_PRODUCT_REQUEST,
//   CREATE_PRODUCT_SUCCESS,
//   DELETE_PRODUCT_FAILURE,
//   DELETE_PRODUCT_REQUEST,
//   DELETE_PRODUCT_SUCCESS,
//   FIND_PRODUCTS_BY_CATEGORY_FAILURE,
//   FIND_PRODUCTS_BY_CATEGORY_REQUEST,
//   FIND_PRODUCTS_BY_CATEGORY_SUCCESS,
//   FIND_PRODUCT_BY_ID_FAILURE,
//   FIND_PRODUCT_BY_ID_REQUEST,
//   FIND_PRODUCT_BY_ID_SUCCESS,
// } from "./ActionType.js";

// export const findProducts = (reqData) => async (dispatch) => {
//   dispatch({ type: FIND_PRODUCTS_BY_CATEGORY_REQUEST });
//   const {
//     color,
//     sizes,
//     minPrice,
//     maxPrice,
//     minDiscount,
//     category,
//     // stock,
//     // sort,
//     pageNumber,
//     pageSize,
//   } = reqData;
//   try {
//     const { data } = await api.get(
//       `/api/products?color=${color}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&pageNumber=${pageNumber}&pageSize=${pageSize}`
//     );
//     // console.log("product data", data);
//     dispatch({ type: FIND_PRODUCTS_BY_CATEGORY_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({
//       type: FIND_PRODUCTS_BY_CATEGORY_FAILURE,
//       payload: error.message,
//     });
//   }
// };

// export const findProductById = (reqData) => async (dispatch) => {
//   dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
//   const { productId } = reqData;
//   // const token = localStorage.getItem("token");
//   try {
//     const { data } = await api.get(`/api/products/id/${productId}`);

//     dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
//   }
// };

// export const createProduct = (product) => async (dispatch) => {
//   try {
//     dispatch({ type: CREATE_PRODUCT_REQUEST });
//     const { data } = await api.post(
//       `${API_BASE_URL}/api/admin/products/`,
//       product.data
//     );
//     console.log("product created:", data);
//     dispatch({
//       type: CREATE_PRODUCT_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({ type: CREATE_PRODUCT_FAILURE, payload: error.message });
//   }
// };

// export const deleteProduct = (productId) => async (dispatch) => {
//   try {
//     dispatch({ type: DELETE_PRODUCT_REQUEST });
//     const { data } = await api.delete(
//       `${API_BASE_URL}/api/admin/products/${productId}/delete`
//     );
//     console.log("product deleted", data);
//     dispatch({
//       type: DELETE_PRODUCT_SUCCESS,
//       payload: productId,
//     });
//   } catch (error) {
//     dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message });
//   }
// };

// // import { API_BASE_URL, api } from "../../config/apiConfig.js";
// // import {
// //   CREATE_PRODUCT_FAILURE,
// //   CREATE_PRODUCT_REQUEST,
// //   CREATE_PRODUCT_SUCCESS,
// //   DELETE_PRODUCT_FAILURE,
// //   DELETE_PRODUCT_REQUEST,
// //   DELETE_PRODUCT_SUCCESS,
// //   FIND_PRODUCTS_BY_CATEGORY_FAILURE,
// //   FIND_PRODUCTS_BY_CATEGORY_REQUEST,
// //   FIND_PRODUCTS_BY_CATEGORY_SUCCESS,
// //   FIND_PRODUCT_BY_ID_FAILURE,
// //   FIND_PRODUCT_BY_ID_REQUEST,
// //   FIND_PRODUCT_BY_ID_SUCCESS,
// // } from "./ActionType.js";

// // export const findProducts = (reqData) => async (dispatch) => {
// //   dispatch({ type: FIND_PRODUCTS_BY_CATEGORY_REQUEST });
// //   const {
// //     color,
// //     sizes,
// //     minPrice,
// //     maxPrice,
// //     minDiscount,
// //     category,
// //     pageNumber,
// //     pageSize,
// //   } = reqData;
// //   try {
// //     const { data } = await api.get(
// //       `/api/products?color=${color}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&pageNumber=${pageNumber}&pageSize=${pageSize}`
// //     );
// //     dispatch({ type: FIND_PRODUCTS_BY_CATEGORY_SUCCESS, payload: data });
// //   } catch (error) {
// //     dispatch({
// //       type: FIND_PRODUCTS_BY_CATEGORY_FAILURE,
// //       payload: error.message,
// //     });
// //   }
// // };

// // export const findProductById = (reqData) => async (dispatch) => {
// //   dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
// //   const { productId } = reqData;
// //   try {
// //     const { data } = await api.get(`/api/products/id/${productId}`);
// //     dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
// //   } catch (error) {
// //     dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
// //   }
// // };

// // export const createProduct = (product) => async (dispatch) => {
// //   try {
// //     dispatch({ type: CREATE_PRODUCT_REQUEST });
// //     const { data } = await api.post(
// //       `${API_BASE_URL}/api/admin/products`,
// //       product.data
// //     );
// //     dispatch({
// //       type: CREATE_PRODUCT_SUCCESS,
// //       payload: data,
// //     });
// //   } catch (error) {
// //     dispatch({ type: CREATE_PRODUCT_FAILURE, payload: error.message });
// //   }
// // };

// // export const deleteProduct = (productId) => async (dispatch) => {
// //   try {
// //     dispatch({ type: DELETE_PRODUCT_REQUEST });
// //     const { data } = await api.delete(
// //       `${API_BASE_URL}/api/admin/products/${productId}/delete`
// //     );
// //     dispatch({
// //       type: DELETE_PRODUCT_SUCCESS,
// //       payload: productId,
// //     });
// //   } catch (error) {
// //     dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message });
// //   }
// // };

import { API_BASE_URL, api } from "../../config/apiConfig.js";
import {
  CREATE_PRODUCT_FAILURE,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  FIND_PRODUCTS_BY_CATEGORY_FAILURE,
  FIND_PRODUCTS_BY_CATEGORY_REQUEST,
  FIND_PRODUCTS_BY_CATEGORY_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
} from "./ActionType.js";

export const findProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_BY_CATEGORY_REQUEST });
  const {
    color,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    pageNumber,
    stock,
    pageSize,
  } = reqData;
  try {
    const { data } = await api.get(
      `/api/products?color=${color}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&pageNumber=${pageNumber}&pageSize=${pageSize}&stock=${stock}`
    );
    dispatch({ type: FIND_PRODUCTS_BY_CATEGORY_SUCCESS, payload: data });
  } catch (error) {
    console.error("Error finding products by category:", error);
    dispatch({
      type: FIND_PRODUCTS_BY_CATEGORY_FAILURE,
      payload: error.message,
    });
  }
};

export const findProductById = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  const { productId } = reqData;
  try {
    const { data } = await api.get(`/api/products/id/${productId}`);
    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    console.error("Error finding product by ID:", error);
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
  }
};

// export const createProduct = (product) => async (dispatch) => {
//   dispatch({ type: CREATE_PRODUCT_REQUEST });
//   try {
//     const { data } = await api.post(
//       `${API_BASE_URL}/api/admin/products`,
//       product
//     );
//     console.log("Product created:", data);
//     dispatch({
//       type: CREATE_PRODUCT_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     console.error("Error creating product:", error);
//     dispatch({ type: CREATE_PRODUCT_FAILURE, payload: error.message });
//   }
// };

export const createProduct = (product) => async (dispatch) => {
  dispatch({ type: CREATE_PRODUCT_REQUEST });
  try {
    console.log("Creating product with data:", product); // Log the product data
    const { data } = await api.post(
      `${API_BASE_URL}/api/admin/products`,
      product
    );
    console.log("Product created successfully:", data);
    dispatch({
      type: CREATE_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error("Error creating product:", error.response || error.message);
    dispatch({ type: CREATE_PRODUCT_FAILURE, payload: error.message });
  }
};

export const deleteProduct = (productId) => async (dispatch) => {
  dispatch({ type: DELETE_PRODUCT_REQUEST });
  try {
    const { data } = await api.delete(
      `${API_BASE_URL}/api/admin/products/${productId}/delete`
    );
    console.log("Product deleted:", data);
    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      payload: productId,
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message });
  }
};
