import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Avatar,
  AvatarGroup,
  // Button,
  Card,
  CardHeader,
  // Menu,
  // MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import {
  confirmOrder,
  deleteOrder,
  deliveredOrder,
  getOrders,
  shipOrder,
} from "../Order/Action";
const OrdersTable = () => {
  const [anchorEl, setAnchorEl] = React.useState([]);
  const open = Boolean(anchorEl);
  const handleClick = (event, index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = event.currentTarget;
    setAnchorEl(newAnchorElArray);
  };
  const handleClose = (index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = null;
    setAnchorEl(newAnchorElArray);
  };
  const dispatch = useDispatch();

  const { adminOrder } = useSelector((store) => store);
  useEffect(() => {
    dispatch(getOrders());
  }, [
    adminOrder.confirmed,
    adminOrder.shipped,
    adminOrder.delivered,
    adminOrder.deleted,
  ]);

  console.log("admin Orders", adminOrder);

  // const handleShippedOrder = (orderId, index) => {
  //   dispatch(shipOrder(orderId));
  //   handleClose(index);
  // };
  // const handleConfirmedOrder = (orderId, index) => {
  //   dispatch(confirmOrder(orderId));
  //   handleClose(index);
  // };
  // const handleDeliveredOrder = (orderId, index) => {
  //   dispatch(deliveredOrder(orderId));
  //   handleClose(index);
  // };
  // const handleDeleteOrder = (orderId) => {
  //   dispatch(deleteOrder(orderId));
  // };

  return (
    <div className="p-5">
      <Card className="mt-2">
        <CardHeader title="All Orders" />
        <TableContainer
          // sx={{ bgcolor: "#2A3439", color: "white" }}
          component={Paper}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Order ID</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Status</TableCell>
              </TableRow>
            </TableHead>
            {/* <TableBody>
              {adminOrder.orders?.map((item, index) => (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">
                    <AvatarGroup
                      sx={{ justifyContent: "start", fontSize: "20px" }}
                    >
                      {item.orderItems.map((orderItem) => (
                        <Avatar src={orderItem.product.Image}></Avatar>
                      ))}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell align="left">
                    {item.orderItems.map((orderItem) => (
                      <p>{orderItem.product.title}</p>
                    ))}
                  </TableCell>
                  <TableCell align="left">{item._id}</TableCell>
                  <TableCell align="left">{item.totalPrice}</TableCell>
                  <TableCell align="left">
                    <span
                      className={`text-white px-5 py-2 rounded-full ${
                        item.orderStatus === "CONFIRMED"
                          ? "bg-green-600 text-white"
                          : item.orderStatus === "SHIPPED"
                          ? "bg-[#003262]"
                          : item.orderStatus === "PLACED"
                          ? "bg-green-600"
                          : item.orderStatus === "PENDING"
                          ? "bg-slate-500"
                          : "bg-green-600"
                      }`}
                    >
                      {item.orderStatus}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody> */}
            <TableBody>
              {adminOrder.orders?.map((item, index) => (
                <TableRow
                  key={item._id} // Changed from item.name to item._id for a unique key
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">
                    <AvatarGroup
                      sx={{ justifyContent: "start", fontSize: "20px" }}
                    >
                      {item.orderItems?.map((orderItem) =>
                        orderItem.product ? (
                          <Avatar
                            src={orderItem.product.Image}
                            alt={orderItem.product.title}
                          />
                        ) : (
                          <Avatar />
                        )
                      )}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell align="left">
                    {item.orderItems?.map((orderItem) =>
                      orderItem.product ? (
                        <p>{orderItem.product.title}</p>
                      ) : (
                        <p>N/A</p>
                      )
                    )}
                  </TableCell>
                  <TableCell align="left">{item._id}</TableCell>
                  <TableCell align="left">{item.totalPrice}</TableCell>
                  <TableCell align="left">
                    <span
                      className={`text-white px-5 py-2 rounded-full ${
                        item.orderStatus === "CONFIRMED"
                          ? "bg-green-600 text-white"
                          : item.orderStatus === "SHIPPED"
                          ? "bg-[#003262]"
                          : item.orderStatus === "PLACED"
                          ? "bg-green-600"
                          : item.orderStatus === "PENDING"
                          ? "bg-slate-500"
                          : "bg-green-600"
                      }`}
                    >
                      {item.orderStatus}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default OrdersTable;
