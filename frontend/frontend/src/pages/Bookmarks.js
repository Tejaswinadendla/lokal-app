// import React from "react";
// import { useSelector } from "react-redux";

// const Bookmarks = () => {
//   const bookmarks = useSelector((state) => state.bookmarks);

//   return (
//     <div>
//       <h2>Bookmarked Jobs</h2>
//       {bookmarks.length === 0 ? (
//         <p>No bookmarks yet.</p>
//       ) : (
//         bookmarks.map((job) => (
//           <div key={job.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
//             <h3>{job.title}</h3>
//             <p><strong>Location:</strong> {job.primary_details?.location || "N/A"}</p>
//             <p><strong>Salary:</strong> {job.fee_details?.salary || "N/A"}</p>
//             <p><strong>Phone:</strong> {job.primary_details?.phone || "N/A"}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Bookmarks;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const Bookmarks = () => {
//     const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

//     useEffect(() => {
//         const storedJobs = JSON.parse(localStorage.getItem("bookmarkedJobs")) || [];
//         setBookmarkedJobs(storedJobs);
//     }, []);

//     return (
//         <div className="container mx-auto p-4 mt-4"> 
//             <h1 className="text-2xl font-bold mb-4">Bookmarked Jobs</h1>

//             {bookmarkedJobs.length === 0 ? (
//                 <p>No jobs bookmarked yet.</p>
//             ) : (
//                 <div className="grid gap-4">
//                     {bookmarkedJobs.map((job) => (
//                         <div key={job.id} className="border p-4 rounded shadow">
//                             <h2 className="text-lg font-semibold">{job.title}</h2>
//                             <p><strong>Location:</strong> {job.primary_details?.Place || "N/A"}</p>
//                             <p><strong>Salary:</strong> {job.primary_details?.Salary || "Not disclosed"}</p>
//                             <p><strong>Contact:</strong> {job.primary_details?.phone || "No contact"}</p>
//                             <p><strong>Experience:</strong> {job.primary_details?.Experience}</p>
//                             <p><strong>Job Type:</strong> {job.primary_details?.Job_Type}</p>
//                             <Link to={`/jobs/${job.id}`} className="text-blue-500 underline">View Details</Link>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Bookmarks;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Bookmarks.css"; // Import the CSS file

const Bookmarks = () => {
    const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

    useEffect(() => {
        const storedJobs = JSON.parse(localStorage.getItem("bookmarkedJobs")) || [];
        setBookmarkedJobs(storedJobs);
    }, []);

    const handleRemoveBookmark = (jobId) => {
        const updatedJobs = bookmarkedJobs.filter((job) => job.id !== jobId);
        setBookmarkedJobs(updatedJobs);
        localStorage.setItem("bookmarkedJobs", JSON.stringify(updatedJobs));
        alert("Job removed from bookmarks!");
    };

    return (
        <div className="job-list-container">
            <h1 className="text-2xl font-bold mb-4">Bookmarked Jobs</h1>

            {bookmarkedJobs.length === 0 ? (
                <p>No jobs bookmarked yet.</p>
            ) : (
                <div className="job-list-grid">
                    {bookmarkedJobs.map((job) => (
                        <div key={job.id} className="job-card">
                            <h3>{job.title}</h3>
                            <p><strong>Location:</strong> {job.primary_details?.Place || "N/A"}</p>
                            <p><strong>Salary:</strong> {job.primary_details?.Salary || "Not disclosed"}</p>
                            <p><strong>Contact:</strong> {job.primary_details?.phone || "No contact"}</p>
                            <p><strong>Experience:</strong> {job.primary_details?.Experience || "N/A"}</p>
                            <p><strong>Job Type:</strong> {job.primary_details?.Job_Type || "N/A"}</p>

                            {/* ✅ Styled Remove from Bookmarks Button */}
                            <button className="remove-bookmark-btn" onClick={() => handleRemoveBookmark(job.id)}>
                                Remove from Bookmarks
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Bookmarks;




