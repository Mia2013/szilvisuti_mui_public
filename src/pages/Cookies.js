import { useState, useEffect } from "react";
import { Grid, Box, Typography } from "@mui/material";
import MediaCard from "../components/MediaCard";

import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/db";
import PageTitle from "../components/PageTitle";
import SubTitle from "../components/SubTitle";
import Wrapper from "../components/Wrapper";


export default function Cookies() {

  const [cookies, setCookies] = useState([]);


  async function getData() {
    const querySnapshot = await getDocs(collection(db, "cookies"));
    const cookie = querySnapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    setCookies(cookie);
  }

  useEffect(() => {
    getData();
  }, []);

  const cookiesCover = [
    {
      name: "cookies", width: "20%"
    },
    {
      name: "cookies1", width: "18.5%"
    },
    {
      name: "cookies", width: "20%"
    },
    {
      name: "cookies1", width: "18.5%"
    },
    {
      name: "cookies", width: "20%"
    },

  ]

  return (
    <Box>

      <Wrapper>
        <Grid container>
          <Grid item xs={12}>
            <PageTitle title={"Apró sütemények"} />

          </Grid>
          <Grid item xs={12} sm={10} sx={{mx: "auto", textAlign: "center", my: 4}} >
          <Typography variant="subtitle1" color="text.secondary" data-aos="fade-up" >
              Apró süteményekből fajtánkként a minimum rendelési mennyiség <strong>0,5 kg</strong>.
            </Typography>
          </Grid>

          <Grid item xs={12} data-aos="fade-up" sx={{ textAlign: "center" }} >
            <Box>
              {cookiesCover.map((item, index) => (
                <Typography
                  key={item.name + index}
                  noWrap
                  component="img"
                  sx={{
                    width: item.width
                  }}
                  src={`${process.env.PUBLIC_URL}/assets/${item.name}.jpg`}
                ></Typography>
              ))}
            </Box>
          </Grid>



          <Grid item xs={12}>
            <SubTitle title={"Sós Aprósütemények"} />
          </Grid>
          <Grid item container spacing={4} sx={{ my: 3 }}>
            {cookies.length > 0 ?
              cookies
                .sort((a, b) => a.price - b.price)
                .map((cookie) => (
                  cookie.description === "sós" ?
                    <Grid item xs={10} sm={6} md={4} key={cookie.id} data-aos="fade-up" sx={{ mx: { xs: "auto", sm: 0 } }}>
                      <MediaCard name={cookie.name} price={cookie.price} allergenic={cookie.allergenic} />
                    </Grid>

                    : ""
                )) : ""}
          </Grid>

          <Grid item xs={12}>
            <SubTitle title={"Édes Aprósütemények"} />
          </Grid>

          <Grid item container spacing={4} sx={{ my: 3 }}>
            {cookies.length > 0 ?
              cookies
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((cookie) => (
                  cookie.description === "édes" ?
                    <Grid item xs={10} sm={6} md={4} key={cookie.id} data-aos="fade-up" sx={{ mx: { xs: "auto", sm: 0 } }}>
                      <MediaCard name={cookie.name} price={cookie.price} allergenic={cookie.allergenic} />
                    </Grid>

                    : ""
                )) : ""}
          </Grid>
        </Grid>
      </Wrapper>
    </Box>

  );
}
