import { Grid, TextField, Button, Typography } from "@mui/material";

import { createDevlogPost } from "@/app/actions/createDevlogPost";

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
        Create a new devlog post
      </Typography>
      <Grid
        container
        component={"form"}
        action={createDevlogPost}
        spacing={5}
        direction={"column"}
      >
        <Grid
          container
          direction={"column"}
          spacing={2}
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
            name="content"
            label="Content"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
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
