# Tesla Touchscreen Interactive Prototype

This is an interactive prototype of a Tesla vehicle touchscreen interface built with React and Vite.

## Features

- Interactive screens with clickable areas
- Navigation between different screens (Home, Navigation, Climate, Controls, Media)
- Functional climate controls to adjust temperature
- Car controls simulation (lock/unlock, frunk open/close)
- Navigation flow simulation
- Media source selection

## Project Structure

- `/src` - React components and application code
- `/src/screens` - Screen components for different parts of the interface
- `/public/images` - Images used in the prototype
- `/assets/images` - Alternate images (fallback)

## Getting Started

1. Install dependencies:
```
npm install
```

2. Start the development server:
```
npm run dev
```

3. Build for production:
```
npm run build
```

## Navigation

The prototype includes a bottom navigation bar for easy access to all screens:

- Home - Main overview screen
- Navigation - Maps and destination search
- Controls - Vehicle controls (lock/unlock, frunk, etc.)
- Climate - Temperature controls
- Media - Audio sources and controls

## Interaction

The prototype uses interactive areas that highlight on hover. Click on these areas to:

- Navigate between screens
- Adjust temperature
- Lock/unlock the vehicle
- Open/close the frunk
- Change media sources
- Simulate navigation flows

## Development

This prototype is built with:

- React 18
- Vite
- CSS for styling

Feel free to modify and extend the prototype with additional Tesla UI features!
