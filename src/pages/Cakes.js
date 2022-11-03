import { useState, useEffect } from "react";
import { Grid, Typography, Toolbar, Box } from "@mui/material";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../firebase/db";

import MyGallery from "../components/PhotoGallery";
import ButtonBases from "../components/ComplexButton";
import PageTitle from "../components/PageTitle";
import SubTitle from "../components/SubTitle";
import MediaCardForCakes from "../components/MediaCardForCakes";
import Wrapper from "../components/Wrapper";
import cakesList from "../components/cakesList";

export default function Cakes() {
  const [cakes, setCakes] = useState([]);
  const [selectCake, setSelectCake] = useState([]);

  async function getData() {
    const querySnapshot = await getDocs(collection(db, "cakes"));
    const cake = querySnapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    setCakes(cake);
    setSelectCake(cake);
  }

  useEffect(() => {
    getData();
  }, []);


  async function handleOnChange(event) {
    const item = event.target.value;
    if (item !== "") {
      const q = query(collection(db, "cakes"), where("name", "==", item));
      const querySnapshot = await getDocs(q);
      const categoryList = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      return setCakes(categoryList);
    }
    getData();
  }

  return (
    <Box>
      <Wrapper>
        <Grid container>
          <Grid item xs={12}>
            <PageTitle title={"Torták"} />
          </Grid>
          <Grid item xs={12}>
            <ButtonBases />
          </Grid>
          <Grid item xs={12}>
            <Toolbar id="klasszikus" />
            <SubTitle title="Klasszikus torták" />

            <Grid item xs={12} md={6} id="cake-select">
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={handleOnChange}
              >
                <option value=""> - - - Válassz egy ízt/ összes torta - - -</option>
                {selectCake
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((cake) => (
                    <option key={cake.name + 1} value={cake.name}>
                      {cake.name}
                    </option>
                  ))}

              </select>
            </Grid>
          </Grid> 


          <Grid item container spacing={4} sx={{ my: 3 }}>
            {cakes.length > 0 ?
              cakes
              .sort((a, b) => parseInt(a.slice8.split(' ')[0]) - parseInt(b.slice8.split(' ')[0]) )
              .map((cake) => (
                  <Grid item xs={10} md={6} lg={4} key={cake.id} data-aos="fade-up" sx={{ mx: { xs: "auto", md: 0 } }}>
                    <MediaCardForCakes name={cake.name} description={cake.description} slice8={cake.slice8} slice12={cake.slice12} slice16={cake.slice16} allergenic={cake.allergenic} />
                  </Grid>

                )) : ""}
          </Grid>

          <Grid item xs={12} data-aos="fade-up">
            <Toolbar id="forma" />
            <SubTitle title="Forma torták" />
            <Typography variant="body2" color="text.secondary" >
              Egyedi tortarendelés esetén minden esetben egyedi árat számítok ki
              az íz, méret, burkolás és a további dekorációs elemek
              függvényében. Az íz bármelyik klasszikus torta ízében választható.
            </Typography>
            <MyGallery photos={cakesList.formCakes} path="cakes/form" caption="Forma torták" extension="png" />
          </Grid>

          <Grid item xs={12} data-aos="fade-up" >
            <Toolbar id="egyedi" />
            <SubTitle title="Egyedi torták" />
            <Typography variant="body2" color="text.secondary" >
              Egyedi tortarendelés esetén minden esetben egyedi árat számítok ki
              az íz, méret, burkolás és a további dekorációs elemek
              függvényében. Az íz bármelyik klasszikus torta ízében választható.
            </Typography>
            <MyGallery photos={cakesList.uniqueCakes} path="cakes/unique" caption="Egyedi torták" extension="png" />
          </Grid>

          <Grid item xs={12} data-aos="fade-up" >
            <Toolbar id="gyerek" />
            <SubTitle title="Gyerek torták" />
            <Typography variant="body2" color="text.secondary" >
              Egyedi tortarendelés esetén minden esetben egyedi árat számítok ki
              az íz, méret, burkolás és a további dekorációs elemek
              függvényében. Az íz bármelyik klasszikus torta ízében választható.
            </Typography>
            <MyGallery photos={cakesList.childrenCakes} path="cakes/children" caption="Gyerek torták" extension="png" />
          </Grid>

          <Grid item xs={12} data-aos="fade-up" >
            <Toolbar id="eskuvoi" />
            <SubTitle title="Esküvői torták" />
            <Typography variant="body2" color="text.secondary" >
              Egyedi tortarendelés esetén minden esetben egyedi árat számítok ki
              az íz, méret, burkolás és a további dekorációs elemek
              függvényében. Az íz bármelyik klasszikus torta ízében választható.
            </Typography>
            <MyGallery photos={cakesList.weddingCakes} path="cakes/wedding" caption="Esküvői torták" extension="png" />
          </Grid>
        </Grid>
      </Wrapper>
    </Box>
  );
}
