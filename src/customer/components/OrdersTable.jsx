import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  confirmOrder,
  deleteOrder,
  deliveredOrder,
  getOrders,
  shipOrder,
} from "../../State/Admin/Order/Action";
import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  CardHeader,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

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

  const handleShippedOrder = (orderId, index) => {
    dispatch(shipOrder(orderId));
    handleClose(index);
  };
  const handleConfirmedOrder = (orderId, index) => {
    dispatch(confirmOrder(orderId));
    handleClose(index);
  };
  const handleDeliveredOrder = (orderId, index) => {
    dispatch(deliveredOrder(orderId));
    handleClose(index);
  };
  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
  };

  return (
    <div className="p-10">
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
                <TableCell align="left">Update Status</TableCell>
                <TableCell align="left">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder.orders?.map((item, index) => (
                <TableRow
                  key={item._id} // Updated the key to use a unique identifier
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">
                    <AvatarGroup sx={{ justifyContent: "start" }}>
                      {item.orderItems.map((orderItem) =>
                        orderItem.product ? ( // Conditional check added here
                          <Avatar
                            key={orderItem.product._id}
                            src={orderItem.product.Image}
                          ></Avatar>
                        ) : null
                      )}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell align="left">
                    {item.orderItems.map((orderItem) =>
                      orderItem.product ? (
                        <p key={orderItem.product._id}>
                          {orderItem.product.title}
                        </p>
                      ) : null
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
                  <TableCell align="left">
                    <Button
                      id="basic-button"
                      aria-haspopup="true"
                      onClick={(event) => handleClick(event, index)}
                      aria-controls={`basic-menu-${item._id}`}
                      aria-expanded={Boolean(anchorEl[index])}
                    >
                      STATUS
                    </Button>
                    <Menu
                      id={`basic-menu-${item._id}`}
                      anchorEl={anchorEl[index]}
                      open={Boolean(anchorEl[index])}
                      onClose={() => handleClose(index)}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem
                        onClick={() => handleConfirmedOrder(item._id, index)}
                      >
                        Order Confirmed
                      </MenuItem>
                      <MenuItem
                        onClick={() => handleShippedOrder(item._id, index)}
                      >
                        Order Shipped
                      </MenuItem>
                      <MenuItem
                        onClick={() => handleDeliveredOrder(item._id, index)}
                      >
                        Order Delivered
                      </MenuItem>
                    </Menu>
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      onClick={() => handleDeleteOrder(item._id)}
                      variant="outlined"
                    >
                      Delete
                    </Button>
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
