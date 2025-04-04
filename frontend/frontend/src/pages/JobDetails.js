// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addBookmark } from "../slices/bookmarksSlice";
// import axios from "axios";

// const JobDetails = () => {
//   const { jobId } = useParams();
//   const dispatch = useDispatch();
//   const [job, setJob] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // ✅ Fetch job details from API when page loads
//     axios
//       .get(`https://testapi.getlokalapp.com/common/jobs/${jobId}`) // Replace with your API URL
//       .then((response) => {
//         setJob(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching job details:", error);
//         setLoading(false);
//       });
//   }, [jobId]);

//   if (loading) return <p>Loading job details...</p>;
//   if (!job) return <p>Job not found.</p>;

//   const handleBookmark = () => {
//     dispatch(addBookmark(job));
//     alert("This was added to bookmarks!");
//   };

//   return (
//     <div>
//       <h2>{job.title}</h2>
//       <p><strong>Company:</strong> {job.company || "N/A"}</p>
//       <p><strong>Location:</strong> {job.primary_details?.location || "N/A"}</p>
//       <p><strong>Salary:</strong> {job.fee_details?.salary || "N/A"}</p>
//       <p><strong>Phone:</strong> {job.primary_details?.phone || "N/A"}</p>
//       <p><strong>Description:</strong> {job.description || "No description available"}</p>

//       <button onClick={handleBookmark}>Add to Bookmarks</button>
//     </div>
//   );
// };

// export default JobDetails;







import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JobDetails = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    if (!jobId) {
      setError("Invalid job ID");
      setLoading(false);
      return;
    }

    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`https://testapi.getlokalapp.com/common/jobs?page=1`);
        if (!response.ok) throw new Error("Failed to fetch job details");

        const data = await response.json();
        if (!data.results || !Array.isArray(data.results)) throw new Error("Invalid API response format");

        const jobData = data.results.find(j => j.id && j.id.toString() === jobId.toString());

        if (!jobData) throw new Error("Job not found");

        setJob(jobData);

        // Check if job is already bookmarked
        const bookmarks = JSON.parse(localStorage.getItem("bookmarkedJobs")) || [];
        setIsBookmarked(bookmarks.some((b) => b.id === jobData.id));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [jobId]);

  const handleBookmark = () => {
    if (!job) return;

    let bookmarks = JSON.parse(localStorage.getItem("bookmarkedJobs")) || [];
    const isAlreadyBookmarked = bookmarks.some((b) => b.id === job.id);

    if (isAlreadyBookmarked) {
      // Remove from bookmarks
      bookmarks = bookmarks.filter((b) => b.id !== job.id);
      localStorage.setItem("bookmarkedJobs", JSON.stringify(bookmarks));
      setIsBookmarked(false);
      alert("Job removed from bookmarks!");
    } else {
      // Add to bookmarks
      localStorage.setItem("bookmarkedJobs", JSON.stringify([...bookmarks, job]));
      setIsBookmarked(true);
      alert("Job bookmarked successfully!");
    }
  };

  if (loading) return <p>Loading job details...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!job) return <p>Job not found.</p>;

  return (
    <div className="job-details-card">
      <h2>{job.title}</h2>

      <p><strong>Location:</strong> {job.primary_details?.Place || "Not provided"}</p>
      <p><strong>Salary:</strong> {job.primary_details?.Salary || "Not disclosed"}</p>
      <p><strong>Experience:</strong> {job.primary_details?.Experience || "Not provided"}</p>
      <p><strong>Job Type:</strong> {job.primary_details?.Job_Type || "Not provided"}</p>

      {/* ✅ Improved Bookmark Button Functionality */}
      <button onClick={handleBookmark}>
        {isBookmarked ? "Remove from Bookmarks" : "Add to Bookmarks"}
      </button>
    </div>
  );
};

export default JobDetails;




{/* <button 
        style={{ padding: "10px", marginTop: "10px", backgroundColor: "blue", color: "white", border: "none", cursor: "pointer" }}
        onClick={() => alert("Added to bookmarks!")}>
        Add to Bookmarks
      </button> */}

      //<button onClick={() => console.log("Bookmark added!", job.id)}>Add to Bookmarks</button>