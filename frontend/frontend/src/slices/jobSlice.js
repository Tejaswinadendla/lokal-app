// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const API_URL = "https://testapi.getlokalapp.com/common/jobs"; // Your API

// // Async Thunk for Fetching Jobs with Pagination
// export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async (page = 1) => {
//   try {
//     const response = await axios.get(`${API_URL}?page=${page}`);
//     console.log("API Response:", response.data);

//     if (response.data && Array.isArray(response.data.results)) {
//       return { jobs: response.data.results, page };
//     } else {
//       console.error("Unexpected API Response Format:", response.data);
//       return { jobs: [], page };
//     }
//   } catch (error) {
//     console.error("Error fetching jobs:", error);
//     return { jobs: [], page };
//   }
// });

// const jobSlice = createSlice({
//   name: "jobs",
//   initialState: { jobs: [], page: 1, status: "idle" },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchJobs.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchJobs.fulfilled, (state, action) => {
//         if (action.payload.page === 1) {
//           state.jobs = action.payload.jobs; // Reset list for page 1
//         } else {
//           state.jobs = [...state.jobs, ...action.payload.jobs]; // Append new jobs
//         }
//         state.page = action.payload.page;
//         state.status = "succeeded";
//       })
//       .addCase(fetchJobs.rejected, (state) => {
//         state.status = "failed";
//       });
//   },
// });

// export default jobSlice.reducer;

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

