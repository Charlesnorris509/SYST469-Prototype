import React from 'react';

function ControlsScreen({ navigateTo, isLocked, setIsLocked, isFrunkOpen, setIsFrunkOpen }) {
    const renderControlsImage = () => {
    // Try both image paths (root /images and /assets/images)
    if (isFrunkOpen) {
      return "../images/controls_frunk_open.png";
    } else if (!isLocked) {
      return "../images/controls_unlocked.png";
    } else {
      return "../images/controls_main.png";
    }
  };
  
  // Fallback handler for images
  const handleImageError = (e) => {
    e.target.onerror = null;
    const currentSrc = e.target.src;
    
    // If the image is not found, try the alternate path
    if (currentSrc.includes('/images/controls_frunk_open.png')) {
      e.target.src = "/assets/images/controls_frunk_open.png";
    } else if (currentSrc.includes('/images/controls_unlocked.png')) {
      e.target.src = "/assets/images/controls_unlocked.png";
    } else if (currentSrc.includes('/images/controls_main.png')) {
      e.target.src = "/assets/images/controls_main.png";
    }
  };
  
  const toggleLock = () => {
    // If we're unlocking and the frunk is open, close it
    if (isLocked === true && isFrunkOpen) {
      setIsFrunkOpen(false);
    }
    setIsLocked(!isLocked);
  };
  
  const toggleFrunk = () => {
    // Can only open frunk if car is unlocked
    if (!isLocked) {
      setIsFrunkOpen(!isFrunkOpen);
    }
  };
  
  return (
    <div className="screen controls-screen">
      <div className="screen-image-container">        <img 
          src={renderControlsImage()} 
          alt="Tesla Car Controls" 
          className="screen-image" 
          onError={handleImageError}
        />
        
        {/* Lock/Unlock button */}
        <div 
          className="interactive-area" 
          style={{
            top: '30%', 
            left: '50%', 
            width: '100px', 
            height: '100px',
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%'
          }}
          onClick={toggleLock}
          title={isLocked ? "Unlock Car" : "Lock Car"}
        />
        
        {/* Frunk button - only works when car is unlocked */}
        <div 
          className="interactive-area" 
          style={{
            top: '60%', 
            left: '50%', 
            width: '100px', 
            height: '100px',
            transform: 'translate(-50%, -50%)',
            borderRadius: '50%',
            cursor: isLocked ? 'not-allowed' : 'pointer'
          }}
          onClick={toggleFrunk}
          title={isFrunkOpen ? "Close Frunk" : "Open Frunk"}
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

export default ControlsScreen;
