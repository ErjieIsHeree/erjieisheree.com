import Image from "next/image";
import { Grid, Typography, Divider, Link } from "@mui/material";

export default function Page() {
  return (
    <Grid container spacing={12}>
      <Grid container size={12} spacing={2}>
        <Typography variant="h1" color="text.primary" fontWeight={"bold"}>
          About me
        </Typography>
        <Grid container size={12} spacing={5}>
          <Grid size={6}>
            <Typography variant="body1" color="textPrimary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              porttitor metus lectus, a <b>vulputate</b> est rutrum ut. Vivamus
              condimentum placerat sagittis. Aenean id erat a est viverra
              bibendum ut maximus elit. Suspendisse eget gravida tellus.
              Praesent suscipit ipsum id orci porta, ut molestie sem elementum.
              Sed sed odio velit. Aliquam tincidunt metus at blandit mollis.
              Etiam ac mollis velit
            </Typography>
            <br />
            <Typography variant="body1" color="textPrimary">
              Aliquam vestibulum sit amet orci vel sollicitudin. Sed ultricies augue
              metus, non mattis lorem vehicula sed. Donec vitae congue augue.
              Duis cursus massa vel eros <b>laoreet</b> venenatis. Cras ultricies nec
              risus consequat bibendum. Vivamus iaculis mi cursus libero
              itincidunt, nec <i>finibus</i> elit imperdiet. Maecenas sem ante,
              vulputate vitae semper sit amet, maximus ac justo. Quisque quis
              erat id tellus ultricies <u>semper</u>
            </Typography>
          </Grid>
          <Grid size={6} container justifyContent="center" alignItems="center">
            <Image
              src="/img/new-me.webp"
              width={400}
              height={500}
              alt="A photo of me, Erjie!"
              style={{ height: "auto" }}
              title="Erjie in the bus :)" 
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Typography
          variant="h2"
          color="textPrimary"
          fontWeight={"bold"}
          fontSize={38}
        >
          Contact info
        </Typography>
        <Divider />
        <br />
        <Typography variant="body1" color="textPrimary">
          Email:{" "}
          <Link component={"a"} href="mailto:erjieisheree@gmail.com">
            erjieisheree@gmail.com
          </Link>
          <br />
          LinkedIn:{" "}
          <Link
            component={"a"}
            href="https://www.linkedin.com/in/erjie-xia-5b50b72a6/"
          >
            Erjie Xia
          </Link>
          <br />
          Github:{" "}
          <Link component={"a"} href="https://github.com/ErjieIsHeree">
            ErjieIsHeree
          </Link>
        </Typography>
      </Grid>
      <Grid size={12}>
        <Typography
          variant="h2"
          color="textPrimary"
          fontWeight={"bold"}
          fontSize={38}
        >
          What am I doing now?
        </Typography>
        <Divider />
        <br />
        <Grid size={8}>
          <Typography variant="body1" color="textPrimary">
              <b>Lorem</b> ipsum dolor sit amet, consectetur adipiscing elit. Sed
              porttitor metus lectus, a vulputate est rutrum ut. Vivamus
              condimentum placerat sagittis. Aenean id erat a est viverra
              bibendum ut maximus elit. Suspendisse eget gravida tellus.
              Praesent suscipit ipsum id orci porta, ut molestie sem elementum.
              Sed sed odio velit. Aliquam tincidunt metus at blandit mollis.
              Etiam ac mollis velit
            </Typography>
            <br />
            <Typography variant="body1" color="textPrimary">
              Aliquam vestibulum sit amet orci vel sollicitudin. Sed ultricies augue
              metus, non mattis lorem vehicula sed. Donec vitae congue augue.
              Duis cursus massa vel eros laoreet venenatis. Cras ultricies nec
              risus consequat bibendum. Vivamus iaculis mi cursus libero
              tincidunt, nec finibus elit imperdiet. Maecenas sem ante,
              vulputate vitae semper sit amet, maximus ac justo. Quisque quis
              erat id tellus ultricies ullamcorper
            </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
