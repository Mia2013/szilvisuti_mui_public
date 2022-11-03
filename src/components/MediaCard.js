import { Card, CardContent, CardActionArea, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function MediaCard({ name, price, allergenic }) {
  return (
    <Card data-aos="flip-left" sx={{ display: 'flex', }}>
      <CardActionArea sx={{ width: "100%" }}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            sx={{
              textAlign: "center", my: 1, fontFamily: "Amatic SC, cursive", minHeight: { xs: 0, sm: '120px', md: '80px' },
            }}
            color="text.secondary"
          >
            {name}
          </Typography>
          <Typography
            variant="button"
            display="block"
            sx={{ textAlign: "center", my: 1, }}
            color="text.secondary"
          >
            Ár:  {price}
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
