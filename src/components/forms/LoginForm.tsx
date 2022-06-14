import { Alert, Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";
import LoginData from "../../models/LoginData";
import { OperationCode } from "../../models/OperationCode";
type Props = {
    submitFn: (loginData: LoginData)=> Promise<boolean>;
}
let inputEmail: any;
let InputPassword: any;
const LoginForm: React.FC<Props> = ({submitFn}) => {
  const [flAlert, setAlert] = React.useState<boolean>(false);
    const [emailValue, setEmail] = React.useState("");
    const [passwordValue, setPassword] = React.useState("");
    async function onLogin() {
        const loginEmail: string = inputEmail.value;
        const loginPassword: string = InputPassword.value;
        if(!(await submitFn({email: loginEmail, password: loginPassword}))) {
          setAlert(true)
      }
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
              {flAlert && <Alert onClose={() => setAlert(false)} severity='error'
               sx={{width: '50vw', mb: {xs: 5,sm:1,md: 5}}}>Wrong Credentials</Alert>}

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

