import {
  Typography,

} from "@mui/material";

export default function PageTitle({ title, id }) {
  return (
    <Typography
      variant="h2"
      sx={{
        my: 6,
        fontFamily: "great-vibes, sans-serif",
        textAlign: "center",
      }}
      className="page-title"
      id={id}
      color="text.secondary"
      data-aos="zoom-in"    >
      {title}

    </Typography >
  )
}