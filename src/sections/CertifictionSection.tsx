import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";
import { Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../styles/CertificationSection.css"; 
import { motion } from "framer-motion"; // Import motion for animations
import "../styles/Global.css"


const certifications = [
  {
    title: "Information Storage and Management",
    provider: "Dell Technologies",
    date: "Issued: Jan 2021",
    credential: "https://www.credly.com/badges/23b11a29-adcc-4fc2-814f-b76de53cad83/public_url",
    image: "./Dell.png",
  },
  {
    title: "Associate - Data Science Version 2.0",
    provider: "Dell Technologies",
    date: "Issued: Jan 2021",
    credential: "https://www.credly.com/badges/1db03425-ff13-4c57-bba2-433e6c7a50b8/linked_in_profile",
    image: "./Dell.png",
  },
  {
    title: "Microsoft Azure Fundamentals",
    provider: "Microsoft",
    date: "Issued: Jul 2022",
    credential: "https://www.credly.com/badges/8c72dbb3-03f8-43e8-8743-b085cf4fce28/linked_in_profile",
    image: "./Azure.png",
  },
  {
    title: "Associate - PowerEdge Version 2.0",
    provider: "Dell Technologies",
    date: "Issued: Jan 2023",
    credential: "https://www.credly.com/badges/904f56cb-def2-4662-9f43-f2b26e3c6457/linked_in_profile",
    image: "./Dell.png",
  },
  {
    title: "Specialist - Cloud Architect, Cloud Infrastructure V3",
    provider: "Dell Technologies",
    date: "Issued: Jan 2023",
    credential: "https://www.credly.com/badges/24038d79-d900-4940-bc9e-5855714faae5/linked_in_profile",
    image: "./Dell.png",
  },
  {
    title: "Machine Learning Specialist",
    provider: "DeepLearning.AI",
    date: "Issued: May 2024",
    credential: "https://www.coursera.org/account/accomplishments/specialization/SJP6BEJUQLHE",
    image: "./deeplearningai.png",
  },
];

interface CertificationProps {
  title: string;
  provider: string;
  date: string;
  credential: string;
  image: string;
}

const CertificationCard: React.FC<CertificationProps> = ({ 
  title, provider, date, credential, image 
}) => (
  <div className="certification-card">
    <img src={image} alt={title} className="cert-image" />
    <h3 className="cert-title">{title}</h3>
    <p className="cert-provider">{provider}</p>
    <p className="cert-date">{date}</p>
    <a href={credential} target="_blank" rel="noopener noreferrer" className="cert-button">
      View Certificate
    </a>
  </div>
);

const CertificationSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    updateSize(); // Call once at the start
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section id= "certifications" className="cert-section golden-background">
      <div className="golden-stars">
        <span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span>
      </div>
      <Typography
        variant="h2"
        sx={{
          color: "text.primary",
          fontWeight: "bold",
          fontFamily: "'Orbitron', sans-serif", // Match portfolio font
          fontSize: { xs: "2rem", md: "3.5rem" }, // Responsive font sizes
          mb: 6,
        }}
        component={motion.div}
        initial={{ opacity: 0, y: -20 }} // Start hidden and move up
        whileInView={{ opacity: 1, y: 0 }} // Fade in when scrolled into view
        viewport={{ once: false }} // Allows animation to repeat on scroll
        transition={{ duration: 0.6 }}
      >
        Certifications
      </Typography>

      <div className="cert-carousel-container">
        <Swiper
          effect={isMobile ? "slide" : "coverflow"} // ✅ Coverflow only on big screens
          grabCursor={true}
          centeredSlides={!isMobile} // ✅ Do not center slides on small screens
          slidesPerView={isMobile ? 1 : 3} // ✅ 1 slide on mobile, 3 on big screens
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
          {...(!isMobile && { // ✅ Apply effect only if NOT mobile
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }
          })}
        >
          {certifications.map((cert, index) => (
            <SwiperSlide key={index}>
              <CertificationCard {...cert} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ❗❗ Explicitly disable rotation for small screens */}
      <style>{`
        @media (max-width: 768px) {
          .swiper-slide {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CertificationSection;