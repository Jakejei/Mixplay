import React, { useState } from "react";
import { Navbar } from "../Components/Navbar";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

export function Loginpage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Navbar />
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh", backgroundColor: "#e4e7ef" }}
      >
        <div
          className="bg-white p-4"
          style={{
            width: 400,
            borderRadius: 8,
            boxShadow: "0 0 15px rgba(0,0,0,0.1)",
          }}
        >
          {/* Facebook button */}
          <button
            className="btn btn-primary w-100 mb-3"
            style={{ borderRadius: 50, backgroundColor: "#3B5998", border: "none" }}
          >
            Sign in with Facebook
          </button>

          {/* Apple button */}
          <button
            className="btn btn-dark w-100 mb-3"
            style={{ borderRadius: 50, backgroundColor: "black", border: "none" }}
          >
            Sign in with Apple
          </button>

          {/* Separator */}
          <div className="d-flex align-items-center mb-3">
            <hr className="flex-grow-1" />
            <span className="mx-2" style={{ color: "#666", fontSize: 13 }}>
              or
            </span>
            <hr className="flex-grow-1" />
          </div>

          {/* Email */}
          <label htmlFor="email" className="form-label" style={{ fontSize: 14 }}>
            Email address or username
          </label>
          <input
            id="email"
            type="text"
            className="form-control mb-3"
            style={{ borderRadius: 30 }}
            placeholder=""
          />

          {/* Password with eye icon inside */}
          <label htmlFor="password" className="form-label" style={{ fontSize: 14 }}>
            Password
          </label>
          <div
            className="input-group mb-3"
            style={{ borderRadius: 30, overflow: "hidden" }}
          >
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className="form-control"
              style={{ borderRadius: 30, paddingRight: "2.5rem" }}
            />
            <span
              className="input-group-text"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                cursor: "pointer",
                borderTopRightRadius: 30,
                borderBottomRightRadius: 30,
              }}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              <i
                className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}
                style={{ fontSize: 18, color: "#9e9e9e" }}
              />
            </span>
          </div>

          {/* Forgot password */}
          <div className="text-center mb-3" style={{ fontSize: 13 }}>
            <a href="#" style={{ textDecoration: "underline", color: "#333" }}>
              Forgot your password?
            </a>
          </div>

          {/* Login button */}
          <div className="d-flex justify-content-center mb-3">
            <button
              className="btn btn-success px-4"
              style={{ borderRadius: 30, fontWeight: 500 }}
            >
              Log in
            </button>
          </div>

          <hr />

          {/* Signup */}
          <div className="text-center mt-3" style={{ fontSize: 14 }}>
            Don&apos;t have an account?
            <div className="mt-2">
              <Link to="/signup"> {/* Link to the signup page */}
                <button
                  className="btn btn-outline-dark px-4"
                  style={{ borderRadius: 30 }}
                >
                  Sign up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
