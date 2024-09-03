import { TrendingUp } from "@mui/icons-material";
import GroupsIcon from "@mui/icons-material/Groups";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

const salesData = [
  {
    stats: "245k",
    title: "Sales",
    color: "#d63384",
    icon: <TrendingUp sx={{ fontSize: "1.75rem" }} />,
  },
  {
    stats: "12k",
    title: "Customer",
    color: "#d63384",
    icon: <GroupsIcon sx={{ fontSize: "1.75rem" }} />,
  },
  {
    stats: "1k",
    title: "Products",
    color: "#d63384",
    icon: <Inventory2Icon sx={{ fontSize: "1.75rem" }} />,
  },
  {
    stats: "20k",
    title: "Revenue",
    color: "#d63384",
    icon: <CurrencyRupeeIcon sx={{ fontSize: "1.75rem" }} />,
  },
];

const renderStats = () => {
  return salesData.map((item, index) => (
    <Grid item xs={12} sm={3} key={index}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          variant="rounded"
          sx={{
            mr: 3,
            width: 44,
            height: 44,
            boxShadow: 3,
            color: "white",
            background: `${item.color}`,
          }}
        >
          {item.icon}
        </Avatar>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="caption">{item.title}</Typography>
          <Typography variant="h6">{item.stats}</Typography>
        </Box>
      </Box>
    </Grid>
  ));
};

const MonthlyOverview = () => {
  return (
    <Card sx={{ background: "#181818", color: "white", borderRadius: "10px" }}>
      <CardHeader
        title="Monthly Overview"
        action={
          <IconButton size="small">
            <MoreVertIcon />
          </IconButton>
        }
        subheader={
          <Typography variant="body2">
            <Box component="span" sx={{ fontWeight: 600, mx: 2 }}>
              Total 48.5% growth
            </Box>
            (This Month)
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: "2rem !important",
            letterSpacing: "0.15px !important",
          },
        }}
      />
      <CardContent sx={{ pt: (theme) => `${theme.spacing(3)}!important` }}>
        <Grid container spacing={[5, 0]}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MonthlyOverview;
