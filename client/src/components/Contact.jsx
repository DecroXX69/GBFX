import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { RiTelegram2Line } from "react-icons/ri";
import './Contact.css';
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
    <div className="big-container">
     
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
                <a href="https://www.facebook.com/people/GB-Trade/61572568929119/" className="social-icon"><FaFacebookF /></a>
                <a href="https://www.instagram.com/gbtrade25" target='blank' className="social-icon"><FaInstagram /></a>
                <a href="https://t.me/gbtradechat" target='blank' className="social-icon"><RiTelegram2Line /></a>
                <a href="https://www.youtube.com/@gbtradeofficial" target='blank' className="social-icon"><FaYoutube /></a>
                <a href="https://x.com/GBTradeglobal?t=4M6ODj8a6FLO-NtDDfPtww&s=08" target='blank' className="social-icon"><FaTwitter /></a>
              </div>

              <div className="contact-details">
                <div className="detail-item contact-info-item phone">
                  <div className="icon-wrapper">
                    <RiTelegram2Line className="social-icon1" />
                  </div>
                  <div className="detail-text">
                    <p><a href="https://t.me/gbtradechat">Contact us on Telegram</a></p>
                  </div>
                </div>

                <div className="detail-item contact-info-item email">
                  <div className="icon-wrapper">
                    <img src={iconMail} alt="Mail Icon" className="location-icon" />
                  </div>
                  <div className="detail-text">
                  <a href="mailto:gbtrade25@gmail.com" >gbtrade25@gmail.com</a>

                    
                    
                  </div>
                </div>

                <div className="detail-item contact-info-item location">
                  <div className="icon-wrapper">
                    <img src={iconLocation} alt="Location Icon" className="location-icon" />
                  </div>
                  <div className="detail-text">
                    <p> Downtown Dubai</p>
                    <p> United Arab Emirates</p>
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

                <button type='submit' className='contact-submit-btn10'>Contact Us Now</button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      
      </div>
    </>
  );
};

export default Contact;
