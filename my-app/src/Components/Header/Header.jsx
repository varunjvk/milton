import "./Header.css";
import React from "react";

const Header = () => {
  return (
    <div className="h-container">
      <div className="h-logo">
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="black"
            stroke="currentColor"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-triangle">
            <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
          </svg>
        </div>
        <span className="h-title">Milton</span>
      </div>
      <div className="h-links">
        <span>
          <a href="">Features</a>
        </span>
        <span>
          <a href="">Testimonial</a>
        </span>
        <span>
          <a href="">Pricing</a>
        </span>
        <span>
          <a href="">FAQs</a>
        </span>
        <span>
          <a href="">Blog</a>
        </span>
      </div>
      <div className="h-login">
        <span>Log in</span>
        <span>Get Started</span>
      </div>
    </div>
  );
};

export default Header;
