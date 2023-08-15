import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="jumbotron">
        <img
          src="src/image/personal profile background.jpg"
          alt="Hello Image"
          style={{ maxWidth: "100%", width: "100%", height: "100%" }} // Adjust the styling as needed
        />

        <h1 className="display-4">Mona Hassan</h1>
        <p className="lead"></p>
        <hr className="my-4" />
        <p></p>
        <a
          className="btn btn-primary btn-lg"
          href="public/SECV.pdf"
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Recommended for security
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Home;
