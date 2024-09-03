import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Toolbar,
  useMediaQuery,
  Box,
  useTheme,
  CssBaseline,
  Drawer,
  ListItemText,
} from "@mui/material";

import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import InboxIcon from "@mui/icons-material/Inbox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from "@mui/icons-material/Category";
import GroupsIcon from "@mui/icons-material/Groups";
import ChecklistIcon from "@mui/icons-material/Checklist";
import AddIcon from "@mui/icons-material/Add";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import Dashboard from "../../customer/components/Dashboard";
import CreateProductForm from "../../customer/components/CreateProductForm";
import ProductsTable from "../../customer/components/ProductsTable";
import OrdersTable from "../../customer/components/OrdersTable";
import CustomersTable from "../../customer/components/CustomersTable";

const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <CategoryIcon /> },
  { name: "Customers", path: "/admin/customers", icon: <GroupsIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <ChecklistIcon /> },
  { name: "AddProduct", path: "/admin/product/create", icon: <AddIcon /> },
];
const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const navigate = useNavigate();
  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      {/* {isLargeScreen && <Toolbar />} */}
      <List>
        {menu.map((item, index) => (
          <ListItem
            key={item.name}
            disablePadding
            onClick={() => navigate(item.path)}
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ManageAccountsIcon />
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className=" bg-white realtive">
      <div className="relative flex h-[100vh]">
        <CssBaseline />
        <div className="w-[14%] border border-r-gray-300 fixed top-0 h-full">
          {drawer}
        </div>
        <div className="w-[85%] h-full ml-[15%]">
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route
              path="/product/create"
              element={<CreateProductForm />}
            ></Route>
            <Route path="/products" element={<ProductsTable />}></Route>
            <Route path="/orders" element={<OrdersTable />}></Route>
            <Route path="/customers" element={<CustomersTable />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
