import React, { useState } from 'react';
import './QuizCategories.css';
import { motion } from 'framer-motion';
import {
  FaGlobeAsia, FaFlask, FaCalculator, FaLaptopCode,
  FaMosque, FaBook, FaBrain, FaLandmark, FaMoneyBillWave,
  FaUniversity, FaMicroscope, FaStar
} from 'react-icons/fa';
import Quiz from './Quiz';
import FollowGate from './FollowGate'; // ✅ Import FollowGate

const QuizCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showFollowGate, setShowFollowGate] = useState(false); // ✅ Gate state
  const [nextCategory, setNextCategory] = useState(null);       // ✅ Next category to unlock

  const categories = [
    { name: "Pakistan Questions", icon: <FaGlobeAsia />, count: 250 },
    { name: "Science Questions", icon: <FaFlask />, count: 180 },
    { name: "Maths Questions", icon: <FaCalculator />, count: 150 },
    { name: "Computer Questions", icon: <FaLaptopCode />, count: 120 },
    { name: "Islamiat Questions", icon: <FaMosque />, count: 200 },
    { name: "English Questions", icon: <FaBook />, count: 100 },
    { name: "IQ Questions", icon: <FaBrain />, count: 80 },
    { name: "Capitals Questions", icon: <FaLandmark />, count: 90 },
    { name: "Currencies Questions", icon: <FaMoneyBillWave />, count: 70 },
    { name: "World Organizations Questions", icon: <FaUniversity />, count: 60 },
    { name: "Discoveries & Inventions Questions", icon: <FaMicroscope />, count: 110 },
    { name: "Astronomy Questions", icon: <FaStar />, count: 75 }
  ];

  const handleCategorySelect = (category) => {
    setNextCategory(category.name.replace(' Questions', '')); // Clean name
    setShowFollowGate(true); // Show gate
  };

  const handleQuizClose = () => {
    setSelectedCategory(null);
  };

  const handleUnlock = () => {
    setSelectedCategory(nextCategory);
    setShowFollowGate(false);
  };

  if (selectedCategory) {
    return <Quiz category={selectedCategory} onClose={handleQuizClose} />;
  }

  return (
    <section className="categories-section" id="categories">
      <div className="background-pattern"></div>

      <div className="categories-container">
        <div className="section-header">
          <h2 className="section-title">Quiz Categories</h2>
          <p className="section-subtitle">
            Prepare smartly with categorized questions designed for Pakistani job tests.
          </p>
        </div>

        <motion.div 
          className="categories-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="category-card"
              onClick={() => handleCategorySelect(category)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="category-icon">{category.icon}</div>
              <h3 className="category-title">{category.name}</h3>
              <p className="category-count">{category.count}+ Questions</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ✅ Show FollowGate popup */}
      {showFollowGate && <FollowGate onUnlock={handleUnlock} />}
    </section>
  );
};

export default QuizCategories;
