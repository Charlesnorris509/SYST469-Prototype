import React from 'react';

function HomeScreen({ navigateTo }) {
  return (
    <div className="screen home-screen">
      <div className="screen-image-container">        <img 
          src="/images/home_main.png" 
          alt="Tesla Home Screen" 
          className="screen-image" 
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/assets/images/home_screen.png";
          }}
        />
        
        {/* Interactive areas on the home screen */}
        <div 
          className="interactive-area" 
          style={{
            top: '50%', 
            left: '20%', 
            width: '150px', 
            height: '60px',
            transform: 'translate(-50%, -50%)'
          }}
          onClick={() => navigateTo('climate')}
          title="Climate Controls"
        />
        
        <div 
          className="interactive-area" 
          style={{
            top: '30%', 
            right: '10%', 
            width: '150px', 
            height: '60px',
            transform: 'translate(-50%, -50%)'
          }}
          onClick={() => navigateTo('navigation')}
          title="Navigation"
        />
        
        <div 
          className="interactive-area" 
          style={{
            bottom: '20%', 
            left: '50%', 
            width: '150px', 
            height: '60px',
            transform: 'translate(-50%, -50%)'
          }}
          onClick={() => navigateTo('media')}
          title="Media Controls"
        />
      </div>
    </div>
  );
}

export default HomeScreen;
