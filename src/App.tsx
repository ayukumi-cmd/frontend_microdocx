// import React from "react";
// import "./App.css";
// import HomePage from "./component/HomePage"; // Add missing import statement
// import CreatePage from './component/Form';
// function App() {
//   return (
//     <div>
//       <HomePage />{" "}
//     </div>
//   );
// }

// export default App;
// src/App.tsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';

const App: React.FC = () => {
 return (
    <BrowserRouter>
      {routes}
    </BrowserRouter>
 );
};

export default App;
