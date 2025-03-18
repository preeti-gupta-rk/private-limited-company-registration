import { DeviceMobile, Envelope, MapPin, UserCircle } from "phosphor-react";
import { useState } from "react";
 // Make sure to import your SCSS
export default function NewFormDesign() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  return (
    <div className="main-form-container" id="contactform">
      <div className="new-form-design">
        <div className="form-created">
          <div className="rounded-div">Get Started Now!</div>
          <form className="form-container">
            <p className="form-description-text">
              Submit your Details to get an Instant{" "}
              <span className="span-text">All-inclusive-Quote</span> to your email and a{" "}
              <span className="span-text">FREE Expert</span> consultation.
            </p>
            <div className="input-wrapper">
              <UserCircle size={24} />
              <div className="input-container">
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-element"
                />
              </div>
            </div>
            <div className="input-wrapper">
              <Envelope size={24} />
              <div className="input-container">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-element"
                />
              </div>
            </div>
            <div className="input-wrapper">
              <DeviceMobile size={24} />
              <div className="input-container">
                <input
                  type="text"
                  placeholder="Enter Mobile Number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="input-element"
                />
              </div>
            </div>
            <div className="input-wrapper">
              <MapPin size={24} />
              <div className="input-container">
                <input
                  type="text"
                  placeholder="Enter City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="input-element"
                />
              </div>
            </div>
            <div className="form-button-container">
              <button className="orange-button">Get a Detailed Quotation!</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}