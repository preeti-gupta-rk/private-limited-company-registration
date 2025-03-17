import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import docImg from "../../../public/assets/images/doc-icon.png"
import "swiper/css/navigation";

import Image from "next/image";

interface StepsToRegisterProps{
  stepsContent:{
    para:string;
    steps:string[];
  }
}

export default function Steps(props:StepsToRegisterProps) {
  const {para, steps} = props.stepsContent;
  const Steps = [
    "Obtain Digital Signature Certificates (DSC)",
    "Apply for Director Identification Number",
    " Reserve a Unique Company Name",
    "Draft MoA and AoA",
    "File Incorporation Documents with MCA",
    "Payment of Fees",
    "Verification and Approval",
    "Apply for PAN and TAN",
    "Open a Bank Account",
  ];
  return (
    <div className="steps-container-div" id="step-by-step-procedure">
      <h2 className="heading-steps">
        <span>Step by Step Procedure</span> to Register a Private Limited Company
      </h2>
      <p>
        {para}
      </p>
      <div className="swiper-wrapper">
        <button className="nav-button prev-steps-button">←</button>
        <button className="nav-button next-steps-button">→</button>

        <Swiper
          // Swiper props
          modules={[Navigation]} // Include the Navigation module
          slidesPerView={4} // Display 4 steps at a time
          spaceBetween={20} // Space between each card
          navigation={{
            nextEl: ".next-steps-button",
            prevEl: ".prev-steps-button",
          }}
          breakpoints={{
          
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
           
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
           
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
           
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >
          {steps.map((step, index) => (
            <SwiperSlide key={index}>
              
              <div className="step-card">
              <div className="image-container">
                <Image
                  src={docImg}
                  alt="doc-icon"
                  height={50}
                  width={50}
                  className="doc-image"
                />
              </div>
                <p className="bold-step">Step:{index+1}</p>
                <p className="step">{step}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
