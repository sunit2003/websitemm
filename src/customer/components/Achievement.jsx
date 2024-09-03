import { Button, Card, CardContent, Typography, styled } from "@mui/material";
import React from "react";

const TriangleImg = styled("img")({
  right: 0,
  bottom: 0,
  height: 170,
  position: "absolute",
});

const TrophyImg = styled("img")({
  right: 36,
  bottom: 50,
  height: 80,
  position: "absolute",
});
const Achievement = () => {
  return (
    <Card
      className="h-full"
      sx={{
        position: "relative",
        color: "white",
        bgcolor: "#181818",
        borderRadius: "10px",
      }}
    >
      <CardContent>
        <Typography variant="h5" sx={{ letterSpacing: "0.25px" }}>
          {/* MoonMade */}
        </Typography>
        <Typography variant="body2">Total Income</Typography>
        <Typography variant="h5" sx={{ my: 2 }}>
          400k
        </Typography>
        <Button
          size="small"
          variant="contained"
          sx={{ background: "#d63384", ":hover": { background: "#dc3545" } }}
        >
          View Sales
        </Button>
        <TriangleImg src=""></TriangleImg>
        <TrophyImg src="https://cdn-icons-png.flaticon.com/128/14913/14913566.png"></TrophyImg>
      </CardContent>
    </Card>
  );
};

export default Achievement;
