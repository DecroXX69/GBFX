// import { left } from '@popperjs/core';
// import React, { useState } from 'react';
// import { Form, Row, Col, Button, InputGroup } from 'react-bootstrap';
// import { FaUbuntu } from 'react-icons/fa';
// import '../../src/App.css';
// import './Signup.css';

// const SignupForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     countryCode: '+91',
//     phone: '',
//     username: '',
//     password: '',
//     dateOfBirth: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//   };

//   return (
//     <div className="container-fluid p-0">
//       <div className="row g-0">
//         {/* Left Side - Signup Form */}
//         <div className="col-md-6 p-4 p-lg-5">
//           <h2 className="mb-4 fw-normal" style={{ fontSize: '24px' }}>Create Account</h2>
          
//           <Form onSubmit={handleSubmit}>
//             <Row className="mb-3">
//               <Col md={6}>
//                 <Form.Group>
//                   <Form.Control
//                     type="text"
//                     placeholder="First Name"
//                     className="form-input"
//                   />
//                 </Form.Group>
//               </Col>
//               <Col md={6}>
//                 <Form.Group>
//                   <Form.Control
//                     type="text"
//                     placeholder="Last Name"
//                     className="form-input"
//                   />
//                 </Form.Group>
//               </Col>
//             </Row>

//             <Form.Group className="mb-3">
//               <Form.Control
//                 type="email"
//                 placeholder="Email"
//                 className="form-input"
//               />
//             </Form.Group>

//             <Row className="mb-3">
//               <Col md={4}>
//                 <Form.Select className="form-input">
//                   <option value="+91">+91</option>
//                   <option value="+1">+1</option>
//                   <option value="+44">+44</option>
//                 </Form.Select>
//               </Col>
//               <Col md={8}>
//                 <Form.Control
//                   type="tel"
//                   placeholder="Phone Number"
//                   className="form-input"
//                 />
//               </Col>
//             </Row>

//             <Form.Group className="mb-3">
//               <Form.Control
//                 type="text"
//                 placeholder="Username"
//                 className="form-input"
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Control
//                 type="password"
//                 placeholder="Password"
//                 className="form-input"
//               />
//             </Form.Group>

//             <Form.Group className="mb-4">
//               <Form.Control
//                 type="date"
//                 placeholder="Date of Birth"
//                 className="form-input"
//               />
//             </Form.Group>

//             <Button 
//               type="submit" 
//               className="w-100 signup-btn"
//             >
//               Sign Up
//             </Button>
//           </Form>
//         </div>

//         {/* Right Side - Content */}
//         <div className="col-md-6 d-flex align-items-center bg-light position-relative">
//           <div className="p-4 p-lg-5">
//             <h2 className="mb-3" style={{ color: 'var(--title-color)',fontSize: '60px' , textAlign: left, fontFamily:'var(--title-font)', fontWeight:'bold'}}>
//               Total Immersion in
//               <br />
//               <span className="text-success" style={{color: '#22823A'}}>Forex Trading</span>
//             </h2>
//             <p className="text-muted" style={{fontSize:'20px', fontFamily:'var(--text-font)', textAlign:'left'}}>
//               Our trading platforms offer you a world-class trading experience
//               with numerous features and tools
//             </p>
//             <div className="mt-4">
//               <button className="btn btn-success me-3 " style= {{fontFamily : 'var(--title-font)'}}>Start Trading Now</button>
//               <button className="btn btn-outline-dark" style= {{fontFamily : 'Ubuntu, sans-serif'}}>Try Demo Trading</button>
//             </div>
//           </div>
//           {/* Placeholder for floating elements */}
//           <div className="floating-elements">
//             {/* These will be added via CSS */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupForm;









import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { FaUbuntu } from 'react-icons/fa';
import './Signup.css';

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
    <section className="banner">
      <div className="shape-elements">
        {/* Add your shape elements here */}
      </div>
      <div className='container'>
      <div className="container-fluid p-0">
        <div className="row g-0">
          {/* Left Side - Signup Form */}
          <div className="col-md-6 p-4 p-lg-5">
            <h2 className="mb-4 fw-normal" style={{ fontSize: '24px' }}>Create Account</h2>
            
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

              <Button 
                type="submit" 
                className="w-100 signup-btn"
              >
                Sign Up
              </Button>
            </Form>
          </div>

          {/* Right Side - Text Content */}
          <div className="col-md-6 d-flex align-items-center bg-light position-relative">
            <div className="p-4 p-lg-5">
              <h2 className="mb-3" style={{ color: 'var(--title-color)', fontSize: '60px', textAlign: 'left', fontFamily: 'var(--title-font)', fontWeight: 'bold' }}>
                Total Immersion in
                <br />
                <span className="text-success" style={{ color: '#22823A' }}>Forex Trading</span>
              </h2>
              <p className="text-muted" style={{ fontSize: '20px', fontFamily: 'var(--text-font)', textAlign: 'left' }}>
                Our trading platforms offer you a world-class trading experience
                with numerous features and tools
              </p>
              <div className="mt-4">
                <button className="btn btn-success me-3" style={{ fontFamily: 'var(--title-font)' }}>Start Trading Now</button>
                <button className="btn btn-outline-dark" style={{ fontFamily: 'Ubuntu, sans-serif' }}>Try Demo Trading</button>
              </div>
            </div>
            {/* Placeholder for floating elements */}
            <div className="floating-elements">
              {/* These will be added via CSS */}
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default SignupForm;




