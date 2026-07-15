import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// import App2 from "./App2.jsx";
import App3 from "./App3.jsx";

// import StartRating from "./StartRating.jsx";
import "./index.css";

// function Test() {
//   const [movieRating, setRatingMovie] = useState(0);
//   return (
//     <div>
//       <StartRating
//         color="blue"
//         maxRating={10}
//         onSetMovieRating={setRatingMovie}
//       />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <StartRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
    <StartRating />
    <Test /> */}
    <App3 />
  </StrictMode>,
);
