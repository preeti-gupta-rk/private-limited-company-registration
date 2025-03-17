import React from "react";
import { DotsThreeOutline, Sparkle, StarFour } from "phosphor-react";
import Marquee from "react-fast-marquee";
const WhyChooseRegKaro = () => {
  const reasonArray = [
    "Hassle Free Documentation",
    "Dedicated Support",
    "Quick Turnaround",
    "Expert Guidance",
  ];
  const bgImage = {
    backgroundImage: `url(https://media.istockphoto.com/id/1392788958/vector/light-grey-circeled-halftone-monochrome-pattern-with-dots-minimalism-vector-background-for.jpg?s=612x612&w=0&k=20&c=D67oXL4dOH1Y2w0uZpeyN4KmfEeKb-N1Ngea15-ndrE=)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "5500",
    width: "8000",
  };
  return (
    <section className="whychoose-section">
      <div className="whychoose-main-container">
        <div className="whychoose-header-container">
          {/* <span className="whychoose-sparkle-img">
            <Sparkle weight="fill" />
          </span> */}
          <div className="whychoose-header-title">
            <h1 className="header-title-h1">
            Why to Choose <span className="header-title-span">RegisterKaro</span>
            </h1>
          </div>
        </div>
      </div>
      <Marquee 
        style={{ marginTop: "20px" }}
      
      speed={0} pauseOnHover>
        {reasonArray.map((reason, index) => (
          <div key={index} className="marque-card-container">
            <div className="icon-container">
              <DotsThreeOutline color="#164760"  weight="fill" />
            </div>
            <h3 className="icon-container-h3">{reason}</h3>
          </div>
        ))}
      </Marquee>
      {/* <Marquee
        style={{ marginTop: "20px" }}
        speed={50}
        direction="right"
        pauseOnHover
      >
        {reasonArray.map((reason, index) => (
          <div key={index} className="marque-card-container">
            <div className="icon-container">
              <DotsThreeOutline  color="#164760" weight="fill" />
            </div>
            <h3 className="icon-container-h3">{reason}</h3>
          </div>
        ))}
      </Marquee> */}
    </section>
  );
};

export default WhyChooseRegKaro;