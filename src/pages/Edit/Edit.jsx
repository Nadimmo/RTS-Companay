import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Edit = () => {
  const [userInfo, setUserInfo] = useState([]);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic
      .get("/userInfo")
      .then((res) => setUserInfo(res.data))
      .catch((err) => console.error(err));
  }, []);


 const handleDelete = (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/userInfo/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your user has been deleted.",
                icon: "success"
              });
              refetch()
            }
          })
      }
    });
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Manage Users
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="text-left px-6 py-3 text-sm font-medium">
                  First Name
                </th>
                
                <th className="text-left px-6 py-3 text-sm font-medium">
                  Status
                </th>
                <th className="text-center px-6 py-3 text-sm font-medium">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {userInfo.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-gray-50 transition duration-200"
                >
                  <td className="px-6 py-4 text-gray-700 font-medium">
                    {user.name}
                  </td>

                  

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        user.status === "active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-center space-x-2">
                    

                    <button
                      onClick={() => handleDelete(user._id)}
                      className="px-4 py-1.5 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition hover:cursor-pointer"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {userInfo.length === 0 && (
            <p className="text-center text-gray-500 py-6">
              No users found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Edit;