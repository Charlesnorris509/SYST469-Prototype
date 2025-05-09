import React from 'react';

function ClimateScreen({ navigateTo, temperature, setTemperature }) {
  const increaseTemp = () => {
    setTemperature(prev => Math.min(prev + 1, 90)); // Maximum temperature 90°F
  };

  const decreaseTemp = () => {
    setTemperature(prev => Math.max(prev - 1, 60)); // Minimum temperature 60°F
  };

  return (
    <div className="screen climate-screen">
      <div className="screen-image-container">        <img 
          src="../images/climate_control.png" 
          alt="Tesla Climate Control" 
          className="screen-image" 
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "../assets/images/climate_main.png";
          }}
        />
        
        {/* Temperature display - this would normally be overlaid on the appropriate part of the UI */}
        <div 
          style={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '24px',
            fontWeight: 'bold',
            color: 'white'
          }}
        >
          {temperature}°F
        </div>
        
        {/* Temperature increase button */}
        <div 
          className="interactive-area" 
          style={{
            top: '30%', 
            right: '30%', 
            width: '60px', 
            height: '60px',
            borderRadius: '50%'
          }}
          onClick={increaseTemp}
          title="Increase Temperature"
        />
        
        {/* Temperature decrease button */}
        <div 
          className="interactive-area" 
          style={{
            top: '30%', 
            left: '30%', 
            width: '60px', 
            height: '60px',
            borderRadius: '50%'
          }}
          onClick={decreaseTemp}
          title="Decrease Temperature"
        />
        
        {/* Back to home button */}
        <div 
          className="interactive-area" 
          style={{
            top: '10%', 
            left: '10%', 
            width: '60px', 
            height: '40px',
          }}
          onClick={() => navigateTo('home')}
          title="Back to Home"
        />
      </div>
    </div>
  );
}

export default ClimateScreen;
