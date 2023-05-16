import * as React from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import logo from "./../../Assets/logotrans.png";
import "./Signin.css";
import { useDispatch } from "react-redux";
import { UserProfileAction } from "../../Store/Actions/UserProfileAction";

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

export default function SignIn({ value, admin, url }) {
  const [formerror, setFormerror] = React.useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ApiURL = useSelector((state) => state.ApiURL.ApiURL);
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  let target;
  admin ? (target = "/admin_pannel") : (target = "/home");

  const onFormsubmit = (data) => {
    axios
      .post(`${ApiURL}/${url}`, data)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data.user);
          dispatch(UserProfileAction(response.data.user));
          Cookies.set("token", response.data.token);
          Cookies.set("id", response.data.id);
          navigate(target);
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          setFormerror("username or password not valid");
        } else {
          setFormerror("an error occured please try again later");
        }
      });
  };

  return (
    <div className={admin ? "h-screen pt-20" : "h-full pt-20"}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 0,
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
              onSubmit={handleSubmit(onFormsubmit)}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                {formerror && (
                  <Grid item xs={15}>
                    <p className="text-red-700 text-sm">{formerror}</p>
                  </Grid>
                )}
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
                  <Grid className="text-center" item xs={12}>
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
                        <Link to="/signup" className="text-sm text-blue-800">
                          Don&apos;t have an account? Sign Up
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
    </div>
  );
}
