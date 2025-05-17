import React, { useState, useRef } from "react";
import { Navbar } from "../Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

export function Signup(){
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Navbar />
       <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh", backgroundColor: "#eaedf3" }}
    >
      <div
        className="bg-white p-5"
        style={{ width: 400, borderRadius: 8, boxShadow: "0 0 15px rgba(0,0,0,0.1)" }}
      >
        {/* Sign up with Apple button */}
        <button
          className="btn btn-dark w-100 mb-3"
          style={{ borderRadius: "25px", fontWeight: "500" }}
        >
          Sign up with Apple
        </button>

        <button
          className="btn btn-white w-100 mb-3"
           style={{ borderRadius: 50, backgroundColor: "#F5FEFD", border: "none" }}
        >
          Sign up with Google
        </button>

        <div>    
        </div>

        {/* OR separator */}
        <div className="d-flex align-items-center text-center mb-3">
          <hr className="flex-grow-1" />
          <small className="mx-2 text-muted">or</small>
          <hr className="flex-grow-1" />
        </div>

        {/* Email */}
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          id="email"
          type="email"
          className="form-control mb-3"
          placeholder="Enter your email"
          style={{ borderRadius: "20px" }}
        />

        {/* Password with eye toggle */}
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <div
          className="input-group mb-1"
          style={{ borderRadius: "20px", overflow: "hidden" }}
        >
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            className="form-control"
            placeholder="Enter password"
            style={{ borderRadius: "20px 0 0 20px" }}
          />
          <button
            className="btn btn-outline-secondary d-flex align-items-center justify-content-center"
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{ borderRadius: "0 20px 20px 0" }}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <AiOutlineEyeInvisible size={22} />
            ) : (
              <AiOutlineEye size={22} />
            )}
          </button>
        </div>
        <small className="text-muted d-block mb-3">
          The password must be at least 8 characters.
        </small>

        {/* Create account button */}
        <button
          className="btn btn-success w-100 mb-3"
          style={{ borderRadius: "25px", fontWeight: "600" }}
        >
          Create account
        </button>

        {/* Terms */}
        <small
          className="d-block text-center text-muted mb-3"
          style={{ fontSize: 11, lineHeight: 1.3 }}
        >
          By using our service, you agree with our{" "}
          <a href="#" className="text-decoration-underline text-muted">
            Terms of service
          </a>
          ,{" "}
          <a href="#" className="text-decoration-underline text-muted">
            CCPA Notice
          </a>{" "}
          and{" "}
          <a href="#" className="text-decoration-underline text-muted">
            Privacy Notice
          </a>{" "}
          that details what personal data we collect and use to provide you with
          the best learning experience.
        </small>

        <hr />

        {/* Already have account */}
        <div className="text-center">
            <div>Already have an account?</div>
            <Link to="/login" className="btn btn-outline-dark mt-2" style={{ borderRadius: "25px" }}>
              Log in
            </Link>
          </div>
      </div>
    </div>
    </>
  );
}
