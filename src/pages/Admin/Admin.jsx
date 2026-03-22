import React from "react";
import axios from "axios";

const Admin = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const password = form.password.value;
    const status = form.status.value;

    const lmiFile = form.lmiFile.files[0];
    const jobLetterFile = form.jobLetterFile.files[0];
    const workPermitFile = form.workPermitFile.files[0];
    const applicationFile = form.applicationFile.files[0];

    if (!lmiFile) {
      alert("Please upload the LMI file");
      return;
    }

    try {
      // 🔹 helper function for uploading
      const uploadToImgBB = async (file) => {
        if (!file) return null;

        const formData = new FormData();
        formData.append("image", file);

        const res = await axios.post(
          `https://api.imgbb.com/1/upload?key=ebced42c75e22d67b350b68860e7277c`,
          formData
        );

        return res.data.data.url;
      };
      

      // 🔹 Upload all files
      const lmiUrl = await uploadToImgBB(lmiFile);
      const jobLetterUrl = await uploadToImgBB(jobLetterFile);
      const workPermitUrl = await uploadToImgBB(workPermitFile);
      const applicationUrl = await uploadToImgBB(applicationFile);

      // 🔹 Final data
      const info = {
        name,
        password,
        status,
        lmiUrl,
        jobLetterUrl,
        workPermitUrl,
        applicationUrl,
      };

    //   🔹 Send to backend
      const res = await axios.post("http://localhost:5000/userInfo", info);

      if (res.data) {
        alert("Submitted successfully!");
        form.reset();
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Upload failed!");
    }
    
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-3xl p-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Admin Submission
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input name="name" placeholder="Full Name" required className="input input-bordered w-full" />
          <input name="password" type="password" placeholder="Password" required className="input input-bordered w-full" />

          <select name="status" className="select select-bordered w-full">
            <option value="pending">Pending</option>
            <option value="approve">Approve</option>
          </select>

            <label htmlFor="">Upload LMI</label>
          <input name="lmiFile" type="file" className="file-input w-full" placeholder="LMI File" />
          <label htmlFor="">Upload Job Letter</label>
          <input name="jobLetterFile" type="file" className="file-input w-full" placeholder="Job Letter File" />
            <label htmlFor="">Upload Work Permit</label>
          <input name="workPermitFile" type="file" className="file-input w-full" placeholder="Work Permit File" />
            <label htmlFor="">Upload Application</label>
          <input name="applicationFile" type="file" className="file-input w-full" placeholder="Application File" />

          <button className="btn btn-primary w-full">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Admin;