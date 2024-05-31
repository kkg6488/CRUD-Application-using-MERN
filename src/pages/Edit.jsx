import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Edit = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/auth/getone/${id}`
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };

    fetchUser();
  }, [id]);

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/auth/update/${id}`, user);
      alert("User detail updated successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error updating user: ", error);
    }
  };

  return (
    <>
      <div className="mt-4 mb-3 d-flex justify-content-center align-items-center">
        <h1>Update Form</h1>
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
            <label htmlFor="phone" className="form-label">
              Phone:
            </label>
            <input
              type="number"
              className="form-control"
              name="phone"
              placeholder="phone"
              id="phone"
              required
              autoComplete="off"
              value={user.phone}
              onChange={handleInput}
            />
          </div>
          <button type="submit" className="btn btn-info">
            Update User
          </button>
        </form>
      </div>
    </>
  );
};
