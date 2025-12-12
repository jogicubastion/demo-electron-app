# Electron Timer App

A simple Electron desktop application with a hello page and running timer. Built with React, TypeScript, Tailwind CSS, and Electron.

## Features

- Beautiful hello page with greeting
- Real-time timer that counts hours, minutes, and seconds
- Modern dark-themed UI with gradient background
- Runs as a native desktop application on Ubuntu and other platforms

## Running the App

### Development Mode

To run the app in development mode with hot reload:

```bash
npm run electron:dev
```

This will start the Vite dev server and launch the Electron app. Any changes you make to the code will automatically reload.

### Building for Production

To build the app for Ubuntu/Linux:

```bash
npm run electron:build:linux
```

This will create distributable packages in the `release` folder:
- `.AppImage` - Universal Linux package that runs on most distributions
- `.deb` - Debian/Ubuntu package

To build for all platforms:

```bash
npm run electron:build
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run the app:
```bash
npm run electron:dev
```

## Project Structure

- `src/` - React application source code
  - `App.tsx` - Main app component with timer logic
  - `main.tsx` - React entry point
  - `index.css` - Global styles
- `electron/` - Electron main process
  - `main.cjs` - Electron main process entry point
- `dist/` - Built web application (generated)
- `release/` - Built Electron packages (generated)

## Technologies Used

- Electron - Desktop application framework
- React - UI library
- TypeScript - Type-safe JavaScript
- Tailwind CSS - Utility-first CSS framework
- Vite - Fast build tool
- Lucide React - Icon library

## Ubuntu Installation

After building, you can install the app on Ubuntu:

### Using AppImage:
```bash
chmod +x release/Electron-Timer-*.AppImage
./release/Electron-Timer-*.AppImage
```

### Using .deb package:
```bash
sudo dpkg -i release/electron-timer-app_*.deb
```

## License

MIT
