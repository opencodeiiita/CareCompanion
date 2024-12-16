import React, { useState } from 'react';
import './login.css';

export const Login = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  // Email Validation Regex
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  // Password Strength Validation Regex
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'emailOrUsername') {
      setEmailOrUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  // Handle Password Visibility Toggle
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailOrUsername) {
      setErrorMessage('Username or Email is required.');
      return;
    }

    if (!password) {
      setErrorMessage('Password is required.');
      return;
    }

    if (!emailRegex.test(emailOrUsername)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!passwordRegex.test(password)) {
      setErrorMessage(
        'Password must be at least 8 characters long, with 1 uppercase letter, 1 number, and 1 special character.'
      );
      return;
    }

    // Clear Error and Handle Successful Submission
    setErrorMessage('');
    console.log('Form submitted successfully');
    // Add your form submission logic here (e.g., API call for sign-in)
  };

  return (
    <div className="sign-in-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} className="sign-in-form">
        <div className="form-group">
          <label htmlFor="emailOrUsername">Username or Email</label>
          <input
            type="text"
            id="emailOrUsername"
            name="emailOrUsername"
            value={emailOrUsername}
            onChange={handleInputChange}
            placeholder="Enter your username or email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? 'text' : 'password'} // Toggle between 'text' and 'password'
            id="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            placeholder="Enter your password"
          />
        </div>

        <div className="form-group show-password">
          <input
            type="checkbox"
            id="showPassword"
            checked={showPassword}
            onChange={togglePasswordVisibility}
          />
          <label htmlFor="showPassword">Show Password</label>
        </div>

        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <button type="submit" className="submit-btn">Sign In</button>
      </form>
    </div>
  );
};


