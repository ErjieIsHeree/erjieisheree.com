import { Typography, AppBar, Toolbar, Box, Button } from "@mui/material";

import Logo from "@/app/component/Logo";

function myOutlinedButton( link: string, label: string ) {
    return(
      <Button href={link} color="primary"
        sx={{
          '&:hover': { bgcolor: 'background.paper' }
        }}
      >
        <Typography variant="button" color="text.primary" fontWeight="fontWeightBold"
          sx={{ "&:hover": { color: 'primary.contrastText' } }}
        >
          {label}
        </Typography>
      </Button>
    );
}

export default function Header() {
  return (
    <AppBar
      component="header"
      position="static"
      sx={{
        backgroundColor: "background.paper",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow: "initial"
      }}
    >
      <Toolbar
        sx={{
          display: "inline-flex",
          justifyContent: "space-between",
          p: 0.5
        }}
      >
        <Logo logoHeight={75}/>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 4
          }}
        >
          <Button href="/" color="secondary" variant="contained">
            <Typography variant="button" color="secondary.contrastText" fontWeight="fontWeightBold"
              sx={{ "&:hover": { color: 'primary.contrastText' } }}
            >
              Home
            </Typography>
          </Button>
          {myOutlinedButton("/devlog", "DevLog")}
          {myOutlinedButton("/projects", "Projects")}
          {myOutlinedButton("/blog", "My blog")}
          {myOutlinedButton("/about", "About me")}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
