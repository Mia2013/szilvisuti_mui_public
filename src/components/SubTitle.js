import {
    Typography,
  
  } from "@mui/material";
  
  export default function SubTitle({ title, id }) {
    return (
      <Typography
        variant="h3"
        sx={{
          my: 5,
          fontFamily: "Amatic SC, cursive",
        }}
        id={id}
        color="text.secondary"
        data-aos="fade-right"      >
        {title}
  
      </Typography >
    )
  }