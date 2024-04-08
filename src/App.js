// import { Route, Routes } from "react-router-dom";
// import "./App.css";
// import React, { useState, useEffect } from "react";
// import RotateLoader from "react-spinners/RotateLoader";
// import CustomerRouters from "./Routers/CustomerRouters";
// import { margin } from "@mui/system";

// function App() {
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//     }, 4000);
//   }, []);

//   return (
//     <div className="">
//       {loading ? (
//         <RotateLoader
//           // style={{ padding: "100px" }}
//           color="#36d7b7"
//           loading={loading}
//           size={20}
//           margin={50}
//         />
//       ) : (
//         <Routes>
//           <Route path="/*" element={<CustomerRouters />}></Route>
//         </Routes>
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import RotateLoader from "react-spinners/RotateLoader";
import CustomerRouters from "./Routers/CustomerRouters";
import "./App.css"; // Ensure this is imported to apply your styles
import { Route, Routes } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="">
      {loading ? (
        <div className="loader-container">
          <RotateLoader
            color="#3C2A21"
            loading={loading}
            size={20}
            margin={30} // Adjusted to a more common value, change as needed
          />
        </div>
      ) : (
        <Routes>
          <Route path="/*" element={<CustomerRouters />}></Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
