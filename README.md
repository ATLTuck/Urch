# Urch - Optimized Web Development Environment for Raspberry Pi

A complete web application development environment designed specifically for Raspberry Pi 4B+ (8GB), featuring a lightweight and performance-optimized technology stack.

## Technology Stack

### Frontend
- **Preact**: A fast 3kB alternative to React with the same modern API
- **Chota CSS**: Ultra-lightweight CSS framework (~3kB) for responsive layouts
- **anime.js**: Lightweight animation library for creating engaging user interfaces

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Fast, unopinionated web framework for Node.js
- **SQLite**: Self-contained, serverless SQL database engine

## Project Structure

```
urch/
├── frontend/                   # Frontend code
│   ├── public/                 # Static files
│   └── src/                    # Source code
│       ├── components/         # Preact components
│       └── styles/             # CSS files
├── backend/                    # Backend code
│   ├── public/                 # Built frontend (production)
│   ├── db/                     # SQLite database
│   └── server.js               # Express server
├── package.json                # Root package.json
└── README.md                   # This file
```

## Features

- **Modular Architecture**: Clean separation between frontend and backend
- **Optimized for Raspberry Pi**: Minimal resource usage without sacrificing features
- **Interactive Landing Page**: Showcases the technology stack with animations
- **Responsive Design**: Works on all devices thanks to Chota CSS
- **REST API**: Express.js backend exposes REST endpoints 
- **Database Integration**: SQLite database with sample table and queries
- **Polished Animations**: Using anime.js for smooth UI interactions

## System Diagram

```
+-------------+         +-------------+         +-------------+
|             |  HTTP/  |             |  SQL    |             |
|  Frontend   |  JSON   |  Backend    |  Queries|  Database   |
|  (Preact)   +--------->  (Express)  +--------->  (SQLite)   |
|             |         |             |         |             |
+-------------+         +-------------+         +-------------+
```

## Getting Started

### Prerequisites

- Raspberry Pi 4B+ (8GB) or compatible hardware
- Node.js (v14+)
- npm (v6+)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/urch.git
   cd urch
   ```

2. Install dependencies for all packages:
   ```bash
   npm run install-all
   ```

### Development

Run the development server:

```bash
npm run dev
```

This will start both the frontend (Vite) and backend (Express) servers concurrently.

You can then access the application at:
```
http://10.0.0.226:3000
```
(Replace with your Raspberry Pi's IP address if different)

### Building for Production

```bash
npm run build
```

This builds the frontend and places it in the backend's public directory, ready to be served by Express.

## API Endpoints

- `GET /api/status`: Returns system status (`{ ok: true }`)
- `GET /api/parameters`: Returns all parameters from the database

## Performance Considerations

- **Low Memory Footprint**: Preact instead of React, Chota instead of larger CSS frameworks
- **Efficient Animations**: anime.js is optimized for performance
- **Local Database**: SQLite requires no separate server process
- **Optimized Build**: Production build minimizes all assets

## License

MIT

## Acknowledgments

- Preact team for creating a lightweight React alternative
- Chota CSS for the minimal CSS framework
- anime.js for the animation library
- Express.js and SQLite teams for their excellent tools 