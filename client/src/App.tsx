import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoutes from '@routes/PrivateRoutes';
import Login from '@pages/Login';
import routes from './routes';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route element={<PrivateRoutes />}>
          {routes.map((element, index) => (
            <Route
              key={index}
              path={element.path}
              element={React.createElement(element.component)}
            />
          ))}
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
