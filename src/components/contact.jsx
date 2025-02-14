import React from "react";
import "../styles/contact.css";
import AnimatedDock from "./dock";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Whatsapp from "../components/img/whatsapp.png";
export default function Contact() {
  const Contact1 = "DAUD BIN MOHAMMAD";
  const Contact2 = "SITI AMINAH BINTI WAHAB";
  const Contact3 = "SYAZWANI SYAHIRAH";
  return (
    <>
      <div className="contact-container">
        <div className="contact-card">
          {/* <div className='title'>
            <label>HUBUNGI KAMI:</label>
          </div> */}
          <div className="whatsapp-icon">
            <img className="icon" src={Whatsapp} alt="Contact" />
            <img className="icon" src={Whatsapp} alt="Contact" />
            <img className="icon" src={Whatsapp} alt="Contact" />
          </div>
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
          {/* <div className="wedding-icon">
            <DotLottieReact
              src="https://lottie.host/84277c6e-9266-4a91-87b0-73659a55bdbd/hjq50nyeE7.lottie"
              loop
              autoplay
            />
          </div> */}
        </div>
        <div className="dock-contact-cont">
          <AnimatedDock />
        </div>
      </div>
    </>
  );
}
