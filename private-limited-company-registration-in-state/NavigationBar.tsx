import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { CaretLeft, CaretRight } from "phosphor-react";

// Import Swiper's CSS
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from "next/router";

export default function NavigationBar(props: any) {
  
  
  const router = useRouter();
  const toc = [
    { href: "#what-is-private-limited-company", title: "What is Private Limited Company?" },
    { href: "#eligibility-criteria", title: "Eligibility Criteria" },
    { href: "#benefits-of-private-company-registration", title: "Benefits of Private Company Registration" },
    { href: "#categories", title: "Key Features of a Private Limited Company?" },
    { href: "#documents-required-for-registration", title: "Documents Required for Registration" },
    { href: "#step-by-step-procedure", title: "Step-by-Step Procedure" },
    { href: "#cost-and-penalties", title: "Cost and Penalties" },
    { href: "#why-choose-register-karo", title: "Why Choose RegisterKaro" },
    { href: "#company-registration-authorisation", title: "Company Registration Authorization" },
    { href: "#challenges-and-solutions", title: "Challenges & Solutions" },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  const [activeIndex, setActiveIndex] = useState(0);



  return (
    <div className="toc-container">
      <div className="toc-swiper-wrapper">
        {/* Navigation icons instead of buttons */}
        <div className="nav-icon prev-button">
          <CaretLeft size={24} weight="bold" />
        </div>

        <Swiper
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={20} // minimal space for a tighter layout
          navigation={{
            nextEl: ".next-button",
            prevEl: ".prev-button",
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >
          {props.navlinks.map((item:{href:string, title:string}, index:number) => (
            <SwiperSlide key={index}>
              <a href={item.href}>
              <div
                className={"toc-card"}
              >
                <p className="toc-card-item">
                  {item.title}
                </p>
              </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="nav-icon next-button">
          <CaretRight size={24} weight="bold" />
        </div>
      </div>
    </div>
  );
}
