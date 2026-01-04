import {
  Grid,
  Divider,
  Typography,
  Button,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import Image from "next/image";

function renderCard(cardProps: {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  altText: string;
  backgroundPosition?: string;
}) {
  return (
    <Card
      sx={{
        "&:hover": { filter: "brightness(0.8)", boxShadow: 10 },
      }}
    >
      <CardActionArea href={cardProps.link}>
        <CardMedia
          sx={{
            height: 225,
            backgroundPosition: cardProps.backgroundPosition || "center",
          }}
          image={cardProps.imageSrc}
          title={cardProps.altText}
        />
        <CardContent sx={{ pb: 5 }}>
          <Typography variant="h3" color="text.primary">
            {cardProps.title}
          </Typography>
          <Typography variant="subtitle2" color="text.primary">
            {cardProps.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default function Page() {
  return (
    <Grid container spacing={"6.4em"}>
      <Grid size={12}>
        <Divider />
        <Grid container spacing={3} sx={{ my: 3, mx: 8 }}>
          <Grid
            size={9}
            container
            alignContent="center"
            justifyContent="center"
            direction="column"
          >
            <Typography variant="h1" color="text.primary" fontWeight={"bold"}>
              Erjie Xia
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.primary"
              sx={{ whiteSpace: "pre-line" }}
            >
              Welcome to my little personal place!
              <br />
              Here you will find a little of everything of me. Projects, notes,
              blog...
              <br />
              Hope you enjoy!
            </Typography>
            <Grid container size={12} sx={{ mt: 3 }}>
              <Button variant="contained" color="primary" href="/about">
                <Typography
                  variant="button"
                  color="primary.contrastText"
                  fontWeight={"bold"}
                >
                  Projects
                </Typography>
              </Button>
              <Button variant="contained" color="primary" href="/about">
                <Typography
                  variant="button"
                  color="primary.contrastText"
                  fontWeight={"bold"}
                >
                  About me
                </Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid size={3} container justifyContent="center" sx={{ my: 5 }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateAreas: "stack",
                width: "fit-content",
                height: "fit-content",
              }}
            >
              <Image
                src="/img/other/brown-circle.svg"
                alt="brown circle"
                width={1000}
                height={1000}
                style={{ gridArea: "stack" }}
                title="brown circle"
              />
              <Image
                src="/img/my-new-avatar.svg"
                alt="A photo of my self"
                draggable={false}
                height={0}
                width={300}
                style={{
                  gridArea: "stack",
                  height: "auto",
                  borderRadius: "2em",
                }}
                title="A cute green dino"
              />
            </Box>
          </Grid>
        </Grid>
        <br />
        <Divider />
      </Grid>
      <Grid container spacing={5} size={12}>
        <Grid container size={12} spacing={1} direction="column">
          <Typography variant="h2" align="center" color="text.primary">
            Discover me
          </Typography>
          <Typography variant="subtitle1" align="center" color="primary">
            Click on any section to visit my posts!
          </Typography>
        </Grid>
        <Grid size={12}>
          <Grid container spacing={5}>
            <Grid size={{ xs: 12, md: 4 }}>
              {renderCard({
                title: "DevLog",
                description:
                  "On this section you can find all the posts of my proffessional trace.",
                imageSrc: "/img/new-devlog.webp",
                link: "/devlog",
                altText: "devlog",
                backgroundPosition: "center -170px",
              })}
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              {renderCard({
                title: "Projects",
                description:
                  "In case you want to have a look at the my past wins.",
                imageSrc: "/img/new-project.webp",
                link: "/projects",
                altText: "projects",
              })}
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              {renderCard({
                title: "Blog",
                description:
                  "Check-out this page to get a git pull of my life story-times!",
                imageSrc: "/img/new-blog.webp",
                link: "/blog",
                altText: "blog",
                backgroundPosition: "center -125px",
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
