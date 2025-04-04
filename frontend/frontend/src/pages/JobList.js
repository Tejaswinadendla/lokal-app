// import { useNavigate } from "react-router-dom";

// const JobList = ({ jobs }) => {
//   const navigate = useNavigate();

//   return (
//     <div>
//       {jobs.map((job) => (
//         <div key={job.id} className="p-4 border rounded-lg mb-4">
//           <h2 className="text-lg font-bold">{job.title}</h2>
//           <p>Location: {job.primary_details.Place}</p>
//           <p>Salary: {job.primary_details.Salary}</p>
//           <button
//             className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
//             onClick={() => navigate(`/job-details/${job.id}`)}
//           >
//             View Details
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default JobList;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("https://testapi.getlokalapp.com/common/jobs");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        console.log("🔍 Job List API Response:", data);

        if (Array.isArray(data.results)) {
          setJobs(data.results);
        } else {
          throw new Error("Invalid API response format");
        }
      } catch (err) {
        console.error("❌ API Fetch Error:", err.message);
        setError("Failed to fetch jobs.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Function to add a job to bookmarks
  const handleBookmark = (job) => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarkedJobs")) || [];
    const isAlreadyBookmarked = bookmarks.some((b) => b.id === job.id);

    if (!isAlreadyBookmarked) {
      localStorage.setItem("bookmarkedJobs", JSON.stringify([...bookmarks, job]));
      alert("Job bookmarked successfully!");
    } else {
      alert("Job is already bookmarked!");
    }
  };

  if (loading) return <p>Loading jobs...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (jobs.length === 0) return <p>No jobs available.</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Job Listings</h1>

      {/* Job List Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job, index) => (
          <div key={job.id || `job-${index}`} className="job-card p-4 border rounded-lg shadow">
            <h2 className="text-xl font-semibold">{job.title || "No title available"}</h2>
            <p><strong>Location:</strong> {job.primary_details?.Place || "Not provided"}</p>
            <p><strong>Salary:</strong> {job.primary_details?.Salary || job.fee_details?.Salary || "Not disclosed"}</p>
            <p><strong>Experience:</strong> {job.primary_details?.Experience || "Not provided"}</p>
            <p><strong>Job Type:</strong> {job.primary_details?.Job_Type || "Not provided"}</p>

            {/* View Details Button */}
            <button
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded mr-2"
              onClick={() => navigate(`/jobs/${job.id}`)}
            >
              View Details
            </button>

            {/* Add to Bookmarks Button */}
            <button
              className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
              onClick={() => handleBookmark(job)}
            >
              Add to Bookmarks
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
