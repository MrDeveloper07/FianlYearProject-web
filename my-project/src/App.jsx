// import React from 'react';
// import Home from './Home';
// import { BrowserRouter } from 'react-router-dom';
// import HomePage from './components/HomePage';

// const App = () => {
//   return (
//     <div className='flex w-full h-screen'> 
     
//       <div className="  overflow-hidden"> 
//         {/* <BrowserRouter>
//         <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/home" element={<HomePage />} />
// </Routes>
//         </BrowserRouter> */}
//         <Home/>
      
//       </div>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <BrowserRouter>
      <div className='flex w-full h-screen'>
        <div className="overflow-hidden w-full">
          <Routes>
            {/* Route for the root path */}
            <Route path="/" element={<Home />} />

            {/* Route for /home path */}
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
