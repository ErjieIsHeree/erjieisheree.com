import { Grid, Typography, Button } from "@mui/material";
import Image from "next/image";

function MyButton(
  title: string,
  iconSrc: string,
  iconAlt: string,
  link: string
) {
  return (
    <Button
      href={link}
      variant="outlined"
      sx={{ gap: 1, border: 2, borderColor: "#422F00", padding: 2 }}
    >
      <Image src={iconSrc} alt={iconAlt} height={20} width={20} />
      <Typography variant="h2" fontSize={20} color="textPrimary">
        {title}
      </Typography>
    </Button>
  );
}

export default function Page() {
  return (
    <Grid
      container
      size={12}
      spacing={10}
      height={"80vh"}
      direction={"column"}
      pt={15}
      alignItems={"center"}
    >
      <Typography variant="h1" color="textPrimary" fontWeight={"bold"}>
        Welcome, Erjie!
      </Typography>
      <Grid container spacing={10} direction={"row"}>
        {MyButton(
          "New devlog post",
          "/img/code-icon.svg",
          "code icon",
          "/admin/new-devlog-post"
        )}
        {MyButton(
          "New project",
          "/img/project-icon.svg",
          "project icon",
          "/admin/new-project"
        )}
        {MyButton(
          "New blog post",
          "/img/blog-icon.svg",
          "blog icon",
          "/admin/new-blog-post"
        )}
      </Grid>
    </Grid>
  );
}
