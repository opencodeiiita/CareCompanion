import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Login = () => {
  const [password, setPassword] = useState("");
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const navigate = useNavigate();

  // Password validation function
  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/;
    return regex.test(password);
  };

  // Handle password change
  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);

    // Reset password error if valid
    if (validatePassword(inputPassword)) {
      setPasswordError("");
    }
  };

  // Handle email/username change
  const handleEmailOrUsernameChange = (e) => {
    setEmailOrUsername(e.target.value);
    // Reset email error if input is provided
    if (e.target.value) {
      setEmailError("");
    }
  };

  // Handle Login button click
  const handleLogin = () => {
    setIsFormSubmitted(true);
    let valid = true;

    // Check email or username validation
    if (!emailOrUsername) {
      setEmailError("Email or Username is required.");
      valid = false;
    } else {
      setEmailError(""); // Clear the error if email/username is provided
    }

    // Check password validation
    if (!password) {
      setPasswordError("Password is required.");
      valid = false;
    } else if (!validatePassword(password)) {
      setPasswordError(
        "Password must have at least 6 characters, one uppercase letter, one lowercase letter, and a special character."
      );
      valid = false;
    } else {
      setPasswordError(""); // Clear error if password is valid
    }

    // If form is valid, proceed with login (e.g., API call)
    if (valid) {
      setPasswordError("");
      console.log("Login successful!");
      navigate('/');
    }
  };

  return (
    <div>
      {/* First Modal */}
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered flex items-center justify-center">
          <div className="modal-content min-h-[80vh] md:min-h-[65vh] md:min-w-[80vw]">
            <div className="container w-full flex">
              {/* Left Side Image */}
              <div className="box1 hidden md:block w-1/2 h-full">
                <img
                  src="/assets/login1.jpg"
                  className="w-full h-full object-cover"
                  alt="Modal Visual"
                />
              </div>
              {/* Right Side Content */}
              <div className="box2 md:w-1/2 font-PTSans p-5 md:pt-5 md:pr-5 md:pl-2">
                <div className="absolute right-3 top-4">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div>
                  <h1
                    className="font-bold text-md md:text-[1.2rem] lg:text-[1.6rem] xl:text-[2.5rem]"
                    id="exampleModalToggleLabel"
                  >
                    Sign in to your account
                  </h1>
                  <div className="mt-3">
                    <h3 className="text-[1.3rem] md:text-[0.9rem] lg:text-[1.2rem] xl:text-[1.6rem]">
                      Don't have an account?{" "}
                      <Link  className="text-black underline">
                        Join here
                      </Link>
                    </h3>
                  </div>
                </div>
                <div className="right-body mt-8 flex flex-col gap-3 max-w-full md:text-lg lg:text-2xl xl:text-3xl">
                  <div className="font-bold text-sm lg:text-base xl:text-lg google border rounded text-center p-2 cursor-pointer relative hover:bg-slate-100">
                    <div className="absolute left-2 bottom-1 w-7 h-7 md:w-6 md:h-6 lg:w-7 lg:h-7">
                      <img src="/assets/google.svg" />
                    </div>
                    Continue with Google
                  </div>
                  <div
                    className="email font-bold text-sm xl:text-lg border rounded lg:text-base text-center p-2 cursor-pointer relative hover:bg-slate-100"
                    data-bs-target="#exampleModalToggle2"
                    data-bs-toggle="modal"
                  >
                    <i className="fa-regular fa-envelope absolute left-2 top-3 w-7 h-7 md:w-6 md:h-6 lg:w-7 lg:h-7"></i>
                    Email/username
                  </div>
                  <div className="text-center text-xs font-bold text-gray-400">
                    OR
                  </div>
                  <div className="flex justify-around gap-2">
                    <div className="apple font-bold text-sm xl:text-lg google border rounded lg:text-base text-center p-2 cursor-pointer relative w-full hover:bg-slate-100">
                      <i className="fa-brands fa-apple absolute left-2 top-3 w-7 h-7 "></i>
                      Apple
                    </div>
                    <div className="facebook font-bold xl:text-lg text-sm google border rounded lg:text-base text-center p-2 cursor-pointer relative w-full hover:bg-slate-100">
                      <div className="absolute left-2 w-6 h-6 md:w-5 md:h-5 lg:w-7 lg:h-7">
                        <img src="/assets/facebook.avif" />
                      </div>
                      Facebook
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Modal */}
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered flex items-center justify-center">
          <div className="modal-content min-h-[80vh] md:min-h-[65vh] md:min-w-[80vw]">
            <div className="container w-full flex">
              <div className="box1 hidden md:block w-1/2 h-full">
              <img
                  src="/assets/login1.jpg"
                  className="w-full h-full object-cover"
                  alt="Modal Visual"
                />
              </div>
              <div className="box2 md:w-1/2 font-PTSans relative p-5 md:pt-5 md:pr-5 md:pl-2">
              <div className="absolute left-5 top-5">
                <img                 
                src="/assets/back.jpg" 
                className="w-5 h-5 cursor-pointer"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                /> 
                </div>
      
                <div className="absolute right-3 top-4">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div>
                  <h1
                    className="font-bold text-md md:text-[1.2rem] lg:text-[1.7rem] xl:text-[2.5rem]"
                    id="exampleModalToggleLabel2"
                  >
                    Continue with your email or username
                  </h1>
                </div>
                <div className="right-body mt-8 flex flex-col gap-3 max-w-full md:text-lg lg:text-2xl xl:text-3xl">
                  <div className="">
                    <TextField
                      className="font-bold text-sm lg:text-base w-full"
                      id="outlined-basic"
                      label="Email or Username"
                      variant="outlined"
                      value={emailOrUsername}
                      onChange={handleEmailOrUsernameChange}
                    />
                    {isFormSubmitted && emailError && (
                      <div className="text-red-500 text-xs mt-2">
                        {emailError}
                      </div>
                    )}
                  </div>

                  <div className="w-full">
          
                    <TextField
                      type="password"
                      className="font-bold text-sm lg:text-base w-full"
                      id="outlined-basic"
                      label="Password"
                      variant="outlined"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                      <div className="mt-2"><Link className=" text-gray-600  text-base"> forgot password?</Link></div>
                    {isFormSubmitted && passwordError && (
                      <div className="text-red-500 text-xs mt-2">
                        {passwordError}
                      </div>
                    )}
                  </div>
                  <div>
                  
                  </div>

                  <div className="flex md:justify-center ">
                    <button onClick={handleLogin} className="border p-2 rounded w-full text-gray-500 hover:bg-slate-300 hover:text-gray-800 font-bold text-base">Login</button>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Login Button */}
      <div className="flex justify-center">
      <button
        className="bg-slate-200 p-2 mt-2 rounded "
        data-bs-target="#exampleModalToggle"
        data-bs-toggle="modal"
      >
        Login
      </button>
      </div>
    </div>
  );
};

export default Login;
