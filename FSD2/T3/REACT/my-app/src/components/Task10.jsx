import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    const emailRegex = /^[\w.%+-]+@[\w-]+\.[\w]{2,}$/i;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email";
    if (!passwordRegex.test(formData.password)) newErrors.password = "Must meet complexity requirements";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) alert(`Success: ${formData.email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" onChange={handleChange} placeholder="Email" required />
      {errors.email && <span>{errors.email}</span>}
      <input type="password" name="password" onChange={handleChange} placeholder="Password" required />
      {errors.password && <span>{errors.password}</span>}
      <input type="password" name="confirmPassword" onChange={handleChange} placeholder="Confirm" required />
      {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
      <button type="submit">Submit</button>
    </form>
  );
};
export default RegistrationForm;
