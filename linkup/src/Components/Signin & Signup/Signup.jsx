import * as React from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { DevTool } from "@hookform/devtools";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import logo from "./../../Assets/logotrans.png";
import Cookies from 'js-cookie'
import "./Signup.css";

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

export default function SignUp() {
  const Fb_loginref = React.useRef(null)
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = React.useState(null);
  const ApiURL = useSelector((state) => state.ApiURL.ApiURL);
  const { register, handleSubmit, control, formState } = useForm();
  const { errors } = formState;

  const handleFacebookResponse = (response) => {
    console.log(response,'kfkdkfmdkfkdfd');
    setAccessToken(response.accessToken);
    handleFB_submit(response.accessToken)
  };

  const componentClicked = (data) => {
    console.log("this is data", data);
  };

  const handleFB_submit = (accesstoken) => {
    axios
      .post(`${ApiURL}/socialauth/dj-rest-auth/facebook/`, { access_token: accesstoken })
      .then((response) => {
        console.log(response.config.data.access_token)
        Cookies.set('token',response.config.data)
        navigate('/home')
        
        console.log(response, "kfkdjfdkfjkd");
      });
  };

  const onFormSubmit = (data) => {
    const response = axios
      .post(`${ApiURL}/users/register/`, data)
      .then((response) => {
        if (response.status == 201) {
          navigate("/signin");
        } else if (response.status == 400) {
          alert("signup failed try again");
        }
      });
  };

  const onErrors = (errors) => {
    console.log(errors);
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
          <Button
            startIcon={<FacebookIcon />}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={()=>{
              setTimeout(() => {
              }, 100)
            }}
          >

            Login With Facebook
          </Button>


          <FacebookLogin
            appId="716864823524971"
            fields="name,email,picture"
            callback={handleFacebookResponse}
            onClick={componentClicked}
            render={(renderProps) => (
              <button type="button" onClick={renderProps.onClick}>
                Sign up with Facebook
              </button>
            )}
          />

          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onFormSubmit, onErrors)}
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
                    required: "Email field can't be empty",
                    pattern: {
                      value:
                        /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                      message: "Invalid email format",
                    },
                  })}
                  autoComplete="email"
                  autoFocus
                />
                <p className="error">{errors.email?.message}</p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="fullname"
                  type="text"
                  label="Fullname"
                  name="fullname"
                  {...register("fullname", {
                    required: "fullname can't be empty",
                    pattern: {
                      value:
                        /^[A-Z][^\d\W_]{2}[^\d\W\s][^\d\W_!¡?÷?¿/\\+=@#$^ %ˆ&*(){}|~<>;:[\]]{0,}$/,

                      message:
                        "No space and symbols accepted excluding('.'), First letter should be capital. and More than 3 characters required.",
                    },
                  })}
                />
                <p className="error">{errors.fullname?.message}</p>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  type="text"
                  label="username"
                  name="username"
                  {...register("username", {
                    required: "Username can't be empty",
                    pattern: {
                      value: /^[^_\W\s]*(_[^_\W\s]*)*$/,
                      message: "No space and characters except '_' allowed",
                    },
                  })}
                />
                <p className="error">{errors.username?.message}</p>
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
                    required: "Password can't be empty",
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{}|;':",.<>\/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{}|;':",.<>\/?]{8,}$/,
                      message:
                        "criterias : \n * Must be at least 8 letters \n * Contain atleast one lowercase and one uppercase letter \n *Contains atleast 1 digit \n * Contains atleast one special character. ",
                    },
                  })}
                  autoComplete="new-password"
                />
                <div className="error">{errors.password?.message}</div>
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
            <DevTool control={control} />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signin" className="text-sm text-blue-800">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
