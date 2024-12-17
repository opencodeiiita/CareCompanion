import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const validatePassword = (password) => {
    if (password.length < 6) {
      setPasswordError("At least 6 characters long");
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      setPasswordError("At least one uppercase letter");
      return false;
    }
    if (!/[a-z]/.test(password)) {
      setPasswordError("At least one lowercase letter");
      return false;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setPasswordError("At least one special character");
      return false;
    }
    setPasswordError(""); 
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      return;
    }

    console.log("Logging in with:", { email, password });
    navigate("/"); 
  };

  return (
    <div className="bg-slate-100 w-100 min-h-fit">
      <div className="flex justify-center items-center">
        <div className="loginbox bg-[#b8d9f4] md:w-1/2 lg:w-1/3 xl:1/4 sm:w-full flex items-center justify-center m-12 border-grey-900 border-1 rounded-md p-12">
          <form
            className="font-PTSans flex flex-col gap-2"
            onSubmit={handleSubmit}
          >
            <h1 className="h3 font-PTSans fw-normal">Please sign in</h1>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Username or Email"
                onChange={(e) => setEmail(e.target.value)}
                required
                value={email}
              />
              <label className="text-sm">Username or Email</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
                value={password}
              />
              <label className="text-sm">Password</label>
              {passwordError && (
                <div className="text-red-500 text-sm mt-2">
                  {passwordError}
                </div>
              )}
            </div>

            <button
              className="btn bg-[#94a1c0fb] w-100 py-2"
              type="submit"
            >
              Login
            </button>
            <div>
              <Link to="/register">Create an account?</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
