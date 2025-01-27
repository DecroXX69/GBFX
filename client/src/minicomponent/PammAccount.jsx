import React, { useEffect } from "react";
import {
  ArrowRight,
  PieChart,
  Shield,
  Users,
  Bell,
  Globe,
  Terminal,
  CheckCircle,
  DollarSign,
  ExternalLink,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./PammAccount.css";
import Growth from "../assets/growth.png";

const PammLandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="container pamm-container">
      {/* Hero Section */}
      <section className="hero-section mb-5">
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <h1 className="display-4 fw-bold mb-4">
              Create your PAMM account today
            </h1>
            <p className="lead mb-4">
              Grow your wealth with our innovative Percentage Allocation Money
              Management solution tailored for investors and fund managers.
            </p>
            <button className="primary-btn">
              Sign up Now <ArrowRight className="ms-2" />
            </button>
          </div>
          <div className="col-lg-6 text-center" data-aos="fade-left">
            <div className="animate-float">
              <img
                src={Growth}
                alt="Trading Platform"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Advantages Section */}
      <section className="advantages-section mb-5">
        <h2
          className="text-center mb-5 fw-bold display-5"
          data-aos="fade-up"
        >
          Key Advantages of PAMM Accounts
        </h2>
        <div className="row g-4">
          {pammAdvantages.map((adv, index) => (
            <AdvantageCard
              key={index}
              icon={adv.icon}
              title={adv.title}
              description={adv.description}
            />
          ))}
        </div>
      </section>

      {/* Why Choose PAMM Section */}
      <section className="why-choose-pamm-section mb-5">
        <h2 className="text-center mb-5 fw-bold display-5" data-aos="fade-up">
          Why Choose PAMM Accounts?
        </h2>
        <div className="row g-4">
          {whyPamm.map((reason, index) => (
            <AdvantageCard
              key={index}
              icon={reason.icon}
              title={reason.title}
              description={reason.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

const AdvantageCard = ({ icon, title, description }) => (
  <div className="col-md-6 col-lg-4" data-aos="fade-up">
    <div className="feature-card card h-100 shadow-sm">
      <div className="card-body">
        <div className="icon-wrapper text-success mb-3">{icon}</div>
        <h5 className="card-title fw-bold mb-3">{title}</h5>
        <p className="card-text text-muted">{description}</p>
      </div>
    </div>
  </div>
);

const pammAdvantages = [
  {
    icon: <DollarSign size={24} />,
    title: "Transparent Profit Sharing",
    description:
      "Profits are distributed proportionally, ensuring fairness and transparency for all investors.",
  },
  {
    icon: <Users size={24} />,
    title: "Access to Expert Management",
    description:
      "Investors gain the benefit of professional fund managers handling their investments.",
  },
  {
    icon: <PieChart size={24} />,
    title: "Portfolio Diversification",
    description:
      "PAMM accounts allow diversification by pooling resources across multiple strategies.",
  },
  {
    icon: <Bell size={24} />,
    title: "Real-time Monitoring",
    description:
      "Both managers and investors can track performance metrics and activities instantly.",
  },
  {
    icon: <Globe size={24} />,
    title: "Global Investment Opportunities",
    description:
      "Connect with investors and managers worldwide, expanding your financial reach.",
  },
  {
    icon: <Shield size={24} />,
    title: "Risk Mitigation",
    description:
      "Advanced risk management strategies ensure investor funds are safeguarded effectively.",
  },
];

const whyPamm = [
  {
    icon: <Terminal size={24} />,
    title: "Advanced Trading Tools",
    description:
      "PAMM accounts provide state-of-the-art tools for traders to optimize their strategies.",
  },
  {
    icon: <CheckCircle size={24} />,
    title: "Ease of Use",
    description:
      "Simple account setup and management make it easy for both beginners and professionals.",
  },
  {
    icon: <ExternalLink size={24} />,
    title: "Customizable Strategies",
    description:
      "Managers have the freedom to employ flexible and innovative trading strategies.",
  },
  {
    icon: <PieChart size={24} />,
    title: "Performance Analytics",
    description:
      "Comprehensive analytics allow for tracking growth and making informed decisions.",
  },
  {
    icon: <Bell size={24} />,
    title: "Regular Notifications",
    description:
      "Stay updated with alerts on trades, deposits, and other activities in real time.",
  },
  {
    icon: <Globe size={24} />,
    title: "Worldwide Connectivity",
    description:
      "Seamlessly interact with investors and managers from any part of the globe.",
  },
];

export default PammLandingPage;
