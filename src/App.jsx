import { useState } from 'react'
import './App.css'

// Import our screen components
import HomeScreen from './screens/HomeScreen'
import ClimateScreen from './screens/ClimateScreen'
import NavigationScreen from './screens/NavigationScreen'
import ControlsScreen from './screens/ControlsScreen'
import MediaScreen from './screens/MediaScreen'

function App() {
  const [currentScreen, setCurrentScreen] = useState('home')
  
  // State for various car controls
  const [temperature, setTemperature] = useState(72)
  const [isLocked, setIsLocked] = useState(true)
  const [isFrunkOpen, setIsFrunkOpen] = useState(false)
  const [currentMedia, setCurrentMedia] = useState('radio')
  
  // Handle navigation between screens
  const navigateTo = (screen) => {
    setCurrentScreen(screen)
  }
  
  // Render the appropriate screen based on currentScreen state
  const renderScreen = () => {
    switch(currentScreen) {
      case 'home':
        return <HomeScreen navigateTo={navigateTo} />
      case 'climate':
        return <ClimateScreen 
                 navigateTo={navigateTo} 
                 temperature={temperature}
                 setTemperature={setTemperature}
               />
      case 'navigation':
        return <NavigationScreen navigateTo={navigateTo} />
      case 'controls':
        return <ControlsScreen 
                 navigateTo={navigateTo}
                 isLocked={isLocked}
                 setIsLocked={setIsLocked}
                 isFrunkOpen={isFrunkOpen}
                 setIsFrunkOpen={setIsFrunkOpen}
               />
      case 'media':
        return <MediaScreen 
                 navigateTo={navigateTo}
                 currentMedia={currentMedia}
                 setCurrentMedia={setCurrentMedia}
               />
      default:
        return <HomeScreen navigateTo={navigateTo} />
    }
  }
  
  // Bottom navigation bar that's present on all screens
  const renderNavBar = () => {
    return (
      <div className="navbar">
        <div className={`nav-item ${currentScreen === 'home' ? 'active' : ''}`} onClick={() => navigateTo('home')}>Home</div>
        <div className={`nav-item ${currentScreen === 'navigation' ? 'active' : ''}`} onClick={() => navigateTo('navigation')}>Navigation</div>
        <div className={`nav-item ${currentScreen === 'controls' ? 'active' : ''}`} onClick={() => navigateTo('controls')}>Controls</div>
        <div className={`nav-item ${currentScreen === 'climate' ? 'active' : ''}`} onClick={() => navigateTo('climate')}>Climate</div>
        <div className={`nav-item ${currentScreen === 'media' ? 'active' : ''}`} onClick={() => navigateTo('media')}>Media</div>
      </div>
    )
  }
  
  return (
    <div className="tesla-interface">
      {renderScreen()}
      {renderNavBar()}
    </div>
  )
}

export default App
