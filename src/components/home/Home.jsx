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

        <h1 className="display-4"> Mona</h1>
        <p>Hello! My name is Mona Hassan, and I'm a web developer from New Jersey, USA. I enjoy building everything from small business sites to rich interactive web apps. If you are a business seeking a web
          presence or an employer looking to hire, you can get in touch with my via Email : mona.hassan0962@gmail.com  </p>
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
