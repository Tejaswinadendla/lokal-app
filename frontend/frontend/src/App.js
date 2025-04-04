// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Jobs from "./pages/Jobs";
// import JobDetails from "./pages/JobDetails";
// import Bookmarks from "./pages/Bookmarks";

// function App() {
//   return (
//       <Routes>
//         <Route path="/" element={<Jobs />} />
//         <Route path="/job/:jobId" element={<JobDetails />} />
//         <Route path="/bookmarks" element={<Bookmarks />} />
//       </Routes>
//   );
// }

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import Bookmarks from "./pages/Bookmarks";
import BottomNavigation from "./pages/BottomNavigation";
import Navbar from "./components/Navbar"; 

const App = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Ensure content does not overlap with the fixed navbar */}
            <div className="flex-grow p-4" style={{ paddingTop: "50px" }}> {/* Adjust this value based on your navbar height */}
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Jobs />} />
                    <Route path="/jobs/:jobId" element={<JobDetails />} />
                    <Route path="/bookmarks" element={<Bookmarks />} />
                </Routes>
            </div>
            <BottomNavigation />
        </div>
    );
};

export default App;











