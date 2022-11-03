import { Card, CardContent, CardActionArea, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function MediaCardForCakes({ name, description, slice8, slice12, slice16, allergenic }) {
  return (
    <Card data-aos="flip-left">
      <CardActionArea>
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            sx={{
              minHeight: { xs: 0, lg: "85px" }, textAlign: "center", my: 1, fontFamily: "Amatic SC, cursive",
            }}

          >
            {name}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" sx={{ minHeight: { xs: 0, md: "90px", lg: "130px" }, my: 1 }}
          >
            {description}
          </Typography>

          <Typography variant="subtitle2" color="text.secondary" sx={{ textAlign: "center", my: 1, }}
          >
            Árak:</Typography>

          <Typography
            display="block"
            sx={{ textAlign: "center", my: 1, }}
            variant="subtitle2"
            color="text.secondary"
          >
            8 szelet:  {slice8}
          </Typography>
          <Typography
            display="block"
            sx={{ textAlign: "center", my: 1, }}
            variant="subtitle2"
            color="text.secondary"
          >
            12 szelet:  {slice12}
          </Typography>
          <Typography
            display="block"
            sx={{ textAlign: "center", mb: 2, }}
            variant="subtitle2"
            color="text.secondary"
          >
            16 szelet:  {slice16}
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="overline"

              >Allergének</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="caption"
              >
                {allergenic}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
