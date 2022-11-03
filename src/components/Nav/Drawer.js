import * as React from "react";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import Link from "@material-ui/core/Link";

const drawerWidth = "80%";

function DrawerAppBar(props) {
  const { window, pages, handleDrawerToggle, mobileOpen } = props;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center",  }}>
      <Typography
        className="logo"
        component="a"
        href="/"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          my: 1,
        }}
      >
        <Typography
          component="img"
          className="logo"
          sx={{
            width: "30%",
          }}
          src={`${process.env.PUBLIC_URL}/assets/logo.png`}
        ></Typography>
      </Typography>
      <Divider />
      <List>
        {pages.map((page) => (
          <ListItem key={`${page.name}drawer`} disablePadding>
            <ListItemButton>
              <Typography
                sx={{
                  my: 2,
                  mx: "auto",
                  display: "block",
                  fontSize: "1.5rem",
                  textAlign: "center",
                  color: "rgb(176, 21, 71)",
                  fontFamily: "Amatic SC, cursive",
                  width: "100%",
                }}
                onClick={handleDrawerToggle}
                component={Link}
                href={page.to}
              >
                {page.name}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box component="nav">
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default DrawerAppBar;
