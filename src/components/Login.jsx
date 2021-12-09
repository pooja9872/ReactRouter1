import Typography from "@mui/material/Typography";
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography style={{ marginTop: "30px" }}>Login Page</Typography>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 3, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Enter Your Email Id"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Enter Your Password"
          variant="outlined"
        />
      </Box>

      <Link to="/" style={{ textDecoration: "none" }}>
        <Button variant="contained">Submit</Button>
      </Link>
    </div>
  );
}

export default Login;
