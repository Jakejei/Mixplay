import { Navbar } from "../Components/Navbar";
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

export function Profilepage(){
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return(
        <>
        
        <Navbar/>
        
        <div className="container mt-5 px-5">
      <h4 className="fw-bold border-bottom pb-2 mb-4">My account</h4>

      <div className="row">
        {/* Profile Picture */}
        <div className="col-md-3 text-center">
          <div className="d-flex justify-content-center mb-2">
            <img
              src="profile.jpg"
              alt="Profile"
              className="rounded-circle border"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
            />
          </div>
          <a href="#" className="fw-semibold text-decoration-underline">Change profile picture</a>
        </div>

        {/* Account Form */}
        <div className="col-md-9">
          <form>
            {/* Username & Email */}
            <div className="row mb-3">
              <div className="col">
                <label className="form-label">Username</label>
                <input type="text" className="form-control" value="Username A" readOnly />
              </div>
              <div className="col">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control bg-secondary bg-opacity-25"
                  value="Email A"
                  readOnly
                />
              </div>
            </div>

            {/* First & Last Name */}
            <div className="row mb-3">
              <div className="col">
                <label className="form-label">First name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col">
                <label className="form-label">Last name</label>
                <input type="text" className="form-control" />
              </div>
            </div>

            {/* Password Fields */}
            <div className="row mb-4">

              <div className="col position-relative">
                <label className="form-label">Change password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control bg-secondary bg-opacity-25 pe-5"
                  placeholder="••••••••"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', top: '38px', right: '15px', cursor: 'pointer' }}
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </div>

              {/* Confirm New Password */}
              <div className="col position-relative">
                <label className="form-label">Confirm new password</label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="form-control bg-secondary bg-opacity-25 pe-5"
                  placeholder="••••••••"
                />
                <span
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  style={{ position: 'absolute', top: '38px', right: '15px', cursor: 'pointer' }}
                >
                  {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </div>
            </div>

            <button type="submit" className="btn btn-outline-dark px-4">Save changes</button>
          </form>

                      <hr className="my-5"  />

          {/* Advanced settings */}
          <div>
            <h5 className="fw-bold border-bottom pb-2 mb-4">Advanced settings</h5>

            <div className="d-flex justify-content-between align-items-start mb-3">
              <div>
                <strong>Log out of all devices</strong>
                <div className="text-muted">You will remain logged in on this device</div>
              </div>
              <a href="#" className="fw-semibold text-decoration-underline">Log out of all devices</a>
            </div>

            <div className="d-flex justify-content-between align-items-start mb-3">
              <div>
                <strong>Delete account</strong>
                <div className="text-muted">Permanently delete your account and all progress</div>
              </div>
              <a href="#" className="fw-semibold text-decoration-underline text-danger">Delete account</a>
            </div>
          </div>
        </div>
      </div>
    </div>

        </>
        
    );
}