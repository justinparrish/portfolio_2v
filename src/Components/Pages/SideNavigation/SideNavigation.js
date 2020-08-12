import React, { Component } from 'react';
import { Nav } from 'react-bootstrap'

const SideNavigation = () => (
    <Nav defaultActiveKey="/home" className="flex-column">
  <Nav.Link ><span className="navLinkText">Home</span></Nav.Link>
  <Nav.Link ><span className="navLinkText">About</span></Nav.Link>
  <Nav.Link ><span className="navLinkText">Experience</span></Nav.Link>
  <Nav.Link ><span className="navLinkText">Work</span></Nav.Link>
  <Nav.Link ><span className="navLinkText">Contact</span></Nav.Link>
</Nav>
)

export default SideNavigation