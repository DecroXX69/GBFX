import PAMMLanding from "../minicomponent/PammLanding";
import PammLandingPage from "../minicomponent/PammAccount";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import FAQ from "./FAQ";
const Pamm = () => {
  return (
    <div className="min-h-screen flex flex-col">
     
        <main className="flex-grow">
            <div className="mini-hero">
                       
                          <Container>
                            <div className="breadcrumb-wrapper fade-in">
                              <span className="home-link">Home</span>
                              <span className="separator"> / </span>
                              <span className="current-page">PAMM Account</span>
                            </div>
                            <h1 className="hero-title fade-in">PAMM Account</h1>
                          </Container>
                        </div>
        <PAMMLanding />
        <PammLandingPage />
        <FAQ />

        </main>
      
    </div>
  );
}

export default Pamm;
