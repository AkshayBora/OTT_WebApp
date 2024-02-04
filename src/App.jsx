import React, { useState } from "react";
import Header from "./assets/components/Header";
import Body from "./assets/components/Body";
import MainData from "./assets/components/MainData";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Searchmodal from "./assets/components/Searchmodal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [searchText, setSearchText] = useState("");
  // return (
  //   <>
  //     <Header searchText={searchText} setSearchText={setSearchText} />
  //     <Outlet />
  //     {/* <MainData /> */}
  //   </>
  // );
  return (
    <Router>
      <Header searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route
          path="search"
          element={
            <Searchmodal
              searchText={searchText}
              setSearchText={setSearchText}
            />
          }
        />
      </Routes>
    </Router>
  );
};

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Body />,
//       },
//       {
//         path: "/search",
//         element: (
//           <Searchmodal searchText={searchText} setSearchText={setSearchText} />
//         ),
//       },
//     ],
//   },
// ]);

export default App;
