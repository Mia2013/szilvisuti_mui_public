import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { Grid, Typography, Button, Alert,  } from '@mui/material';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { initializeApp } from "firebase/app";

import firebaseConfig from '../firebase/config';



export default function Login({setUser}) {


  const [formData, setFormData] = React.useState({
    showPassword: false,
    email: "",
    password: ""

  });
  const [error, setError] = React.useState({});

  const handleChange = (prop) => (event) => {
    const value = event.target.value;

    setFormData((prev) => ({
      ...prev,
      [prop]: value,
    }));
  }



  function handleOnSubmit(event) {
    event.preventDefault();
    initializeApp(firebaseConfig);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        setError({ code: 200, message: "Sikeres bejelentkezés", alertType: "success" });
        const user = userCredential.user;
        localStorage.setItem('szilviAdmin', user.accessToken);
        setUser(user.accessToken)
      })
      .catch((error) => {
        setError({ code: error.code, message: "Hibás email cím vagy jelszó", alertType: "error", error: error.message });
        return error;
      });
  }


  const handleClickShowPassword = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Grid container >
      <Grid item sx={{ mt: 7, mx: "auto" }}>
        <Box
          component="form"
          sx={{
            m: 1, width: '350px',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: '20px'
          }}
        >
          <Typography variant="h4">Bejelentkezés</Typography>

          <FormControl variant="outlined" fullWidth>

            <InputLabel htmlFor="outlined-email">Email cím</InputLabel>

            <OutlinedInput
              id="outlined-email"
              label="Email cím"
              name="email"
              value={formData.email}
              onChange={handleChange("email")}
              required
              fullWidth
            />
          </FormControl>



          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="outlined-adornment-password">Jelszó</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={formData.showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {formData.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Jelszó"
            />
          </FormControl>
          <Button variant="contained" type='submit' onClick={handleOnSubmit} sx={{m: 2}}>Bejelentkezés</Button>
          {error.alertType === undefined ? <></> : <Alert severity={error.alertType} >{error.message}</Alert>}
        </Box>
      </Grid>
    </Grid>
    )
}
