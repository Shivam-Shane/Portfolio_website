
import React, { useState, useEffect } from 'react';

const stages = [
  'Data Acquisition and Exploration',
  'Feature Extraction and Transformation',
  'Model Development and Training',
  'Model Deployment and Integration',
  'Performance Monitoring and Maintenance',
];

const DataScienceFlow = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [optionsVisible, setOptionsVisible] = useState(null);

  useEffect(() => {
    
    const interval = setInterval(() => {
      setActiveStage((prev) => {
        const next = (prev + 1) % stages.length;
        
        return next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSkip = (index, e) => {
    e.stopPropagation();
    if (index < stages.length - 1) {
      setActiveStage(index + 1);
      setOptionsVisible(null);
      
    }
  };

  const handleRestart = (index, e) => {
    e.stopPropagation();
    setActiveStage(index);
    setOptionsVisible(null);
    
  };

  const toggleOptions = (index, e) => {
    e.stopPropagation();
    setOptionsVisible(optionsVisible === index ? null : index);
  };

  const handleContainerClick = () => {
    setOptionsVisible(null);
  };

  return (
    <div className="data-science-flow" onClick={handleContainerClick}>
      <div className="flow-container">
        {stages.map((stage, index) => (
          <div
            key={index}
            className="stage-wrapper"
            onClick={(e) => toggleOptions(index, e)}
          >
            {optionsVisible === index && index < stages.length - 1 && (
              <button
                className="hover-button skip top-button"
                onClick={(e) => handleSkip(index, e)}
              >
                Skip
              </button>
            )}
            <div
              className={`stage-circle ${
                index < activeStage ? 'completed' :
                index === activeStage ? 'active' : ''
              }`}
            >
              <span className="stage-text">{stage}</span>
              <div className="loader"></div>
            </div>
            {optionsVisible === index && (
              <button
                className="hover-button restart bottom-button"
                onClick={(e) => handleRestart(index, e)}
              >
                Restart
              </button>
            )}
            {index < stages.length - 1 && (
              <div
                className={`connector ${index < activeStage ? 'completed' : ''}`}
              >
                <div className="connector-progress"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataScienceFlow;