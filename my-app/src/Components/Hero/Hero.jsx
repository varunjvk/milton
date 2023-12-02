import React from "react";
import "./Hero.css";
import { CalendarDays } from "lucide-react";
import img from "../../assets/img.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <div>
        <span className="tag">An other way to manage time</span>
        <span className="hero-heading">
          Your new favorite <br /> calendar &nbsp;
          <CalendarDays color="#f899ff" size={55} fill="white" />
          &nbsp; app
        </span>
      </div>
      <span>
        Here you should explain how cool your app is. Remember,
        <br /> focus on the benefits for your users, not on the features.
      </span>
      <div className="hero-internal">
        <span>Get started, it's free</span>
        <span>Free 14 days trials,no credit card needed</span>
      </div>

      <div className="hero-rating">
        <div className="rating-left">
          <img src={img} alt="" />
          <img src={img} alt="" />
          <img src={img} alt="" />
          <img src={img} alt="" />
          <img src={img} alt="" />
        </div>
        <div className="rating-right">
          <span>⭐⭐⭐⭐⭐ 5.0</span>
          <span>From 200+ happy users</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
