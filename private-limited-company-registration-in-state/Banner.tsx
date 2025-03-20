import Image from "next/image";
import React, { useEffect, useState, Dispatch } from "react";
import { motion, useMotionValue, animate, AnimatePresence } from "framer-motion";
import bannerImg from "../../../assets/images/banner/image_1_copy.png"
import googleStarImg from "../../../assets/images/googleStars1.svg";
// import NewFormDesign from "../../child_components/NewFormDesign";
import bannerImg2 from "../../../assets/images/banner/image_3_copy.png"
import NewFormDesign from "../../child_components/NewFormDesign";
import Link from "next/link";


interface BannerProps {
  state?: string;
}
const CountUp = ({ target, duration = 5, format = (val: any) => val }: any) => {
  const [current, setCurrent] = useState(0);
  const count = useMotionValue(0);

  useEffect(() => {
    const controls = animate(count, target, {
      duration,
      onUpdate: (latest) => {
        setCurrent(Math.floor(latest));
      },
    });
    return controls.stop;
  }, [target, duration, count]);

  return <span>{format(current)}</span>;
};
const Banner: React.FC<BannerProps> = ({ state }) => {

  const [formOpen, setFormOpen] = useState<any>(null);
  useEffect(() => {
    setFormOpen(true);  // This will trigger the modal to open when the page reloads
  }, []);
  return (
    <div className="private-limited-company-registration-in-state-banner">

      <div className="private-banner">
        <div className="private-banner-left">
          <div className="breadcrumb">
            <p>
              <strong>Home/ Private Limited Company Registration / </strong> Private Limited Company
              Registration in {state ? state : "India"}
            </p>
          </div>
          <div className="private-heading">
            <h1>
              Private Limited Company Registration in{" "}
              <span className="span-heading">{state ? state : "India"}</span>
            </h1>
          </div>
          <div className="private-description">
            <p>
            Launch Your Private Limited Company in {state ? state : "India"}—Fast, Affordable & Hassle-Free!</p>
            <p>Don’t let legal complexities hold you back - <b>100% Online Process.</b></p>
          </div>
          <span className="private-button-div" onClick={() => setFormOpen(true)}>
            <button className="button">Register Now</button>
          </span>
          <div className="private-ratings-div">
            <div className="rating">
              <div className="icon">
                <Image
                  src="/assets/images/gReview.png"
                  alt="google"
                  width={70}
                  height={50}
                />
              </div>
              <div>
                <p className="desc">Google Customer Rating</p>
                <Image
                  src={googleStarImg}
                  alt="google"
                  width={120}
                  height={30}
                />
              </div>
            </div>
            <div className="rating">
              <div className="icon">
                <Image
                  src="/assets/images/brandshape.png"
                  alt="google"
                  width={30}
                  height={30}
                />
              </div>
              <div>
                <p className="desc">Satisfied Clients</p>
                <p className="desc1">
                  <CountUp
                    target={100}
                    duration={5}
                    format={(val: any) => val.toLocaleString()}
                  />
                  k+
                </p>
              </div>
            </div>
            <div className="rating">
              <div className="icon">
                <Image
                  src="/assets/images/brandshape.png"
                  alt="google"
                  width={30}
                  height={30}
                />
              </div>
              <div>
                <p className="desc">Happy Reviews</p>
                <p className="desc1">
                  <CountUp
                    target={1700}
                    duration={5}
                    format={(val: any) => val.toLocaleString()}
                  />+
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="private-banner-right">
          <div className="circular-gradient"></div>
          <div className="form-component">
            <NewFormDesign />
          </div>
          <Image
            src={bannerImg}
            alt="banner-image"
            className="image-right"

          />
          <Image src={bannerImg2}

            alt="banner-image"
            className="image-left"
          />
        </div>
      </div>

      <AnimatePresence>
        {formOpen && (
          <motion.div
            className="modal-form-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFormOpen(false)}
          >
            <motion.div
              className="modal-form-container"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <NewFormDesign />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
export default Banner;
