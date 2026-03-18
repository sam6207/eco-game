import { useState } from "react";
import { useNavigate } from "react-router-dom"
import "./Login.css"
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 


  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
    console.log(email, password);
  };

  return (
     <div className="login-container">
      <h2>🌱 Eco Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;