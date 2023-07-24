import { useEffect } from "react";
import "./styles.css";
import NavBar from "../../components/navBar";

const LITTR = () => {
  useEffect(() => {
    console.log("LITTR loaded");
  }, []);
  return (
    <div className="littr">
      <header className="littr-header">
        <NavBar  />

      </header>
      <div className="littr-container">
        <header className="littr-title">
          <h1>LITTR</h1>
        </header>
        <div className="littr-description">
          <p>
            LITTR is a social media platform that allows users to post and view
            content from other users. Users can create an account, post content,
            and view content from other users. Users can also follow other users
            and view their content in a feed. Users can also like and comment on
            posts.
          </p>
        </div>
        <div className="littr-features">
          <div className="littr-features-item">
            <h2>Features</h2>
          </div>
          <div className="littr-features-item">
            <p>
              <ul>
                <li>Users can create an account</li>
                <li>Users can post content</li>
                <li>Users can view content from other users</li>
                <li>Users can follow other users</li>
                <li>Users can view content from users they follow</li>
                <li>Users can like and comment on posts</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="littr-tech">
          <div className="littr-tech-item">
            <h2>Tech</h2>
          </div>
          <div className="littr-tech-item">
            <p>
              <ul>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>SupaBase</li>
                <li>PostgreSQL</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="littr-links">
          <div className="littr-links-item">
            <h2>Links</h2>
          </div>
          <div className="littr-links-item">
            <p>
              <ul>
                <li>
                  <a href="#">GitHub</a>
                </li>
                <li>
                  <a href="#">Live Demo</a>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LITTR;
