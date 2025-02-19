import React, { useState } from "react";
import "../styles/rsvp.css";
import AnimatedDock from "./dock";
import Swal from "sweetalert2";

const RSVPForm = () => {
  const [names, setNames] = useState("");
  const [wishNames, setWishNames] = useState("");
  const [attendance, setAttendance] = useState("");
  const [wish, setWish] = useState("");
  const [showWishForm, setShowWishForm] = useState(false);
  const [wishes, setWishes] = useState([]); // New state to store wishes

  const handleSubmit = e => {
    e.preventDefault();
    Swal.fire({
      title: "Kehadiran di terima ",
      text: "",
      icon: "success",
    });
  };

  const handleSubmitWish = e => {
    e.preventDefault();
    const newWish = {
      name: wishNames,
      wish: attendance,
    };
    setWishes([...wishes, newWish]); // Add new wish to the list
    setWishNames("");
  };

  return (
    <>
      <div className="container-rsvp">
        <div className="rsvp-card">
          <form className="rsvp-form">
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
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </button>
            <div>
              <button
                onClick={e => {
                  e.preventDefault();
                  setShowWishForm(!showWishForm);
                }}
              >
                <p>Send a Wish</p>
              </button>

              {showWishForm && (
                <div className="wish-form">
                  <input
                    type="text"
                    value={wishNames}
                    onChange={e => setWishNames(e.target.value)}
                    className="text-input"
                    placeholder="Name"
                  />
                  <textarea
                    value={attendance}
                    onChange={e => setAttendance(e.target.value)}
                    className="text-input"
                    placeholder="Wish"
                  />
                  <button onClick={handleSubmitWish}>
                    <p>Send</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>

            {/* Comment Section */}
            <div className="comment-section">
              <h2>Wishes</h2>
              <div className="comment-container">
                {wishes.map((wish, index) => (
                  <div key={index} className="comment-card">
                    <p>
                      <strong>{wish.name}</strong>: {wish.wish}
                    </p>
                  </div>
                ))}
              </div>
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
