import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./CertificationSection.css"; // Ensure the correct path

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    provider: "Amazon Web Services",
    date: "Issued: Dec 2023",
    credential: "https://www.credly.com/",
    image: "/aws-certification.png", // Update with actual path
  },
  {
    title: "Google Cloud Associate Engineer",
    provider: "Google Cloud",
    date: "Issued: Jul 2023",
    credential: "https://www.credly.com/",
    image: "/gcp-certification.png", // Update with actual path
  },
  {
    title: "Microsoft Azure Fundamentals",
    provider: "Microsoft",
    date: "Issued: May 2023",
    credential: "https://www.credly.com/",
    image: "/azure-certification.png", // Update with actual path
  },
  {
    title: "Microsoft Azure Fundamentals",
    provider: "Microsoft",
    date: "Issued: May 2023",
    credential: "https://www.credly.com/",
    image: "/azure-certification.png", // Update with actual path
  },
];

const CertificationCard = ({ title, provider, date, credential, image }: any) => (
  <div className="certification-card">
    <img src={image} alt={title} className="cert-image" />
    <h3 className="cert-title">{title}</h3>
    <p className="cert-provider">{provider}</p>
    <p className="cert-date">{date}</p>
    <a href={credential} target="_blank" rel="noopener noreferrer" className="cert-button">
      View Credential
    </a>
  </div>
);

const CertificationSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="cert-section">
      <h2 className="cert-heading">Certifications</h2>

      <div className="cert-carousel-container">
        <Swiper
          effect={isMobile ? "" : "coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={isMobile ? 1 : 3}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {certifications.map((cert, index) => (
            <SwiperSlide key={index}>
              <CertificationCard {...cert} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CertificationSection;