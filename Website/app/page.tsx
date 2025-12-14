import Image from "next/image";

import { Box, Typography, Button, Grid, Card, CardContent, CardMedia, Link } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ p: 10, pb: 20 }} >
      <Grid container spacing={15}>
        <Grid size={12}>
          <Grid container spacing={2} >
            <Grid size={6} alignContent="center">
              <Typography variant="h1" color="text.primary" fontWeight={"bold"}>
                Erjie Xia
              </Typography>
              <br />
              <Typography variant="body1" color="text.primary" sx={{ whiteSpace: 'pre-line' }}>
                Welcome to my little personal place!<br />
                Here you will find a little of everything of me. Projects, notes, blog...<br />
                Hope you enjoy!
              </Typography>
              <br />
              <Button variant="contained" color="primary">
                <Typography variant="button" color="primary.contrastText">
                  About me
                </Typography>
              </Button>
            </Grid>
            <Grid size={6}>
              <Image
                src="/img/others/temp-img.jpg" 
                alt="A photo of my self"
                height={200}
                width={500}
                style={{ width: "100%", height: "auto" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid size={12}>
          <Grid container spacing={5} >
            <Grid size={12}>
              <Typography variant="h2" align="center" color="text.primary" fontWeight={"bold"}>Discover me!</Typography>
            </Grid>
            <Grid size={12}>
              <Grid container spacing={5}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Card>
                    <CardMedia
                      sx={{ height: 140 }}
                      image="/"
                      title="Work bench"
                    />
                    <CardContent>
                      <Typography variant="h3" color="text.primary">DevLog</Typography>
                      <Typography variant="body1" color="text.primary">On this section you can find all the posts of my proffesional trace.</Typography>
                      <Link href="/devlog">
                        See more
                      </Link>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Card>
                    <CardMedia
                      sx={{ height: 140 }}
                      image="/"
                      title="Github"
                    />
                    <CardContent>
                      <Typography variant="h3" color="text.primary" fontWeight="medium">Projects</Typography>
                      <Typography variant="body1" color="text.primary">In case you want to have a look at the my past wins</Typography>
                      <Link href="/projects">
                        See more
                      </Link>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Card>
                    <CardMedia
                      sx={{ height: 140 }}
                      image="/"
                      title="Blog"
                    />
                    <CardContent>
                      <Typography variant="h3" color="text.primary">My Blog</Typography>
                      <Typography variant="body1" color="text.primary">Checkout this page to get a git pull of my life!</Typography>
                      <Link href="/blog">
                        See more
                      </Link>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
