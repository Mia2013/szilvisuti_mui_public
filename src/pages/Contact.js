import { Grid, Box, Typography } from "@mui/material";
import SubTitle from "../components/SubTitle";
import PageTitle from "../components/PageTitle";
import Wrapper from "../components/Wrapper";

const styles = {
  contactContainer: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/contact.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    paddingTop: "40px",
  },

};

export default function Contact() {
  return (
    <Box style={styles.contactContainer}>

      <Wrapper>
        <Grid container data-aos="zoom-in"
        >
          <Grid item xs={12}>

            <PageTitle title={"Rendelés"} />
          </Grid>
          <Grid item xs={12} md={7}>

            <SubTitle title={"Megrendeléseket az alábbi elérhetőségeken várom:"} />

            <Box display={"flex"} flexDirection={"column"} columnGap="20px">
              <Typography
                color="text.secondary" sx={{
                  textDecoration: "none",
                }}
                component="a"
                variant="subtitle1"
                href="tel:+3630-427-7223"
              >
                Telefonszám: +36 30 427 7223

              </Typography>

              <Typography
                color="text.secondary" sx={{
                  textDecoration: "none",
                  my: 5,
                }}
                component="a"
                variant="subtitle1"
                href="mailto: szilvisutivilaga@gmail.com"
              >
                E-mail cím:
                szilvisutivilaga@gmail.com              </Typography>

            </Box>
            <Typography variant="subtitle1" color="text.secondary">
              Kérem a torta rendeléseket <strong>1 héttel </strong>az időpont előtt legyenek
              szívesek leadni.
            </Typography>
            <Typography variant="subtitle1" sx={{ my: 2 }} color="text.secondary">
            Desszertekből minimum <strong>4 szelet/db </strong> rendelhető, apró süteményekből fajtánkként minimum <strong>0,5 kg</strong>.
            Minden héten változó kínálattal állok szíves rendelkezésükre. 
            Az aktuális választékért, szezonális termékekért kérem keressen bizalommal.

            </Typography>
            {/* <Typography variant="subtitle1" sx={{ my: 2 }} color="text.secondary">
            Apró süteményekből fajtánkként a minimum rendelési mennyiség <strong>0,5 kg</strong>.
            </Typography> */}
          </Grid>
          <Grid>
            <Grid item xs={12} sx={{ my: 3 }}>

              <SubTitle title="Átvétel" />
              <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: "bolder" }} color="text.secondary">
                Házhozszállítás:
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Előre egyeztetett időpontban Üröm, Pilisborosjenő, Budapest III. kerület
              </Typography>
              <Typography variant="subtitle1" sx={{ mt: 4, fontWeight: "bolder" }} color="text.secondary">
                Személyes átvétel az alábbi helyszíneken lehetséges:
              </Typography>
              <ul>
                <Typography variant="subtitle1" color="text.secondary">
                  <li>
                    Pilisborosjenő
                  </li>
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  <li>
                    1027 Budapest Lipthay utca 5
                  </li>
                </Typography>
              </ul>
              <Box sx={{
                overflow: "hidden",
                background: "none !important",
                height: { xs: 300, sm: 400 },
                width: { xs: 300, sm: 600 },
                my: 3
              }} >
                <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=1027%20Budapest%20Lipthay%20utca%205&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" title="map"></iframe>

              </Box>

            </Grid>
          </Grid>
        </Grid >
      </Wrapper>
    </Box>

  );
}
