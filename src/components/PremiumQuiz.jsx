// PremiumQuiz.jsx
import React from 'react';
import './PremiumQuiz.css';
import { 
  FaCrown, 
  FaCheck, 
  FaChartLine, 
  FaBookOpen,
  FaUserTie,
  FaClock,
  FaShieldAlt
} from 'react-icons/fa';

const PremiumQuiz = () => {
  return (
    <section className="premium-section" id="premium">
      <div className="premium-container">
        <div className="premium-content">
          <div className="premium-text">
            <div className="premium-header">
              <h2 className="section-title">Unlock Premium Features</h2>
              <p className="section-subtitle">
                Get access to exclusive content and tools to maximize your success.
              </p>
            </div>
            
            <div className="premium-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <FaChartLine />
                </div>
                <div className="feature-text">
                  <h4>Advanced Analytics</h4>
                  <p>Track your progress with detailed performance reports.</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <FaBookOpen />
                </div>
                <div className="feature-text">
                  <h4>Exclusive Question Banks</h4>
                  <p>Access premium-only questions and mock tests.</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <FaUserTie />
                </div>
                <div className="feature-text">
                  <h4>Expert Guidance</h4>
                  <p>Get tips from successful candidates and subject experts.</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <FaClock />
                </div>
                <div className="feature-text">
                  <h4>Time Management Tools</h4>
                  <p>Practice with timed tests and improve your speed.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="premium-card">
            <div className="flex items-center gap-2 mb-4">
              <FaCrown className="text-primary text-2xl" />
              <span className="font-bold text-dark">PREMIUM</span>
            </div>
            
            <div className="price-tag">Rs. 999<span className="text-lg">/mo</span></div>
            <div className="price-period">Billed monthly. Cancel anytime.</div>
            
            <div className="premium-benefits">
              <div className="benefit-item">
                <FaCheck />
                <span>All 12 question categories</span>
              </div>
              <div className="benefit-item">
                <FaCheck />
                <span>5000+ premium questions</span>
              </div>
              <div className="benefit-item">
                <FaCheck />
                <span>Full-length mock tests</span>
              </div>
              <div className="benefit-item">
                <FaCheck />
                <span>Detailed explanations</span>
              </div>
              <div className="benefit-item">
                <FaCheck />
                <span>Performance tracking</span>
              </div>
            </div>
            
            <button className="btn btn-primary w-full mt-4">
              Upgrade Now
            </button>
            
            <div className="flex items-center gap-2 mt-4 text-sm text-gray">
              <FaShieldAlt />
              <span>Secure payment. 7-day money back guarantee.</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="decorative-shape shape-1"></div>
      <div className="decorative-shape shape-2"></div>
    </section>
  );
};

export default PremiumQuiz;
