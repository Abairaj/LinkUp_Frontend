import * as React from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import logo from "./../../Assets/logotrans.png";
import "./Signin.css";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="">
        Linkup
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#64b5f6",
    },
    secondary: {
      main: "#f48fb1",
    },
  },
});

export default function SignIn({ value, admin }) {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const onFormsubmit = (data) => {
    console.log(data);
  };
  const onErrorsubmit = (error) => {
    console.log(error);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            padding: "20px",
            paddingTop: "0px",
            paddingBottom: "0px",
            display: "flex",
            flexDirection: "column",
            border: `2px solid`,
            borderColor: "grey.500",
            borderRadius: "16px",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            sx={{
              height: 233,
              width: 350,
              maxHeight: { xs: 150, md: 200 },
              maxWidth: { xs: 200, md: 220 },
            }}
            alt="The house from the offer."
            src={logo}
          />

          <Typography component="h1" variant="h5">
            {value}
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onFormsubmit, onErrorsubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                      message: "Invalid email format",
                    },
                  })}
                  autoComplete="email"
                />
                <p className="error">{errors.email?.message}</p>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  {...register("password", {
                    required: "Password Field can't be empty",
                  })}
                  autoComplete="new-password"
                />
                <p className="error">{errors.password?.message}</p>
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>

            {!admin && (
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={6}>
                  <h1>OR</h1>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button
                    startIcon={<FacebookIcon />}
                    type="submit"
                    fullWidth
                    variant="outlined"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Login With Facebook
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Link
                    sx={{
                      color: "white",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    Forgot Password?
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link href="/signup" variant="body2">
                        Don't have an account? Sign Up
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
