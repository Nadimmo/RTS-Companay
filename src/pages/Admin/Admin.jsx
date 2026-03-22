import React, { useState } from "react";

const Admin = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const password = from.password.value;
    const status = from.status.value;
    const lmiFile = from.lmiFile.files[0];
    const jobLetterFile = from.jobLetterFile.files[0];
    const workPermitFile = from.workPermitFile.files[0];
    const applicationFile = from.applicationFile.files[0];

    const info = {
      name,
      password,
      status,
      lmiFile,
      jobLetterFile,
      workPermitFile,
      applicationFile,
    };
    console.log(info);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-3xl p-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Admin Submission
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>

          {/* Status Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              name="status"
              className="w-full px-4 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="pending">Pending</option>
              <option value="approve">Approve</option>
            </select>
          </div>

          {/* File Upload  */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload LMI{" "}
            </label>
            <input
              name="lmiFile"
              type="file"
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Job Letter{" "}
            </label>
            <input
              name="jobLetterFile"
              type="file"
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Work Permit{" "}
            </label>
            <input
              name="workPermitFile"
              type="file"
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Application{" "}
            </label>
            <input
              name="applicationFile"
              type="file"
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition shadow-lg active:scale-95 disabled:bg-gray-400"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
