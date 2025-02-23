import React from "react";
import AnimatedDock from "./dock";
import "../styles/home.css";
export default function Home() {
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "0",
          paddingTop: "140.0000%",
          paddingBottom: "0",
          boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
          marginTop: "5em",
          marginBottom: "0.9em",
          overflow: "hidden",
          borderRadius: "20px",
          willChange: "transform",
        }}
      >
        <iframe
          loading="lazy"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            border: "none",
            padding: "0",
            margin: "0",
          }}
          src="https://www.canva.com/design/DAGe3KDl8Lo/NAnlpcbFvoZXD3lgEaP_EQ/view?embed"
          // allowfullscreen="allowfullscreen"
          // allow="fullscreen"
        ></iframe>
        <input type="checkbox" id="checkboxInput" />
        <label for="checkboxInput" className="toggleSwitch">
          <div className="speaker">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              viewBox="0 0 75 75"
            >
              <path
                d="M39.389,13.769 L22.235,28.606 L6,28.606 L6,47.699 L21.989,47.699 L39.389,62.75 L39.389,13.769z"
                style={{
                  stroke: "#fff",
                  strokeWidth: 5,
                  strokeLinejoin: "round",
                  fill: "#fff",
                }}
              />
              <path
                d="M48,27.6a19.5,19.5 0 0 1 0,21.4M55.1,20.5a30,30 0 0 1 0,35.6M61.6,14a38.8,38.8 0 0 1 0,48.6"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeWidth: 5,
                  strokeLinecap: "round",
                }}
              />
            </svg>
          </div>

          <div className="mute-speaker">
            <svg
              version="1.0"
              viewBox="0 0 75 75"
              style={{ stroke: "#fff", strokeWidth: 5 }}
            >
              <path
                d="m39,14-17,15H6V48H22l17,15z"
                style={{
                  fill: "#fff",
                  strokeLinejoin: "round",
                }}
              />
              <path
                d="m49,26 20,24m0-24-20,24"
                style={{
                  fill: "#fff",
                  strokeLinecap: "round",
                }}
              />
            </svg>
          </div>
        </label>
      </div>
      <div className="dock-cont-home">
        <AnimatedDock />
      </div>
    </>
  );
}
