import React from 'react';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from '@pages/Login';

describe('Login', () => {
  test('Should render Login Page', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    expect(screen.getByText('Bienvenido')).toBeInTheDocument();
  });
});
