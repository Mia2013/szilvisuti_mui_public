import { Typography, Grid } from "@mui/material";
import CircleLoader from "react-spinners/CircleLoader";
import { pink } from '@mui/material/colors';


export default function Loading() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item >
        <Typography variant="h3" color={pink[500]} >
          Betöltés...
          <CircleLoader variant="h2" color="#e91e63" size={70} />
        </Typography>
       </Grid>
    </Grid>
  );
}
