import React, { memo, useRef } from "react";
import data from "../../../assets/data/testimonial.json";
import bgImg from "../../../assets/images/steps/bgImg.webp";
import { ArrowLeft, ArrowRight, UserCircle } from "phosphor-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import type { Swiper as SwiperInstance } from "swiper";

import "swiper/css";
import { MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";

interface TestimonialProps {
  isBg: string;
}

const TestimonialsDataArray = [
  {
    image: "",
    description:
      "I got my LLP registered through RegisterKaro. Really an amazing team to work along. Thanks a lot to Bhuvan, Sidharath, and Gaurav who were happy to help with anything. Special thanks to Bhuvan for his patience in correcting the LLP agreement multiple times without hesitation.",
    name: "Vijayendra Mudigal",
    review: 4.5,
    testimonialDate: {
      month: 3,
      date: 7,
      year: 2025
    },
    designation: "LLP Registration"
  },
  {
    image: "",
    description:
      "I got my LLP registered through RegisterKaro. Really an amazing team to work along. Thanks a lot to Bhuvan, Sidharath, and Gaurav who were happy to help with anything. Special thanks to Bhuvan for his patience in correcting the LLP agreement multiple times without hesitation.",
    name: "Vijayendra Mudigal",
    review: 4,
    designation: "Private Limited Company Registration",
    testimonialDate: {
      month: 3,
      date: 7,
      year: 2025
    }
  },
  {
    image: "",
    description:
      "I got my LLP registered through RegisterKaro. Really an amazing team to work along. Thanks a lot to Bhuvan, Sidharath, and Gaurav who were happy to help with anything. Special thanks to Bhuvan for his patience in correcting the LLP agreement multiple times without hesitation.",
    name: "Vijayendra Mudigal",
    review: 3,
    designation: "Trademark Registration",
    testimonialDate: {
      month: 3,
      date: 7,
      year: 2025
    }
  },
  {
    image: "",
    description:
      "I got my LLP registered through RegisterKaro. Really an amazing team to work along. Thanks a lot to Bhuvan, Sidharath, and Gaurav who were happy to help with anything. Special thanks to Bhuvan for his patience in correcting the LLP agreement multiple times without hesitation.",
    name: "Vijayendra Mudigal",
    review: 5,
    designation: "FSSAI Registration",
    testimonialDate: {
      month: 3,
      date: 7,
      year: 2025
    }
  },
];

const StarRating = ({ rating }: any) => {
  const totalStars = 5; // We are using a 5-star rating system
  const fullStars = Math.floor(rating); // Full stars based on the integer part of the rating
  const hasHalfStar = rating % 1 >= 0.5; // If the decimal part is >= 0.5, we need a half star
  const emptyStars = totalStars - Math.ceil(rating); // Empty stars based on the total stars minus the full and half stars

  const renderStar = (index: number) => {
    if (index < fullStars) {
      return (
        <StarComponent key={`full-${index}`} filled={true} />
      );
    } else if (index === fullStars && hasHalfStar) {
      return (
        <StarComponent key={`half-${index}`} filled={null} />
      );
    } else {
      return (
        <StarComponent key={`empty-${index}`} filled={false} />
      );
    }
  };

  return (
    <div className="star-rating-container">
      {Array.from({ length: totalStars }).map((_, index) => renderStar(index))}
    </div>
  );
};

const StarComponent = ({ filled }: any) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      {filled === true ? (
        <path
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          fill="#FFD700"
          stroke="#FFD700"
          strokeWidth="1"
        />
      ) : filled === false ? (
        <path
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          fill="none"
          stroke="#FFD700"
          strokeWidth="1"
        />
      ) : (
        // Half star case
        <path
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          fill="url(#halfStarFill)"
          stroke="#FFD700"
          strokeWidth="1"
        />
      )}
      <defs>
        <linearGradient id="halfStarFill" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="transparent" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const TestimonialBlogComponent = ({ image, description, name, review, testimonialDate, designation }: any) => {



  return (
    <MDBCard className="testimonial-card">
      <MDBCardBody className="testimonial-card-body">
        <div className="testimonial-card-content">
          <div className="testimonial-header-part">
            <div className="testimonial-user-avatar">
              <UserCircle size={50} weight="regular" className="testimonial-avatar" />
              <span className="testimonial-user">
                <h4 className="testimonial-user-name-h4">{name}</h4>
                <p className="testimonial-user-name-p">-{designation}</p>
              </span>
            </div>
            <MDBCardImage
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              position="top"
              alt="google_logo"
              className="google-logo-image"
              draggable={false}
            />
          </div>
          <span className="testimonial-description">"{description}"</span>
          <div className="testimonial-user-detail">
            <div className="star-rating-container">
              <StarRating rating={review} />
              <p className="star-rating-para">({review} out of 5)</p>
            </div>

            <div className="testimonial-user-degistnation">

            </div>
          </div>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

const Testimonial: React.FC<TestimonialProps> = ({ isBg }) => {
  const sliderRef = useRef<SwiperInstance | null>(null);

  const handleMove = (direction: string) => {
    if (direction === "left") {
      sliderRef.current?.swiper.slidePrev();
    } else {
      sliderRef.current?.swiper.slideNext();
    }
  };

  const { testimonial } = data;
  const { description, review } = testimonial;

  const bgImage = {
    backgroundImage: `url(${bgImg.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "5500",
    width: "8000",
  };

  const marker = "Don't";
  const markerIndex = description.indexOf(marker);


  const firstPart = markerIndex !== -1 ? description.substring(0, markerIndex) : description;
  const secondPart = markerIndex !== -1 ? description.substring(markerIndex) : "";


  return (
    <section style={bgImage} className="testimonial-section">
      <div className="main-testimonial-plcr">
        <div className="section-testimonial-title-left">
          <p className="titleFirm">RegisterKaro</p>
          <h2 className="titleClient">What Our Clients Say</h2>
          <p className="titleDescription">
            {firstPart}
            {secondPart && (<><br /><br/>{secondPart}</>)}
          </p>
          <div className="title-arrow-left">
            <span onClick={() => handleMove("left")}>
              <ArrowLeft />
            </span>
            <span onClick={() => handleMove("right")}>
              <ArrowRight />
            </span>
          </div>
        </div>
        <div className="section-testimonial-title-right">
          <Swiper
            ref={sliderRef}
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={false}
          >
            {TestimonialsDataArray.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialBlogComponent {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="absolute-color-gradient"></div>
      <div className="absolute-color-red-gradient"></div>
    </section>
  );
};

export default memo(Testimonial);
