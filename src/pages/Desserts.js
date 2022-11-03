import { useState, useEffect } from "react";
import { Grid, Typography, Box } from "@mui/material";
import MediaCard from "../components/MediaCard";

import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/db";
import PageTitle from "../components/PageTitle";
import Wrapper from "../components/Wrapper";
import MyGallery from "../components/PhotoGallery";

export default function Desserts() {
  const [desserts, setDesserts] = useState([]);

  async function getData() {
    const querySnapshot = await getDocs(collection(db, "desserts"));
    const cookie = querySnapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    setDesserts(cookie);
  }


  useEffect(() => {
    getData();
  }, []);

  const dessertPictures = [
    {
      name: "cakepop",
      width: 2048,
      height: 1328,
      xsWidth: "100%",
      xsHeight: "100px",
      smWidth: "100%",
      smHeight: "160px",
      mdHeight: "160px",
    },
    {
      name: "cupcake",
      width: 700,
      height: 631,
      xsWidth: "100%",
      xsHeight: "100px",
      smWidth: "100%",
      smHeight: "160px",
      mdHeight: "160px",
    },
    {
      name: "desserts",
      width: 850,
      height: 516,
      xsWidth: "100%",
      xsHeight: "100px",
      smWidth: "100%",
      smHeight: "160px",
      mdHeight: "160px",
    },
    {
      name: "rudi",
      width: 720,
      height: 800,
      xsWidth: "100%",
      xsHeight: "100px",
      smWidth: "100%",
      smHeight: "160px",
      mdHeight: "160px",
    },

    {
      name: "tart",
      width: 810,
      height: 710,
      xsWidth: "100%",
      xsHeight: "100px",
      smWidth: "100%",
      smHeight: "160px",
      mdHeight: "160px",
    },
    {
      name: "tart2",
      width: 600,
      height: 688,
      xsWidth: "100%",
      xsHeight: "100px",
      smWidth: "100%",
      smHeight: "160px",
      mdHeight: "160px",
    },
  ];

  return (
    <Box>
      <Wrapper>
        <Grid container>
          <Grid item xs={12} >
            <PageTitle title={"Desszertek"} />
            </Grid>
            <Grid item xs={12} sm={10} sx={{mx: "auto", textAlign: "center", my: 4}} >
            <Typography variant="subtitle1" color="text.secondary" data-aos="fade-up" >
              Desszertekből minimum <strong>4 szelet/db </strong> rendelhető.
              Minden héten változó kínálattal állok szíves rendelkezésükre.
              Az aktuális választékért, szezonális termékekért kérem keressen bizalommal.

            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ my: 4 }} >
            <MyGallery photos={dessertPictures} path="desserts" caption="Desszertek" extension="jpg" />
          </Grid>
          <Grid item container spacing={4} sx={{ my: 3 }}>
            {desserts.length > 0 ?
              desserts
                .sort((a, b) => parseInt(a.price.split(' ')[0]) - parseInt(b.price.split(' ')[0]) )
                .map((dessert) => (

                  <Grid item xs={10} sm={6} lg={4} key={dessert.id} data-aos="fade-up" sx={{ mx: { xs: "auto", sm: 0 } }}>
                    <MediaCard name={dessert.name} price={dessert.price} allergenic={dessert.allergenic} />
                  </Grid>
                )) : ""}
          </Grid>
        </Grid >
      </Wrapper>
    </Box>
  );
}
