import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import './Signup.css';
import coinImage from '../assets/coin-1.png';
import backImage from '../assets/shape-16.png';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+91',
    phone: '',
    username: '',
    password: '',
    dateOfBirth: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="signup-section">
      <div className="container-fluid p-0">
        <div className="row g-0 align-items-center">
          {/* Signup Form */}
          <div className="col-lg-6 p-4 p-lg-5 signup-form-container">
            <h3
              className="mb-4 fw-normal"
              style={{
                fontFamily: 'var(--title-font)',
                fontSize: '44px',
                textAlign: 'left',
                fontWeight: 'bold',
              }}
            >
              Create Account
            </h3>
            <Form onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      className="form-input"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      className="form-input"
                    />
                  </Form.Group>
                </Col>
              </Row>
  
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className="form-input"
                />
              </Form.Group>
  
              <Row className="mb-3">
                <Col md={2}>
                  <Form.Select className="form-input">
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                  </Form.Select>
                </Col>
                <Col md={10}>
                  <Form.Control
                    type="tel"
                    placeholder="Phone Number"
                    className="form-input"
                  />
                </Col>
              </Row>
  
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Username"
                  className="form-input"
                />
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="form-input"
                />
              </Form.Group>
  
              <Form.Group className="mb-4">
                <Form.Control
                  type="date"
                  placeholder="Date of Birth"
                  className="form-input"
                />
              </Form.Group>
  
              <Button type="submit" className="w-100 signup-btn">
                Sign Up
              </Button>
            </Form>
          </div>
  
          {/* Text Content */}
          <div className="col-lg-6 text-container position-relative">
            <div className="text-content p-4 p-lg-5">
              <h2
                className="mb-3"
                style={{
                  color: 'var(--title-color)',
                  fontSize: '60px',
                  textAlign: 'left',
                  fontFamily: 'var(--title-font)',
                  fontWeight: 'bolder',
                }}
              >
                Total Immersion in
                <br />
                <span className="highlight">Forex Trading</span>
              </h2>
              <p
                className="text-muted"
                style={{
                  fontSize: '20px',
                  fontFamily: 'var(--text-font)',
                  textAlign: 'left',
                }}
              >
                Our trading platforms offer you a world-class trading experience
                with numerous features and tools
              </p>
              <div className="mt-4">
                <button
                  className="btn btn-success me-3"
                  style={{ fontFamily: 'var(--title-font)' }}
                >
                  Start Trading Now
                </button>
                <button
                  className="btn btn-outline-dark"
                  style={{ fontFamily: 'Ubuntu, sans-serif' }}
                >
                  Try Demo Trading
                </button>
              </div>
            </div>
  
            {/* Floating Elements */}
            <div className="floating-elements">
              <div className="shape shape-13"></div>
              <div className="shape shape-14"></div>
              <div className="shape shape-15"></div>
              {/* New floating element */}
              {/* <div
                className="shape shape-16"
                style={{
                  backgroundImage: backImage,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  width: '200px',
                  height: '200px',
                  position: 'absolute',
                  bottom: '-50px',
                  right: '-50px',
                }}
              ></div> */}
            </div>
          </div>
        </div>
                <br />
                <br />
        {/* New Container */}
        <div
  className="inner-container"
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundImage: 'url(../assets/shape-16.png)',
    backgroundColor: '#28a745', // Matches the green background
    borderRadius: '8px',
    padding: '20px 40px',
    position: 'relative',
    overflow: 'hidden',
  }}
>
  {/* Background pattern */}
  <div
    className= "pattern-bg"
    style={{
      backgroundImage: {backImage},
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      opacity: '0.9', // For subtle overlay
    }}
  ></div>

  {/* Coin Image */}
  <div
    className="icon-box"
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      borderRadius: '50%',
      width: '180px',
      height: '180px',
      marginRight: '20px',
      flexShrink: 0,
    }}
  >
    <img
      src={coinImage}
      alt="coin"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'contain',
      }}
    />
  </div>

  {/* Text Content */}
  <div style={{ flex: 1, color: '#fff' }}>
    <h2
      style={{
        fontSize: '42px',
        fontFamily: 'var(--title-font)',
        fontWeight: 'bold',
        lineHeight: '1.5',
        textAlign: 'left',
        padding: '18px',
        margin: 0,
      }}
    >
      <span style={{ fontWeight: 'bold', color:'black' }}>Trade for</span> less,{' '}
      <span style={{ fontWeight: 'bold' }}>with</span> low prices <br />
      <span style={{ fontWeight: 'bold', color:'black' }}>and</span> transparent fees
    </h2>
  </div>

  {/* Button */}
  <div className="btn-box">
    <a
      className="theme-btn btn-one"
      href="/index-3"
      style={{
        display: 'inline-block',
        backgroundColor: '#fff',
        color: 'var(--theme-color)',
        padding: '10px 30px',
        borderRadius: '8px',
        fontSize: '24px',
        fontWeight: 'normal',
        textDecoration: 'none',
        
      }}
    >
      Try Demo Trading
    </a>
  </div>
        </div>

      </div>
    </section>
  );
  
  
};

export default SignupForm;


