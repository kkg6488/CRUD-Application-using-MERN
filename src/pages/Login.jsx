import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:5000/api/auth/login";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        alert("Login Successful");
        setUser({ email: "", password: "" });
        navigate("/");
      } else {
        alert("Invalid Credentials");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="mt-4 mb-3 d-flex justify-content-center align-items-center">
        <h1>Login Form</h1>
      </div>

      <div className="w-100 vh-10 d-flex justify-content-center align-items-center">
        <br />
        <form onSubmit={handleSubmit}>
          <div className="mb-1">
            <label htmlFor="email" className="form-label">
              Enter your Email:
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="email"
              id="email"
              required
              autoComplete="off"
              value={user.email}
              onChange={handleInput}
            />
          </div>

          <div className="mb-1">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="password"
              id="password"
              required
              autoComplete="off"
              value={user.password}
              onChange={handleInput}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Login
          </button>
        </form>
      </div>
    </>
  );
};
