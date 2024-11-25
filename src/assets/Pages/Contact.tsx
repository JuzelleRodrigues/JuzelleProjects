import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contact.css';

const Contact: React.FC = () => (
  <Container fluid className="contact-section">
    <Row className="justify-content-center align-items-center gap-5">
      <Col md={5} className="contact-info">
        <h1 className="title">Let’s Talk</h1>
        <p className="description">
          Have some big idea or brand to develop and need help?
          <br />
          Reach out, I’d love to hear about your project and provide help!
        </p>
        
        <div className="info-group">
          <h2>Email</h2>
          <p>xxxx-xxxx-xxxx10@gmail.com</p>
        </div>
        
        <div className="info-group">
          <h2>Socials</h2>
          <p className="social-link">Instagram</p>
          <p className="social-link">LinkedIn</p>
          <p className="social-link">Behance</p>
        </div>
      </Col>

      <Col md={5}>
        <Form className="contact-form">
          <Form.Group className="mb-4">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>What service are you interested in</Form.Label>
            <Form.Select>
              <option>Select project type</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Budget</Form.Label>
            <Form.Select>
              <option>Select project budget</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
          </Form.Group>

          <Button variant="dark" type="submit" className="submit-button">
            SUBMIT
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
);
export default Contact;
