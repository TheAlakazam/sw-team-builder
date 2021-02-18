import React from 'react';
import './App.css';
import {Container, Row} from 'reactstrap';
import Header from './components/Header';
import InstructionsPage from './components/InstructionsPage';
import BuildingsPage from './components/BuildingsPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Container fluid className="p-0">
      <Router>
        <Header/>
        <Row>
          <Switch>
            <Route path="/instructions">
              <InstructionsPage/>
            </Route>
            <Route path="/buildings">
              <BuildingsPage/>
            </Route>
          </Switch>
        </Row>
      </Router>
    </Container>
  );
}

export default App;
