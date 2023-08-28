import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import UserMenu from '@components/UserMenu';
import { useUserStore } from '@store/userStore';

function Navbar() {
  const { first, last } = useUserStore();
  return (
    <AppBar>
      <Toolbar>
        <Typography variant='subtitle1'>{`Bienvenido, ${first} ${last}`}</Typography>
        <Box>
          <UserMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
