
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa';
import './Contact.css';
import iconPhone from '../assets/1.png';
import iconMail from '../assets/2.png';
import iconLocation from '../assets/3.png';

const Contact = () => {
  const [inView, setInView] = useState({
    phone: false,
    email: false,
    location: false,
  });

  const observerOptions = {
    root: null,
    threshold: 0.5, // Trigger when 50% of the element is visible
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView((prevState) => ({
            ...prevState,
            [entry.target.className]: true,
          }));
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.contact-info-item');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <div className="mini-hero">
        <Container>
          <div className="breadcrumb-wrapper fade-in">
            <span className="home-link">Home</span>
            <span className="separator"> / </span>
            <span className="current-page">Contact Us</span>
          </div>
          <h1 className="hero-title fade-in">Contact Us</h1>
        </Container>
      </div>

      <Container className="contact-section">
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="contact-info">
              <h2 className="section-title1">
                Let's <span className="highlight">Get In Touch</span>
                <br />With Us
              </h2>

              <div className="social-links">
                <a href="#" className="social-icon"><FaFacebookF /></a>
                <a href="#" className="social-icon"><FaInstagram /></a>
                <a href="#" className="social-icon"><FaLinkedinIn /></a>
                <a href="#" className="social-icon"><FaYoutube /></a>
                <a href="#" className="social-icon"><FaTwitter /></a>
              </div>

              <div className="contact-details">
                <div className="detail-item contact-info-item phone">
                  <div className="icon-wrapper">
                    <img src={iconPhone} alt="Phone Icon" className="location-icon" />
                  </div>
                  <div className="detail-text">
                    <p>0917749254</p>
                    <p>0983888611</p>
                  </div>
                </div>

                <div className="detail-item contact-info-item email">
                  <div className="icon-wrapper">
                    <img src={iconMail} alt="Mail Icon" className="location-icon" />
                  </div>
                  <div className="detail-text">
                    <p>Bitrader@gmail.com</p>
                    <p>hello@gmail.com</p>
                  </div>
                </div>

                <div className="detail-item contact-info-item location">
                  <div className="icon-wrapper">
                    <img src={iconLocation} alt="Location Icon" className="location-icon" />
                  </div>
                  <div className="detail-text">
                    <p>88 Sheridan Street</p>
                    <p>534 Victoria Trail</p>
                  </div>
                </div>

              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className={`contact-form fade-in`}>
              <Form>
                <Form.Group className="mb-4">
                  <Form.Label>Name :</Form.Label>
                  <Form.Control type="text" placeholder="Full Name" />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Email :</Form.Label>
                  <Form.Control type="email" placeholder="Email here" />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Message :</Form.Label>
                  <Form.Control as="textarea" rows={6} placeholder="Enter Your Message" />
                </Form.Group>

                <Button type="submit" className="contact-submit-btn">
                  Contact Us Now
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;

