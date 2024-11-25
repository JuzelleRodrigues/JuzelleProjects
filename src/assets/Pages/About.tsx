import "./About.css";
import img1 from "./../PhotographySubmission/IMG_8622.jpg";

function About() {
  return (
    <>
      <div className="content-section">
        <div className="text-container">
          <div className="text-content">
            <div className="title">Interaction & Experience Designer</div>
            <div className="main-heading">
              Interested in Collaborating?
              <br />
              Let's Connect!
            </div>
          </div>
          <div className="button-container">
            <div className="button-text">VIEW MY RESUME</div>
          </div>
        </div>
        <img className="image-section" src={img1} alt="Placeholder" />
      </div>
    </>
  );
}
export default About;
