import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./Login.css";
export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("localhost:5000/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS" });
    } catch (err) {}
  };
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" className="loginInput" required ref={userRef} />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          required
          ref={passwordRef}
        />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton" type="submit">
        <Link to="/register" className="link">
          Register
        </Link>
      </button>
    </div>
  );
}
