import * as React from "react";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Avatar, InputLabel, NativeSelect } from "@mui/material";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { UserProfileAction } from "../../../Store/Actions/UserProfileAction";
import "./EditProfileForm.css";
import ProfileuploadPopup from "./ProfileuploadPopup";

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

export default function EditProfileForm({ value }) {
  const ApiURL = useSelector((state) => state.ApiURL.ApiURL);
  const User = useSelector((state) => state.User.User);
  const { register, handleSubmit, formState, reset } = useForm();
  const dispatch = useDispatch();
  const { errors } = formState;
  console.log(User, "gfg");

  useEffect(() => {
    const id = Cookies.get("id");
    const response = axios
      .get(`${ApiURL}/users/user_profile/${id}`, {
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      })
      .then((response) => {
        dispatch(UserProfileAction(response.data.user));
        const User = response.data.user;
        let defaultValues = {};
        defaultValues.bio = User.bio;
        defaultValues.full_name = User.full_name;
        defaultValues.phone = User.phone;
        defaultValues.gender = User.gender;

        reset({ ...defaultValues });
      });
  }, []);

  const onFormsubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    const id = Cookies.get("id");

    const response = axios
      .patch(`${ApiURL}/users/user_profile/${id}`, data, {
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      })
      .then((response) => {
        if (response.status === 200) {
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
            borderRadius: "16px",
            alignItems: "center",
          }}
        >
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
                <div className="profileedit__profilebar flex flex-row">
                  <Avatar
                    src={
                      User.profile
                        ? `${ApiURL}/${User.profile}`
                        : "https://th.bing.com/th/id/OIP.Ii15573m21uyos5SZQTdrAHaHa?pid=ImgDet&rs=1"
                    }
                    className="profile_edit__avatar"
                  ></Avatar>
                  <div className="profile__name pl-3 pt-3">
                    <p>user name</p>
                    <ProfileuploadPopup className="text-blue-800 text-sm" />
                  </div>
                </div>
              </Grid>
              <Grid item xs={12}>
                <InputLabel>Name</InputLabel>
                <TextField
                  required
                  fullWidth
                  id="name"
                  name="full_name"
                  size="small"
                  {...register("full_name", {
                    required: "name is required",
                  })}
                  autoComplete="email"
                />
                <p className="error">{errors.full_name?.message}</p>
              </Grid>
              <Grid item xs={12}>
                <InputLabel>Bio</InputLabel>
                <TextField
                  required
                  fullWidth
                  name="bio"
                  multiline
                  rows={4}
                  variant="outlined"
                  size="small"
                  id="bio"
                  {...register("bio", {
                    pattern: {
                      value: /^.{1,150}$/,
                      message: "Bio not more than 150 characters",
                    },
                  })}
                />
                <p className="error text-red">{errors.bio?.message}</p>
              </Grid>
              <Grid item xs={12}>
                <InputLabel>Phone</InputLabel>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  name="phone"
                  size="small"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[7-9][0-9]{9}$/,
                      message: "Mobile number invalid",
                    },
                  })}
                  autoComplete="phone"
                />
                <p className="error text-red">{errors.phone?.message}</p>
              </Grid>
              <Grid item xs={12}>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Gender
                </InputLabel>
                <NativeSelect
                  inputProps={{
                    name: "gender",
                    id: "uncontrolled-native",
                  }}
                  {...register("gender")}
                >
                  <option value={"Male"}>Male</option>
                  <option value={"Female"}>Female</option>
                  <option value={"Other"}>Other</option>
                </NativeSelect>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  size="small"
                  sx={{ color: "white" }}
                >
                  Update
                </Button>
              </Grid>{" "}
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
