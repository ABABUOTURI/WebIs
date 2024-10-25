import React from 'react';
import patientImage from './assets/images/patient2.jpg'; // Ensure this path is correct
import './login.css'; // Import your CSS

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the login logic here
    // You can access the email and password values from the form
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <img src={patientImage} alt="mercy" className="profile-image" />
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Enter your password" required />
        </div>
        <div>
          <a href="/forgot-password">Forgot Password?</a>
        </div>
        <button type="submit">Login</button>
        <div>
          Don't have an account? <a href="/signup">Sign Up</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
