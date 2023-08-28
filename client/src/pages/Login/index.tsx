import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { EmailIcon, EyeCloseIcon, EyeOpenIcon } from '@assets/icons';
import { useUserStore } from '@store/userStore';
import loginIcon from '../../../public/images/privacy.svg';

import { styles } from './Login.styles';

function Login() {
  const navigate = useNavigate();
  const updateUser = useUserStore(store => store.updateUser);

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isError, setIsError] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    }),
    onSubmit: formData => {
      axios
        .post(
          '/api/users/login',
          {
            email: formData.email,
            password: formData.password,
          },
          { withCredentials: true }
        )
        .then(res => {
          const token = res.headers.authorization?.split(' ')[1];
          const user = res.data.payload;
          if (token) {
            window.localStorage.setItem('jwt', token);
            updateUser(user);
          }

          return navigate('/');
        })
        .catch(() => setIsError(true));
    },
  });

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <Container
      maxWidth={false}
      sx={{ display: 'flex', justifyContent: 'center', height: '100vh' }}
    >
      <Paper
        elevation={2}
        sx={{
          width: '440px',
          height: '618px',
          padding: 10,
          marginTop: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box height={64} width={64} mb={4}>
          <img src={loginIcon} width='64' height='64' />
        </Box>
        <Typography variant='h1'>Bienvenido</Typography>
        <Box mb={10} />
        <form style={styles.form} onSubmit={formik.handleSubmit}>
          <Box mt={4} />
          <TextField
            fullWidth
            label='Email'
            type='text'
            name='email'
            onChange={event => {
              formik.handleChange(event);
              setIsError(false);
            }}
            value={formik.values.email}
            error={isError}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end' sx={{ padding: 2, margin: 0 }}>
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
          <Box mb={8} />
          <TextField
            fullWidth
            label='Contraseña'
            type={isShowPassword ? 'text' : 'password'}
            name='password'
            onChange={event => {
              formik.handleChange(event);
              setIsError(false);
            }}
            value={formik.values.password}
            error={isError}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton onClick={handleShowPassword}>
                    {isShowPassword ? <EyeCloseIcon /> : <EyeOpenIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            fullWidth
            type='submit'
            size='large'
            sx={{ marginTop: 8, marginBottom: 8 }}
          >
            Log In
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default Login;
