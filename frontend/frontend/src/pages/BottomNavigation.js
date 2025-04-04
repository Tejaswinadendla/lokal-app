// import React, { useState } from "react";
// import Jobs from "./Jobs";
// import Bookmarks from "./Bookmarks";

// const Home = () => {
//   const [activeTab, setActiveTab] = useState("jobs"); // Default to Jobs

//   return (
//     <div>
//       {/* Header with Two Tabs */}
//       <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
//         <button onClick={() => setActiveTab("jobs")} style={{ marginRight: "10px" }}>
//           Jobs
//         </button>
//         <button onClick={() => setActiveTab("bookmarks")}>Bookmarks</button>
//       </div>

//       {/* Show Jobs or Bookmarks Based on Selection */}
//       {activeTab === "jobs" ? <Jobs /> : <Bookmarks />}
//     </div>
//   );
// };

// export default Home;


import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div className="fixed bottom-0 w-full bg-gray-900 text-white p-3 flex justify-around">
            <NavLink to="/" className="px-4">Jobs</NavLink>
            <NavLink to="/bookmarks" className="px-4">Bookmarks</NavLink>
        </div>
    );
};

export default Home;
