import React, { useState } from 'react';

function MediaScreen({ navigateTo, currentMedia, setCurrentMedia }) {
  const [showSourceMenu, setShowSourceMenu] = useState(false);
    const renderMediaImage = () => {
    if (showSourceMenu) {
      return "/images/media_source_popup.png";
    } else if (currentMedia === 'radio') {
      return "/images/media_fm_playing.png";
    } else {
      return "/images/media_initial.png";
    }
  };
  
  // Fallback handler for media images
  const handleImageError = (e) => {
    e.target.onerror = null;
    const currentSrc = e.target.src;
    
    // Map the media images to their alternative paths
    if (currentSrc.includes('/images/media_source_popup.png')) {
      e.target.src = "/assets/images/audio_source_select.png";
    } else if (currentSrc.includes('/images/media_fm_playing.png')) {
      e.target.src = "/assets/images/audio_radio_selected.png";
    } else if (currentSrc.includes('/images/media_initial.png')) {
      e.target.src = "/assets/images/audio_main.png";
    }
  };
  
  const toggleSourceMenu = () => {
    setShowSourceMenu(!showSourceMenu);
  };
  
  const selectSource = (source) => {
    setCurrentMedia(source);
    setShowSourceMenu(false);
  };
  
  return (
    <div className="screen media-screen">
      <div className="screen-image-container">        <img 
          src={renderMediaImage()} 
          alt="Tesla Media Controls" 
          className="screen-image" 
          onError={handleImageError}
        />
        
        {!showSourceMenu && (
          <>
            {/* Source selection button */}
            <div 
              className="interactive-area" 
              style={{
                top: '10%', 
                right: '10%', 
                width: '100px', 
                height: '40px',
              }}
              onClick={toggleSourceMenu}
              title="Change Source"
            />
            
            {/* Volume controls */}
            <div 
              className="interactive-area" 
              style={{
                bottom: '20%', 
                left: '30%', 
                width: '60px', 
                height: '60px',
                borderRadius: '50%'
              }}
              title="Volume Down"
            />
            
            <div 
              className="interactive-area" 
              style={{
                bottom: '20%', 
                right: '30%', 
                width: '60px', 
                height: '60px',
                borderRadius: '50%'
              }}
              title="Volume Up"
            />
          </>
        )}
        
        {showSourceMenu && (
          <>
            {/* Radio option */}
            <div 
              className="interactive-area" 
              style={{
                top: '30%', 
                left: '50%', 
                width: '80%', 
                height: '60px',
                transform: 'translateX(-50%)'
              }}
              onClick={() => selectSource('radio')}
              title="Select Radio"
            />
            
            {/* Streaming option */}
            <div 
              className="interactive-area" 
              style={{
                top: '45%', 
                left: '50%', 
                width: '80%', 
                height: '60px',
                transform: 'translateX(-50%)'
              }}
              onClick={() => selectSource('streaming')}
              title="Select Streaming"
            />
            
            {/* Bluetooth option */}
            <div 
              className="interactive-area" 
              style={{
                top: '60%', 
                left: '50%', 
                width: '80%', 
                height: '60px',
                transform: 'translateX(-50%)'
              }}
              onClick={() => selectSource('bluetooth')}
              title="Select Bluetooth"
            />
            
            {/* Close menu */}
            <div 
              className="interactive-area" 
              style={{
                bottom: '10%', 
                left: '50%', 
                width: '60%', 
                height: '60px',
                transform: 'translateX(-50%)'
              }}
              onClick={toggleSourceMenu}
              title="Close Menu"
            />
          </>
        )}
        
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

export default MediaScreen;
