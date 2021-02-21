import React, { Component } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

const ContactMe = () => (
    <div className="contactMeForm">
        <h1>Contact Me</h1>
        <Form>
            <Form.Group as={Row} controlId="formHorizontalName">
                <Form.Label column sm={2}>
                    Name
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" placeholder="Name" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    Email
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="email" placeholder="Email" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalMessage">
                <Form.Label column sm={2}>
                    Message
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" placeholder="Leave a message here" />
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Submit</Button>
                </Col>
            </Form.Group>
        </Form>
    </div>
)

export default ContactMe