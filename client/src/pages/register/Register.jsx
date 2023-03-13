import { Link } from "react-router-dom";
import "./Register.css";
export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input type="text" className="registerInput" required />
        <label>Email</label>
        <input type="text" className="registerInput" required />
        <label>Password</label>
        <input type="password" className="registerInput" required />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link to="/login" className="link">
          Login
        </Link>
      </button>
    </div>
  );
}
