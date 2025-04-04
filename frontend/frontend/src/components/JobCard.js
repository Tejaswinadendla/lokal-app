// import { Link } from 'react-router-dom';

// const JobCard = ({ job }) => {
//   return (
//     <div className="border p-4 rounded-lg shadow-md bg-white">
//       <h2 className="text-lg font-bold">{job.title}</h2>
//       <p className="text-gray-600">{job.primary_details.Place}</p>
//       <p className="text-gray-600">{job.primary_details.Salary}</p>

//       {/* View Details Button */}
//       <Link to={`/job/${job.id}`}>
//         <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">View Details</button>
//       </Link>
//     </div>
//   );
// };

// export default JobCard;

import React from "react";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
    const navigate = useNavigate();

    return (
        <div className="border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">{job.title}</h2>
            <p>📍 {job?.primary_details?.location || "Location not available"}</p>
            <p>💰 {job?.fee_details?.salary || "Salary not disclosed"}</p>
            <p>📞 {job?.primary_details?.phone || "No phone number"}</p>
            
            <button 
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => navigate(`/job/${job.id}`)} 
            >
                View Details
            </button>
        </div>
    );
};
const handleBookmark = (job) => {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    
    // Avoid duplicate bookmarks
    if (!bookmarks.some((item) => item.id === job.id)) {
        bookmarks.push(job);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
        alert("Job bookmarked!");
    } else {
        alert("Job already bookmarked.");
    }
    <button 
    className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
    onClick={() => handleBookmark(job)}
>
    Bookmark
</button>

};


export default JobCard;

