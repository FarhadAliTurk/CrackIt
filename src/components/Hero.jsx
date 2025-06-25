import React from 'react';
import { FaTrophy } from 'react-icons/fa';
import CountUp from 'react-countup';
import HeroImage from '../assets/success.png';
import './Hero.css';

const Hero = () => {
  const scrollToCategories = () => {
    const section = document.getElementById('categories');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Crack <span>Job Tests</span> with Confidence
            </h1>
            <p className="hero-subtitle">
              Master every MCQ and secure your Grade 14 job. Trusted by thousands of smart candidates across Pakistan.
            </p>
            <div className="hero-cta">
              <button 
                className="btn btn-primary btn-lg hover-scale"
                onClick={scrollToCategories}
              >
                Start Practicing
              </button>
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">
                    <CountUp end={15000} duration={2.5} separator="," />+
                  </div>
                  <div className="stat-label">Active Learners</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">
                    <CountUp end={95} duration={2} suffix="%" />
                  </div>
                  <div className="stat-label">Success Rate</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">
                    <CountUp end={5000} duration={2} separator="," />+
                  </div>
                  <div className="stat-label">MCQs</div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-container">
              <img 
                src={HeroImage}
                alt="Successful candidate"
                className="hero-image"
                loading="lazy"
              />
              <div className="achievement-badge">
                <FaTrophy />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
