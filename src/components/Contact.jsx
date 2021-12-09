import { Typography } from "@mui/material";
import React from "react";

function Contact() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography>Contact us </Typography>
      <Typography>email:pooja@gmail.com</Typography>
      <Typography>Address:Ambika Nagar Motihar, Bihar</Typography>
    </div>
  );
}

export default Contact;
