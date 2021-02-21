import React from 'react';
import './App.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import SideNavigation from './Components/Pages/SideNavigation/SideNavigation'
import ContactMe from './Components/Pages/ContactMe/ContactMe'

const App = () => (
  <Container>
    <Row>
      <Col lg={4} >
        <aside className="sideNavigation">
          <SideNavigation />
        </aside>
      </Col>
      <Col lg={8} style={{ backgroundColor: "blue" }}>
        <div>
          <ContactMe />
        </div>
      </Col>
    </Row>
  </Container>
)

export default App;
