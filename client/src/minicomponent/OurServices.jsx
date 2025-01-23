import React from "react";
import "./OurServices.css";

const OurServices = () => {
  return (
    <div className="case1-section-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <div className="case-header-area heading2 text-center">
              <img src="assets/img/elements/star2.png" alt="" className="star2 keyframe5" />
              <img src="assets/img/elements/star2.png" alt="" className="star3 keyframe5" />
              <h2 className="text-anime-style-3">Our Services</h2>
              <p data-aos="fade-up" data-aos-duration="1000">
                At Tecmetaverse, we provide a comprehensive range of digital marketing and software solutions designed to meet your unique business needs. Our expertise spans across a variety of industries, ensuring tailored strategies that drive growth and efficiency. <br className="d-md-block d-none" /> In addition, we specialize in cutting-edge Blockchain and NFT (Non-Fungible Token) solutions. Whether you’re looking to integrate blockchain technology into your business operations or explore the potential of NFTs, Tecmetaverse can guide you through every step of the process. We develop secure, decentralized applications (DApps), implement smart contracts, and help businesses leverage the power of blockchain for transparency and efficiency.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12" data-aos="zoom-out" data-aos-duration="1200">
            <div className="cs_case_study_1_list">
              {services.map((service, index) => (
                <div
                  className={`cs_case_study cs_style_1 cs_hover_active ${index === 0 ? "active" : ""}`}
                  data-aos="fade-up"
                  data-aos-duration={`${800 + index * 100}`}
                  key={index}
                >
                  <a
                    href="case-single.html"
                    className={`cs_case_study_thumb cs_bg_filed ${service.thumbClass}`}
                    data-src={service.imgSrc}
                  ></a>
                  <div className="content-area1">
                    <a href="case-single.html">{service.title}</a>
                  </div>
                  <div className="content-area">
                    <a href="case-single.html">{service.title}</a>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const services = [
  {
    title: "Website Design & Development",
    description:
      "We understand the critical role that a well-designed and user-friendly website plays in shaping your online presence driving.",
    imgSrc: "https://seoc-html-v2.vercel.app/assets/img/all-images/case-img1.png",
    thumbClass: "cs_case_study_thumb1",
  },
  {
    title: "SEO",
    description:
      "We understand the critical role that a well-designed and user-friendly website plays in shaping your online presence driving.",
    imgSrc: "https://seoc-html-v2.vercel.app/assets/img/all-images/case-img2.png",
    thumbClass: "cs_case_study_thumb2",
  },
  {
    title: "PPC Advertising",
    description:
      "We understand the critical role that a well-designed and user-friendly website plays in shaping your online presence driving.",
    imgSrc: "https://seoc-html-v2.vercel.app/assets/img/all-images/case-img3.png",
    thumbClass: "cs_case_study_thumb3",
  },
  {
    title: "Social Media Marketing",
    description:
      "We understand the critical role that a well-designed and user-friendly website plays in shaping your online presence driving.",
    imgSrc: "https://seoc-html-v2.vercel.app/assets/img/all-images/case-img4.png",
    thumbClass: "cs_case_study_thumb4",
  },
  {
    title: "Graphics Designing",
    description:
      "We understand the critical role that a well-designed and user-friendly website plays in shaping your online presence driving.",
    imgSrc: "https://seoc-html-v2.vercel.app/assets/img/all-images/case-img5.png",
    thumbClass: "cs_case_study_thumb5",
  },
  {
    title: "Email Marketing",
    description:
      "We understand the critical role that a well-designed and user-friendly website plays in shaping your online presence driving.",
    imgSrc: "https://seoc-html-v2.vercel.app/assets/img/all-images/case-img6.png",
    thumbClass: "cs_case_study_thumb6",
  },
  {
    title: "Mobile App Development",
    description:
      "We understand the critical role that a well-designed and user-friendly website plays in shaping your online presence driving.",
    imgSrc: "https://seoc-html-v2.vercel.app/assets/img/all-images/case-img7.png",
    thumbClass: "cs_case_study_thumb7",
  },
  {
    title: "Branding and Promotion",
    description:
      "We understand the critical role that a well-designed and user-friendly website plays in shaping your online presence driving.",
    imgSrc: "https://seoc-html-v2.vercel.app/assets/img/all-images/case-img8.png",
    thumbClass: "cs_case_study_thumb8",
  },
];

export default OurServices;