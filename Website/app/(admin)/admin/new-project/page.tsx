import { Grid, TextField, Button, Typography } from "@mui/material";

import { createProjectPost } from "@/app/actions/createProjectPost";

export default function page() {
  return (
    <Grid
      container
      direction={"column"}
      spacing={5}
      alignItems={"center"}
      height={"80vh"}
      width={"100%"}
    >
      <Typography
        variant="h1"
        color="textPrimary"
        fontWeight={"bold"}
        fontSize={40}
      >
        Post a new project
      </Typography>
      <Grid
        container
        component={"form"}
        action={createProjectPost}
        spacing={5}
        direction={"column"}
      >
        <Grid
          container
          direction={"column"}
          spacing={3}
          alignItems={"center"}
          justifyContent={"center"}
          width={"60vh"}
        >
          <TextField
            name="title"
            label="Title"
            variant="outlined"
            helperText={"* Obligatory"}
            fullWidth
          />
          <TextField
            name="subtitle"
            label="Subtitle"
            variant="outlined"
            fullWidth
          />
          <TextField
            name="link"
            label="Link"
            variant="outlined"
            fullWidth
            helperText={"* Obligatory"}
          />
        </Grid>
        <Button type="submit" variant="contained" color="primary">
          <Typography variant="button" fontWeight={"bold"}>
            Submit
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
}
