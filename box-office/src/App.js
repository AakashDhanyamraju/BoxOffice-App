import React from 'react';
import { Switch, Route } from 'react-router-dom';
// eslint-disable-next-line
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home'
import Starred from './pages/Starred';
import Show from './pages/Show';


const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
    orange: '#E07C24',
    pink: '#FF3C83',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Switch>
      <Route exact path="/">
         <Home />
      </Route>

      <Route exact path="/starred">
        <Starred />
      </Route>

      <Route exact path='/show/:id'>
        <Show />
      </Route>

        <Route>This is 404 page</Route>
      </Switch>

      </ThemeProvider>

  );
}

export default App;
