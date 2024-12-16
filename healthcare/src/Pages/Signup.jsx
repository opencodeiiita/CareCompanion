import React, { useState } from 'react';
import './Signup.css';


const SignUp= () => {
  const [formData, setFormData] = useState({
    usernameOrEmail: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.usernameOrEmail) {
      newErrors.usernameOrEmail = 'Username or Email is required';
    } else if (formData.usernameOrEmail.includes('@') && !validateEmail(formData.usernameOrEmail)) {
      newErrors.usernameOrEmail = 'Invalid email format';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      // Reset form after successful submission
      setFormData({ usernameOrEmail: '', password: '' });
    }
  };

  return (
    <div className='body'>
        <div className="signin-container">
        <h2 className="signin-title">Sign In</h2>
        <form className="signin-form" onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="usernameOrEmail">Username or Email</label>
            <input
                type="text"
                id="usernameOrEmail"
                name="usernameOrEmail"
                value={formData.usernameOrEmail}
                onChange={handleInputChange}
                required
            />
            {errors.usernameOrEmail && <div className="error">{errors.usernameOrEmail}</div>}
            </div>
            <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
            />
            {errors.password && <div className="error">{errors.password}</div>}
            </div>
            <button type="submit" className="signin-button">
            Sign In
            </button>
        </form>
        </div>
    </div>
  );
};

export default SignUp;

