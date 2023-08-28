import React from 'react';
import { Container } from '@mui/material';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';

type MainProps = {
  children: React.ReactNode;
};

function Main({ children }: MainProps) {
  return (
    <Container
      maxWidth={'xl'}
      disableGutters
      sx={{ paddingLeft: 65, height: '100vh' }}
    >
      <Navbar />
      <Sidebar />
      {children}
    </Container>
  );
}

export default Main;
