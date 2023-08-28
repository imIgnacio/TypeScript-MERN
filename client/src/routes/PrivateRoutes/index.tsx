import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUserStore } from '@store/userStore';
import Main from '@layouts/Main';

function PrivateRoutes() {
  const { first, removeUser } = useUserStore();

  return window.localStorage.getItem('jwt') && first !== '' ? (
    <Main>
      <Outlet />
    </Main>
  ) : (
    <>
      {removeUser()}
      <Navigate to='/login' />
    </>
  );
}

export default PrivateRoutes;
