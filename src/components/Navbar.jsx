import React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.primary,
  backgroundColor: "#eb0949",
  cursor: "pointer",
}));

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Stack direction="row" spacing={2}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Item>Home</Item>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <Item>Contact Page</Item>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <Item>About Page</Item>
        </Link>
        <Link to="/services" style={{ textDecoration: "none" }}>
          <Item>Services Page</Item>
        </Link>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Item>Login Page</Item>
        </Link>
      </Stack>
    </div>
  );
}

export default Navbar;

// Home  Page- `/`
// Contact Page- `/contact`
// About Page- `/about-us`
// Services Page- `/services`
// Login Page- `/login
