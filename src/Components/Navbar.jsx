import { Link } from "react-router-dom"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#0D2B56" }}
    >
      <div className="container">
        <Link
          className="navbar-brand d-flex align-items-center text-white fw-bold"
          to="/home"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="30"
            fill="white"
            className="me-2"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 12h10v10l10-10H12z" />
          </svg>
          Mixplay
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ borderColor: "#FFFFFF33" }}
        >
          <span className="navbar-toggler-icon" style={{ filter: "invert(1)" }} />
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center gap-4">
            {["Learn Guitar", "Tuner", "Mixer"].map((item) => (
              <li
                key={item}
                className="nav-item"
                style={{ cursor: "pointer", color: "white", fontWeight: "500" }}
              >
                <Link
                  to={`/${item.toLowerCase().replace(/\s+/g, '')}`}
                  className="nav-link p-0 text-white"
                  style={{
                    fontWeight: "500",
                    position: "relative",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#74B3FF";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "white";
                  }}
                >
                  {item}
                </Link>
              </li>
            ))}
            <li className="nav-item">
              <Link
                to="/login"
                className="btn"
                style={{
                  backgroundColor: "#FFDD70",
                  color: "#0D2B56",
                  fontWeight: "600",
                  borderRadius: "6px",
                  padding: "6px 20px",
                  textDecoration: "none",
                }}
              >
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/signup"
                className="btn"
                style={{
                  backgroundColor: "#FFDD70",
                  color: "#0D2B56",
                  fontWeight: "600",
                  borderRadius: "6px",
                  padding: "6px 20px",
                  textDecoration: "none",
                }}
              >
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}