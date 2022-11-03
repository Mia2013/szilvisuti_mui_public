import * as React from "react";
import { Grid, Container, Box, Typography, } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <footer>
      <CssBaseline />
      <Box
        px={{ xs: 3, sm: 5 }}
        py={{ xs: 5, sm: 5 }}
        bgcolor="rgb(176, 21, 71)"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Box borderBottom={1}>
                <Typography
                  sx={{
                    fontFamily: "Amatic SC, cursive",
                    fontSize: "1.5rem",
                  }}
                  variant="h6"
                >
                  Elérhetőség
                </Typography>
              </Box>
              <Box sx={{ my: 2 }}>
                <Typography
                  color="white"
                  sx={{
                    textDecoration: "none",
                    fontFamily: "Amatic SC, cursive",
                    fontSize: "1.5rem",
                  }}
                  component="a"
                  variant="h6"
                  href="tel:+3630-427-7223"
                  className="footer-link"

                >
                  <LocalPhoneIcon sx={{ pt: 1 }} color="white" />
                  Telefonszám: +36 30 427 7223
                </Typography>
              </Box>
              <Box>
                <Typography
                  color="white"
                  sx={{
                    textDecoration: "none",
                    fontFamily: "Amatic SC, cursive",
                    fontSize: "1.5rem",
                  }}
                  component="a"
                  variant="h6"
                  href="mailto: szilvisutivilaga@gmail.com"
                  className="footer-link"

                >
                  <EmailIcon sx={{ pt: 1.2 }} color="white" />
                  E-mail cím: szilvisutivilaga@gmail.com
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box borderBottom={1} sx={{ mb: 2 }}>
                <Typography
                  sx={{
                    fontFamily: "Amatic SC, cursive",
                    fontSize: "1.5rem",
                  }}
                  variant="h6"
                  
                >
                  Kövess
                </Typography>
              </Box>
              <Box sx={{ my: 2 }}>
                <Typography
                  color="white"
                  sx={{
                    textDecoration: "none",
                    fontFamily: "Amatic SC, cursive",
                    fontSize: "1.5rem",
                  }}
                  component="a"
                  variant="h6"
                  target="_blank"

                  href="https://www.facebook.com/Szilvi-S%C3%BCtivil%C3%A1ga-108698968461692"
                  className="footer-link"

               >
                  <FacebookIcon sx={{ pt: 1 }} color="white" />
                  Facebookon
                </Typography>
              </Box>
              <Box>
                <Typography
                  color="white"
                  sx={{
                    textDecoration: "none",
                    fontFamily: "Amatic SC, cursive",
                    fontSize: "1.5rem",
                  }}
                  target="_blank"

                  component="a"
                  variant="h6"
                  href="https://www.instagram.com/szilvisutivilaga/"
                  className="footer-link"

                >
                  <InstagramIcon sx={{ pt: 1.2 }} color="white" />
                  Instagramon{" "}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}
