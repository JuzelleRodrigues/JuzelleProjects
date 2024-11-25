import React from 'react';
import './Blog.css';

const Blog: React.FC = () => {
  return (
    <>
    <div className="blog-header">
      <div className="image-container">
        <img className="background-image" src="./juzelleprojects/PhotographySubmission/IMG_8636" alt="Background" />
      </div>
      <div className="overlay" />
      <div className="content-container">
        <div className="title">
          Insights about my personal and work life, and the in-betweens
        </div>
        <div className="subtitle">
          20 October 2024 - PERSONAL BLOG
        </div>
      </div>
    </div>

<section>
<div className="blog-page">
      <div className="intro-section">
        <h1 className="intro-title">Hello, I’m Juzelle Rodrigues! </h1>
        <div className="intro-divider"></div>
        <p className="intro-text">
          A master's design student working on specializing in Interaction Design.
        </p>
      </div>

      {/* Project 1 */}
      <div className="project-section">
        <h2 className="project-title">01 / PROFESSIONAL HEADSHOT</h2>
        <img className="project-image" src="./images/1_ThumbnailSize_ProfessionalHeadshot.jpg" alt="Description of the image" />
        <p className="project-description">
          As Professional as it gets
        </p>
        <p className="project-details">
          A Creative Thinker, Strategic Doer; Coffee-Fueled Problem Solver
        </p>
        <p className="project-link">Technical Commentary ↗</p>
        <hr className="project-divider" />
      </div>

      {/* Project 2 */}
      <div className="project-section">
        <h2 className="project-title">02 / AN AESTHETIC/ DRAMATIC SHOT</h2>
        <img className="project-image" src="./images/3_ThumbnailSize_DescribesYou.jpg" alt="Description of the image" />
        <p className="project-description">
        Dreamlike Escape; a Glimpse of Nature's Beauty
        </p>
        <p className="project-link">Read More →</p>
        <hr className="project-divider" />
      </div>

      {/* Project 3 */}
      <div className="project-section">
        <h2 className="project-title">03 / A SHOT THAT DESRCIBES YOU </h2>
        <img className="project-image" src="./images/2_ThumbnailSize_Aesthetic_Dramatic.jpg" alt="Description of the image" />
        <p className="project-description">
        A Visual Representation: Me, in a Nutshell (or a Frame) 
        </p>
        <p className="project-link">View Details →</p>
        <hr className="project-divider" />
      </div>
    </div>
</section>
</>
  );
};
export default Blog;
