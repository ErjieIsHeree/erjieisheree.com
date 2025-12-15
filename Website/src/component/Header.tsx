import { Typography, AppBar, Toolbar, Box, Button } from "@mui/material";

import Logo from "@ui/Logo";

export default function Header() {
  return (
    <AppBar
      component="header"
      position="sticky"
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
          <Button href="/" variant="outlined" color="primary">
            <Typography variant="button" color="text.primary">
              Home
            </Typography>
          </Button>
          <Button href="/devlog" variant="outlined" color="primary">
            <Typography variant="button" color="text.primary">
              DevLog
            </Typography>
          </Button>
          <Button href="/projects" variant="outlined" color="primary">
            <Typography variant="button" color="text.primary">
              Projects
            </Typography>
          </Button>
          <Button href="/blog" variant="outlined" color="primary">
            <Typography variant="button" color="text.primary">
              My blog
            </Typography>
          </Button>
          <Button href="/about" variant="contained" color="primary">
            <Typography variant="button" color="primary.contrastText">
              About me
            </Typography>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
