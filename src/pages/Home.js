import { Grid, Box, Typography } from "@mui/material";
import PageTitle from "../components/PageTitle";
import SubTitle from "../components/SubTitle";
import Wrapper from "../components/Wrapper";



export default function Home() {

  const homeContent = [
    {
      title: "Minőség",
      description: "Kizárólag minőségi alapanyagokat használok, adalékanyag mentesen készítem a finomabbnál finomabb süteményeket, mert számomra nem csak a külcsín, a belbecs is fontos.",
    },

    {
      title: "Kedvező árak",
      description: "Igyekszem a termékeimet továbbra is elérhető áron kínálni."

    },
    {
      title: "Egyedi torták",
      description: "Kedvenc időtöltésem az egyéni kérések megvalósítása, legyen akár szülinap, esküvő, keresztelő."
    },

  ]

  return (
    <Box>
      <Wrapper>
        <Grid container sx={{ mb: 10 }}>
          <Grid item xs={12} sx={{ textAlign: "center"}}>

            <Typography
              noWrap
              component="img"
              className="home-logo"
              sx={{
                width: { xs: "85%", sm: "75%", md: "50%" },
              
              }}
              src={`${process.env.PUBLIC_URL}/assets/logo.png`}
            ></Typography>
          </Grid>
          <Grid item xs={12} data-aos="fade-up">
            <PageTitle title={"Rólam"} />
          </Grid>

          <Grid item xs={12} md={4} data-aos="fade-up">
            <Typography
              noWrap
              component="img"
              sx={{
                height: "auto", 
                objectFit: "cover",
                width: "100%",
                borderRadius: "20% 50% / 40% 10%"
              }}
              src={`${process.env.PUBLIC_URL}/assets/desserts.jpg`}
              className="home-img"
            ></Typography>

          </Grid>

          <Grid item xs={12} md={8} data-aos="fade-up">
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                ml: {xs: 0, md: 6,},
                my: { xs: 3, md: 0 },
                lineHeight: "2rem"
              }}>
              A sütés iránti szenvedélyem a nagymamámtól örököltem, és egy kis kitérő után 
              (humán diploma, majd 10 évig vezető pozíció a kereskedelmi szektorban) 
              ismét azzal foglalkozok, amit imádok 🙂
              Második gyermekem születése után vált bizonyossá számomra, hogy más úton kell 
              tovább haladjak és vissza kell térjek az eredeti szerelem szakmához, a cukrászathoz. 
              Cukrász vizsga megszerzése után elindítottam saját vállalkozásomat, 
              amely fő profilja az egyedi torták készítése, de már a süteményeim is több helyen kaphatóak. 
              Filozófiám: nem csak a külcsín, a belbecs is fontos, 
              ennek tükrében készítem a finomságokat. 
              Minőségi alapanyagokat használok, törekszem a finom, 
              házias ízek kialakítására, adalékanyagokat pedig nem használok a termékeimhez, 
              emiatt egyre népszerűbbek a "Szilvi Sütik". 
              Mindig igyekszem a vásárlói igényeket maximálisan kielégíteni, 
              minden egyes tortám szívvel- lélekkel készül ❤️ Mert szenvedélyem a sütés 🙂

            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: "center", my: 4 }}>
            <SubTitle title="Miért épp engem válasszon?" />
          </Grid>
          {homeContent.map((item) => (
            <Grid item xs={12} md={4} sx={{ mx: "auto", }} data-aos="flip-left" key={item.title}>

              <Box
                key={item.title}
                width="100%"
                sx={{ textAlign: "center", my: { xs: 2, md: 5 }, p: 3, minHeight: { xs: "230px", md: "370px", lg: "310px" } }}
                className="home-content"
              >


                <Typography variant="h5" sx={{
                  mt: 5, fontFamily: "Amatic SC, cursive",
                }}>
                  {item.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ my: 3, }}

                >
                  {item.description}
                </Typography>

              </Box>
            </Grid>
          ))}
        </Grid>

      </Wrapper>
    </Box>
  );
}
