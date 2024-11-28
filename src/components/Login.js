import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/actions";

function Login() {
  const [token, setToken] = useState("");
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogin = () => {
    if (token) {
      dispatch(login(token)); // Dispatch login action
      setToken(""); // Clear input after login
    }
  };

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h3>You are logged in!</h3>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h3>Login</h3>
          <input
            type="text"
            placeholder="Enter token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default Login;
