import React, { useState } from 'react';

function NavigationScreen({ navigateTo }) {
  const [navState, setNavState] = useState('initial'); // initial, search, results, active
    const renderNavigationImage = () => {
    switch(navState) {
      case 'initial':
        return "/images/map_search_initial.png";
      case 'search':
        return "/images/map_search_keyboard.png";
      case 'results':
        return "/images/nav_search_results.png";
      case 'active':
        return "/images/map_navigation_active_generic.png";
      default:
        return "/images/map_search_initial.png";
    }
  };
  
  // Fallback handler for navigation images
  const handleImageError = (e) => {
    e.target.onerror = null;
    const currentSrc = e.target.src;
    
    // Map the navigation images to their alternative paths
    if (currentSrc.includes('/images/map_search_initial.png')) {
      e.target.src = "/assets/images/nav_search.png";
    } else if (currentSrc.includes('/images/map_search_keyboard.png')) {
      e.target.src = "/assets/images/nav_search.png";
    } else if (currentSrc.includes('/images/nav_search_results.png')) {
      e.target.src = "/assets/images/nav_search_results.png";
    } else if (currentSrc.includes('/images/map_navigation_active_generic.png')) {
      e.target.src = "/assets/images/nav_active_trip.png";
    }
  };
  
  return (
    <div className="screen navigation-screen">
      <div className="screen-image-container">        <img 
          src={renderNavigationImage()} 
          alt="Tesla Navigation" 
          className="screen-image" 
          onError={handleImageError}
        />
        
        {/* Interactive areas depend on the current navigation state */}
        {navState === 'initial' && (
          <>
            {/* Search bar area */}
            <div 
              className="interactive-area" 
              style={{
                top: '10%', 
                left: '50%', 
                width: '80%', 
                height: '60px',
                transform: 'translateX(-50%)'
              }}
              onClick={() => setNavState('search')}
              title="Search for destination"
            />
          </>
        )}
        
        {navState === 'search' && (
          <>
            {/* Submit search area (like pressing enter) */}
            <div 
              className="interactive-area" 
              style={{
                bottom: '20%', 
                right: '10%', 
                width: '100px', 
                height: '60px',
              }}
              onClick={() => setNavState('results')}
              title="Search"
            />
            
            {/* Cancel search */}
            <div 
              className="interactive-area" 
              style={{
                top: '10%', 
                left: '10%', 
                width: '60px', 
                height: '40px',
              }}
              onClick={() => setNavState('initial')}
              title="Cancel"
            />
          </>
        )}
        
        {navState === 'results' && (
          <>
            {/* Select first result */}
            <div 
              className="interactive-area" 
              style={{
                top: '30%', 
                left: '50%', 
                width: '80%', 
                height: '60px',
                transform: 'translateX(-50%)'
              }}
              onClick={() => setNavState('active')}
              title="Select this destination"
            />
            
            {/* Back to search */}
            <div 
              className="interactive-area" 
              style={{
                top: '10%', 
                left: '10%', 
                width: '60px', 
                height: '40px',
              }}
              onClick={() => setNavState('search')}
              title="Back to search"
            />
          </>
        )}
        
        {navState === 'active' && (
          <>
            {/* End navigation */}
            <div 
              className="interactive-area" 
              style={{
                bottom: '20%', 
                right: '10%', 
                width: '120px', 
                height: '60px',
              }}
              onClick={() => setNavState('initial')}
              title="End navigation"
            />
          </>
        )}
        
        {/* Always show home button except on initial screen */}
        {navState !== 'initial' && (
          <div 
            className="interactive-area" 
            style={{
              bottom: '10%', 
              left: '10%', 
              width: '60px', 
              height: '40px',
            }}
            onClick={() => navigateTo('home')}
            title="Back to Home"
          />
        )}
      </div>
    </div>
  );
}

export default NavigationScreen;
