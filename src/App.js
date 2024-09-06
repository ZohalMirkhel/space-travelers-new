import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import Profile from './pages/Profile';
import Navbar from './pages/navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Rockets />} />
      </Routes>
    </Router>
  );
}

export default App;
