"use client";

import { Grid, TextField, Button, Typography } from "@mui/material";

import { Login } from "@/app/_actions/login";
import { useActionState } from "react";

const initialState = {
  errors: {
    email: undefined,
    password: undefined
  }
};

export default function Page() {
  const [state, action] = useActionState(Login, initialState);

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
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            error={!!state.errors?.email}
            helperText={state.errors?.email?.[0]}
          />
          <TextField
            name="password"
            label="Password"
            variant="outlined"
            fullWidth
            error={!!state.errors?.password}
            helperText={state.errors?.password?.[0]}
          />
        </Grid>
        <Button
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
