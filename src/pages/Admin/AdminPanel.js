import React, { useEffect, useState } from 'react';
import './Admin.scss';
import { Box, Button, Checkbox, Container, FormControlLabel, Stack, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const AdminPanel = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleChange = (event) => {
    setUsername(event.target.value);
  }
  const handlePass = (event) => {
    setPassword(event.target.value);
  }
  
  const handleSubmit = () => {
    if(username === 'admin@gmail.com' && password === 'Pass@123'){
      navigate('/admin/dashboard');
    }
  }

  // const [showPassword, setShowPassword] = React.useState(false);

  // const handleClickShowPassword = () => setShowPassword((show) => !show);

  // const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  // };
  return (
    <Container>
        <Box className='admin-main'>
            <img src="/images/admin/logo.png" alt="" style={{ margin: "5%" }} />
          <Box sx={{ border: "1px solid #DDD", textAlign: "start" }} className="stacking">
            <Stack spacing={2}>
              <div className="label" style={{ paddingBottom: "2%"}}>
                Username or Email Address <br />
                <TextField
                  id="outlined-number"
                  type="text"
                  value={username}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{ width: "100%"}}
                />
              </div>
              <div className="label" style={{ paddingTop: "0%", paddingBottom: "0%"}}>
                Password <br />
                {/* <OutlinedInput
                InputLabelProps={{
                  shrink: true,
                }}
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          /> */}
                <TextField
                  id="outlined-number"
                  type="text"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{ width: "100%"}}
                  value={password}
                  onChange={handlePass}
                />
              </div>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
              >
                <div style={{margin:"auto",padding: "2%", paddingTop: "0%"}}>
                <FormControlLabel control={<Checkbox />} label="Remember Me" style={{ color: "#666", fontFamily: "Lato", fontWeight: "400" }}/>
                </div>
                <div style={{margin:"auto",padding: "2%", paddingTop: "0%"}}>
                <Button variant="contained" onClick={handleSubmit}>Log In</Button>
                {/* <FormControlLabel control={<Checkbox />} label="Remember Me" /> */}
                </div>
            </Stack>
            </Stack>
          </Box>
          <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
            <div className="login-footer" style={{ paddingLeft: "2%" }}>
              Register
            </div>
            <div className="login-footer">
              Forgot your password
            </div>
          </Stack>
        </Box>
    </Container>
  )
}