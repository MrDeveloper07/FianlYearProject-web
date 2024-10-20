import React from 'react';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <div className='flex w-full h-screen'> 
     
      <div className="  overflow-hidden"> 
        <BrowserRouter>
        <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<HomePage />} />
</Routes>
        </BrowserRouter>
      
      </div>
    </div>
  );
}

export default App;
