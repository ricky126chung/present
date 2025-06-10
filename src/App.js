
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React, { useMemo } from 'react';
import Home from './pages/Home';
function App() {
  
  
    const routeList = useMemo(() => [
      {
        path: "/present",
        component: <Home />,
      }
    ], []);
    
    
    return (
      <BrowserRouter>
        <Routes>
          {routeList.map((route) => (
            <Route 
              key={route.path} 
              path={route.path} 
              element={route.component} 
            />
          ))}
        </Routes>
      </BrowserRouter>
    );
}

export default App;
