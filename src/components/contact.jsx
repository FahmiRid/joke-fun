import React from "react";
import "../styles/contact.css";
import AnimatedDock from "./dock";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Whatsapp from "../components/img/whatsapp.png";
import Google from "../components/img/google.png";
import Waze from "../components/img/waze.png";
export default function Contact() {
  const Contact1 = "DAUD BIN MOHAMMAD";
  const Contact2 = "SITI AMINAH BINTI WAHAB";
  const Contact3 = "SYAZWANI SYAHIRAH";
  return (
    <>
      <div className="contact-container">
        <div className="contact-card">
          <div className='title-contact'>
            <label>HUBUNGI KAMI:</label>
          </div>
          <div className="whatsapp-icon">
            <img className="icon" src={Whatsapp} alt="Contact" style={{ transform: 'scale(1.5)' }} />
            <img className="icon" src={Whatsapp} alt="Contact" style={{ transform: 'scale(1.5)' }} />
            <img className="icon" src={Whatsapp} alt="Contact" style={{ transform: 'scale(1.5)' }} />
            <div className="contact-name">
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6em",
                }}
              >
                <li>
                  <span id="contact1">{Contact1}</span>
                </li>
                <li>
                  <span id="contact2">{Contact2}</span>
                </li>
                <li>
                  <span id="contact3">{Contact3}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="location-icon">
            <img className="icon" src={Google} alt="Google" style={{ transform: 'scale(3)' }} />
            <img className="icon" src={Waze} alt="Waze"  style={{ transform: 'scale(3)' }} />
          </div>
        </div>
        <div className="dock-contact-cont">
          <AnimatedDock />
        </div>
      </div>
    </>
  );
}
