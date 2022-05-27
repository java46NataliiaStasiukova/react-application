/*
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';

import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginData from '../../models/LoginData';
import { Alert } from '@mui/material';
type Props = {
    submitFn: (loginData: LoginData)=>Promise<boolean>
}
function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://tel-ran.com">
        Tel-Ran
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function LoginForm({submitFn}: Props) {
    const [flAlert, setAlert] = React.useState<boolean>(false);
  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const loginData = {email: data.get('email') as string, password: data.get('password') as string}
    console.log(loginData);
    if(!(await submitFn(loginData))) {
        setAlert(true)
    }
    
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: {xs: 15, sm: 1, md: 15},
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            {flAlert && <Alert onClose={() => setAlert(false)} severity='error'
             sx={{width: '50vw', mb: {xs: 5,sm:1,md: 5}}}>Wrong Credentials</Alert>}
          <Avatar sx={{  bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          
          <Box component="form" onSubmit={handleSubmit} sx={{mt: {xs: 8, sm: 2, md:10}}} >
            <TextField
              
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              
              autoFocus
            />
            <TextField
            sx={{mt: {xs: 5, sm:2, md: 5}}}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
             
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{mt: {xs: 5, sm:2, md: 5}}}
            >
              Sign In
            </Button>
           
          </Box>
        </Box>
        <Copyright sx={{mt: {xs: 5, sm:2, md: 5}  }} />
      </Container>
    </ThemeProvider>
  );
}
*/


import { Alert, Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import LoginData from "../../models/LoginData";
type Props = {
    submitFn: (loginData: LoginData)=> Promise<boolean>;
}
let inputEmail: any;
let InputPassword: any;
const LoginForm: React.FC<Props> = ({submitFn}) => {
  //const [flAlert, setAlert] = React
    const [emailValue, setEmail] = React.useState("");
    const [passwordValue, setPassword] = React.useState("");
    function onLogin() {
        const loginEmail: string = inputEmail.value;
        const loginPassword: string = InputPassword.value;
        submitFn({email: loginEmail, password: loginPassword});
    }
    React.useEffect(()=>{
        inputEmail = document.getElementById("email")
        InputPassword = document.getElementById("password")
    })
    return (

          <Container component="main" maxWidth="xs">
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>

              <Box component="form" sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={emailValue}
                  onChange={(e) => {
                  setEmail(e.target.value);
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={passwordValue}
                  onChange={(e) => {
                  setPassword(e.target.value);
                  }}
                />
                <Button
                  onClick={onLogin}
                  
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}>
                  Sign In
                </Button>
                
              </Box>
            </Box>
          </Container>

      );
    
}
export default LoginForm;

