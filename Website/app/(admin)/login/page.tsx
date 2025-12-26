"use client";

import { Grid, TextField, Button, Typography } from "@mui/material";

import { login } from "@/app/actions/auth";
import { useActionState } from "react";

export default function Page() {
  const [state, action, pending] = useActionState(login, undefined);

  return (
    <Grid
      container
      direction={"column"}
      spacing={5}
      alignItems={"center"}
      pt={15}
      height={"80vh"}
      width={"100%"}
    >
      <Typography
        variant="h1"
        color="textPrimary"
        fontWeight={"bold"}
        fontSize={40}
      >
        erjieisheree.com
      </Typography>
      <Grid
        container
        component={"form"}
        action={action}
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
          <TextField name="email" label="Email" variant="outlined" fullWidth />
          <TextField
            name="password"
            label="Password"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Button
          disabled={pending}
          type="submit"
          variant="contained"
          color="primary"
        >
          <Typography variant="button" fontWeight={"bold"}>
            Login
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
}
