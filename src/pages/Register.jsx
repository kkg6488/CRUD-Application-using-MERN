import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:5000/api/auth/register";

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  //handling the input
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
        alert("Registration Successful");
        setUser({ username: "", email: "", phone: "", password: "" });
        navigate("/login");
      }
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <>
      <div className="mt-4 mb-3 d-flex justify-content-center align-items-center">
        <h1>Registration Form</h1>
      </div>

      <div className="w-100 vh-10 d-flex justify-content-center align-items-center">
        <br />

        <form onSubmit={handleSubmit}>
          <div className="mb-1">
            <label htmlFor="username" className="form-label">
              Username:
            </label>
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="username"
              id="username"
              required
              autoComplete="off"
              value={user.username}
              onChange={handleInput}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="email" className="form-label">
              Enter your Email:
            </label>
            <input
              type="email"
              class="form-control"
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
            <label htmlFor="phone" className="form-label">
              Phone:
            </label>
            <input
              type="number"
              class="form-control"
              name="phone"
              placeholder="phone"
              id="phone"
              required
              autoComplete="off"
              value={user.phone}
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              class="form-control"
              name="password"
              placeholder="password"
              id="password"
              required
              autoComplete="off"
              value={user.password}
              onChange={handleInput}
            />
          </div>
          <button type="submit" class="btn btn-info">
            Register Now
          </button>
        </form>
      </div>
    </>
  );
};
