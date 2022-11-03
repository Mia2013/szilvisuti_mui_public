import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Button,
  Typography,
} from "@mui/material";
import Link from "@material-ui/core/Link";

import MenuIcon from "@mui/icons-material/Menu";
import DrawerAppBar from "./Drawer";

const ResponsiveAppBar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const pages = [
    { name: "Kezdőlap", to: "/" },
    { name: "Torták", to: "torta" },
    { name: "Desszertek", to: "desszert" },
    { name: "Apró sütemények", to: "sutemenyek" },
    { name: "Rendelés", to: "rendeles" },
  ];

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/nav.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%  100%",
        backgroundColor: "transparent",
        height: { xs: "150px", sm: "220px", md: "200px" },
        width: "100%"
      }}
      className="nav"
    >
      <Toolbar
        disableGutters
        sx={{ display: "flex", justifyContent: { sm: "flex-end", md: "space-between" }, px: 7 }}
      >

        <Typography
          className="logo"
          component="a"
          href="/"
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: { xs: "none", md: "column" },

          }}
        >
          <Typography
            component="img"
            className="logo"
            sx={{
              mt: 1,
              width: "100px",
            }}
            src={`${process.env.PUBLIC_URL}/favicon.ico`}
          ></Typography>
        </Typography>

        <Box
          sx={{
            display: { xs: "flex", sm: "none" },
            ml: -6
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleDrawerToggle}
            color="inherit"
          >
            <MenuIcon sx={{fontSize: "2.5rem"}}/>
          </IconButton>
          <DrawerAppBar
            pages={pages}
            handleDrawerToggle={handleDrawerToggle}
            mobileOpen={mobileOpen}
          />
        </Box>

        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            justifyContent: "center",
            alignSelf: "flex-start",

          }}
        >
          {pages.map((page) => (
            <Button
              key={page.name}
              sx={{ my: 1.5, color: "white", display: "block", fontFamily: "Amatic SC, cursive", fontSize: "1.5rem" }}
              component={Link}
              href={page.to}
              color="inherit"
            >
              {page.name}
            </Button>
          ))}
        </Box>
      </Toolbar>

    </AppBar>
  );
};
export default ResponsiveAppBar;
