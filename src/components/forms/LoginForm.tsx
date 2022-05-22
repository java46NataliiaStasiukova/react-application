import { Alert, Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import LoginData from "../../models/LoginData";
type Props = {
    submitFn: (loginData: LoginData)=>void;
}
let inputEmail: any;
let InputPassword: any;
const LoginForm: React.FC<Props> = ({submitFn}) => {
    const [emailValue, setEmail] = React.useState("");
    const [passwordValue, setPassword] = React.useState("");
    function onLogin() {
        const loginEmail: string = inputEmail.value;
        const loginPassword: string = InputPassword.value;
        const res = submitFn({email: loginEmail, password: loginPassword});
        console.log(res)
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
