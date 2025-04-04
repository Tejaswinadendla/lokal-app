// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchJobs } from "../slices/jobSlice";
// import { Link } from "react-router-dom"; // ✅ Import Link for navigation
// import './Jobs.css';
// const Jobs = () => {
//   const dispatch = useDispatch();
//   const jobs = useSelector((state) => state.jobs.jobs);
//   const status = useSelector((state) => state.jobs.status);

//   useEffect(() => {
//     if (status === "idle") {
//       dispatch(fetchJobs());
//     }
//   }, [status, dispatch]);

//   return (
//     <div>
//       <h2>Job Listings</h2>
//       {jobs.length === 0 ? (
//         <p>Loading jobs...</p>
//       ) : (
//         jobs.map((job) => (
//           <div key={job.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
//             <h3>{job.title}</h3>
//             <p><strong>Location:</strong> {job.primary_details?.location || "N/A"}</p>
//             <p><strong>Salary:</strong> {job.fee_details?.salary || "N/A"}</p>
//             <p><strong>Phone:</strong> {job.primary_details?.phone || "N/A"}</p>

//             {/* ✅ View Details Button */}
//             <Link to={`/job/${job.id}`}>
//               <button>View Details</button>
//             </Link>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Jobs;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Jobs.css';
import { useNavigate } from 'react-router-dom';

const Jobs = () => {
    const navigate = useNavigate(); 
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

   useEffect(() => {
      const fetchJobs = async () => {
        try {
          const response = await fetch("https://testapi.getlokalapp.com/common/jobs?page=1");
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

    if (loading) return <p>Loading jobs...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="jobs-container mt-4"> {/* Added margin-top to push up */}
          <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
          {jobs.length === 0 ? (
            <p>No jobs available.</p>
          ) : (
            jobs.map((job, index) => (
              <div key={job.id || `job-${index}`} className="job-card p-4 border rounded shadow-md mb-4">
                <h2 className="text-lg font-bold">{job.title || "No title available"}</h2>
                <p><strong>Location:</strong> {job.primary_details?.location || job.primary_details?.Place || "Not specified"}</p>
                <p><strong>Salary:</strong> {job.primary_details?.salary || job.primary_details?.Salary || job.fee_details?.Salary || "Negotiable"}</p>
                <p><strong>Phone:</strong> {job.primary_details?.phone || "Not provided"}</p>
                <div className="flex gap-2 mt-3">
                  <button 
                    onClick={() => navigate(`/jobs/${job.id}`)}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      );
};




export default Jobs;

