import React from 'react';
import './App.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import SideNavigation from './Components/Pages/SideNavigation/SideNavigation'


const App = () => (
    <Container>
      <Row>
        <Col sm={4} >
          <aside className="sideNavigation">
          <SideNavigation />
          </aside>
        </Col>
        <Col sm={8}>
          <button>Click Here!</button>
        </Col>
      </Row>
    </Container>
  )

export default App;
