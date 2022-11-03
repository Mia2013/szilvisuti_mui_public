import * as React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";
import { pink } from '@mui/material/colors'

function ScrollTop(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
        behavior: 'smooth'
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 25, right: 25,  }}
      >
        {children}
      </Box>
    </Fade>
  );
}

export default function BackToTopButton(props) {
  return (
    <React.Fragment>
      <ScrollTop {...props} >
        <Fab size="small" aria-label="scroll back to top" sx={{bgcolor:pink['A200']}} >
          <KeyboardArrowUpIcon  />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
