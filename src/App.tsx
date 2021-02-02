import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import MainScreen from './pages/MainScreen';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <HomeScreen />
        </Route>
        <Route path='/main-screen'>
          <MainScreen />
        </Route>
        <Route path='/'>404 page not found</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
