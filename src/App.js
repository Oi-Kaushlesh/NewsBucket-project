import './App.css';
import React, { useState } from 'react';
import NavBar from './components/Navbar';
import News from './components/News';
import HomeNews from './components/HomeNews';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 5;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          {/* New Route for Tesla news on Home */}
          <Route exact path="/" element={<HomeNews setProgress={setProgress} />} />
          <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={pageSize} category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} category="entertainment" />} />
          <Route exact path="/general" element={<News setProgress={setProgress} key="general" pageSize={pageSize} category="general" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} category="technology" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
