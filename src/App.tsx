import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './assets/Pages/NavBar';
import About from './assets/Pages/About';
import Contact from './assets/Pages/Contact';
import Projects from './assets/Pages/Projects';
import VideoGallery from './assets/Pages/VideoGallery';
import WorkExperience from './assets/Pages/WorkExperience';
import Blog from './assets/Pages/Blog';
import Footer from './assets/Pages/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/videogallery" element={<VideoGallery />} />
          <Route path="/workexperience" element={<WorkExperience />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>

<Footer/> {/* Render the Footer component here */}
</>
  ); 
};
export default App;
