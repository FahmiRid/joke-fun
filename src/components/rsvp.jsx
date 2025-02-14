import React, { useState } from "react";
import "../styles/rsvp.css";
import AnimatedDock from "./dock";
const RSVPForm = () => {
  const [names, setNames] = useState("");
  const [attendance, setAttendance] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log({ names, attendance });
  };

  return (
    <>
      <div className="container-rsvp">
        <div className="rsvp-card">
          <form onSubmit={handleSubmit} className="rsvp-form">
            <h1 className="rsvp-title">RSVP</h1>

            <div className="input-group">
              <label className="input-label">NAMES:</label>
              <input
                type="text"
                value={names}
                onChange={e => setNames(e.target.value)}
                className="text-input"
              />
            </div>

            <div className="radio-group">
              <div className="radio-option">
                <input
                  type="radio"
                  id="attend"
                  name="attendance"
                  value="attend"
                  onChange={e => setAttendance(e.target.value)}
                  className="radio-input"
                />
                <label htmlFor="attend" className="radio-label">
                  WOULD LOVE TO ATTEND
                </label>
              </div>

              <div className="radio-option">
                <input
                  type="radio"
                  id="cannot"
                  name="attendance"
                  value="cannot"
                  onChange={e => setAttendance(e.target.value)}
                  className="radio-input"
                />
                <label htmlFor="cannot" className="radio-label">
                  SADLY CANNOT ATTEND
                </label>
              </div>
            </div>

            <button onClick={handleSubmit}>
              <p>Submit</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </button>

            <div className="reply-by">
              <p className="reply-text">KINDLY REPLY BY</p>
              <p className="date-text">AUGUST 31, 2025</p>
            </div>

            <div className="names">
              <p className="couple-names">FAHMI & SHAFINAZ</p>
            </div>
          </form>
        </div>
        <div className="dock-cont-rsvp">
          <AnimatedDock />
        </div>
      </div>
    </>
  );
};

export default RSVPForm;
