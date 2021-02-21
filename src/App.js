import React from 'react';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import Summary from './components/Summary';
import Detailed from './components/Detailed';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Container maxWidth="md">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Summary} />
          <Route path="/detailed" component={Detailed} />
          <Route path="*"><Redirect to="/" /></Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
