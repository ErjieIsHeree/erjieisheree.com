import { Typography, Link, Grid } from "@mui/material";
import Image from "next/image";

import Logo from "@ui/Logo";

export default function Footer() {
  return(
    <Grid
      component="footer"
      container
      spacing={5}
      sx={{
        backgroundColor: "background.paper",
        px: 7,
        pt: 2,
        pb: 3
      }}
    >
      <Grid size={12}>
        <Grid container spacing={1}>
          <Grid size={12}>
            <Grid container>
              <Grid size={12}>
                <Logo logoHeight={100} />
              </Grid>
              <Grid size={12}>
                <Typography variant="body2" color="text.primary">Made by Erjie Xia</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid size={12}>
            <Grid container spacing={5}>
              <Link component="a" href="https://github.com/ErjieIsHeree">
                <Image src="/img/social/github-logo.png" alt="Github link" width={40} height={40}/>
              </Link>
              <Link component="a" href="https://linkedin.com/in/erjie-xia-5b50b72a6">
                <Image src="/img/social/linkedin-logo.png" alt="LinkedIn link" width={35} height={35}/>
              </Link>
              <Link component="a" href="https://x.com/ErjieX22730">
                <Image src="/img/social/x-logo.png" alt="Twitter/X link" width={35} height={35}/>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid container>
          <Grid size={12} sx={{ textAlign: 'center' }}>
            <Typography variant="caption" color="text.primary">
              © 2025 Erjie Xia. Content licensed under <Link component="a" href="https://creativecommons.org/licenses/by-nc-sa/4.0/"> CC BY-NC-SA 4.0 International</Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
