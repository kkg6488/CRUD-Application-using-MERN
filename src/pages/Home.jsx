import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:5000/api/auth/getAll";

export const Home = () => {
  const [userList, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setList(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleEdit = (id) => {
    navigate(`/update/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/auth/delete/${id}`, {
        method: "DELETE",
      });
      setList(userList.filter((user) => user._id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <>
        <div className="w-100 vh-10 d-flex justify-content-center align-items-center ">
          <div className="w-50 ">
            <div className="g-col-6">
              <div className="mt-2 d-flex justify-content-center align-content-center">
                <h1>User List</h1>
              </div>
              <div className="px-2 d-flex justify-content-end align-items-right">
                <button
                  onClick={() => navigate("/register")}
                  className="btn btn-success"
                >
                  Add User
                </button>
              </div>
            </div>

            <div>
              <table className="table border border-dark mt-3">
                <thead className="thead-dark">
                  <tr>
                    <th>S.No.</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Role</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {userList.map((x, index) => {
                    return (
                      <tr key={x._id}>
                        <td>{index + 1}</td>
                        <td>{x.username}</td>
                        <td>{x.email}</td>
                        <td>{x.phone}</td>
                        <td>{x.isAdmin ? "Admin" : "User"}</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-primary"
                            style={{
                              marginRight: "10px",
                              marginBottom: "10px",
                            }}
                            onClick={() => handleEdit(x._id)}
                          >
                            Update
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger"
                            style={{
                              marginRight: "10px",
                              marginBottom: "10px",
                            }}
                            onClick={() => handleDelete(x._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
};
