import React from "react";
import "../styles/contact.css";
import AnimatedDock from "./dock";
export default function Contact() {
  return (
    <>
      <div className="contact-container">
        <div className="contact-card">contact</div>
        <div className="dock-contact-cont">
          <AnimatedDock />
        </div>
      </div>
    </>
  );
}
