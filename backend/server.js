const express = require('express');
const path = require('path');
const cors = require('cors');
const Database = require('better-sqlite3');

// Initialize app
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Initialize database
const db = new Database(path.join(__dirname, 'db/database.sqlite'), { verbose: console.log });

// Create parameters table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS parameters (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    value TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`);

// Insert sample data if it doesn't exist
const count = db.prepare('SELECT COUNT(*) as count FROM parameters').get();
if (count.count === 0) {
  const insert = db.prepare('INSERT INTO parameters (name, value) VALUES (?, ?)');
  insert.run('app_name', 'Urch');
  insert.run('version', '1.0.0');
  insert.run('platform', 'Raspberry Pi');
}

// API Routes
app.get('/api/status', (req, res) => {
  res.json({ ok: true });
});

app.get('/api/parameters', (req, res) => {
  try {
    const parameters = db.prepare('SELECT * FROM parameters').all();
    res.json({ parameters });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Database error' });
  }
});

// Serve frontend for any route not handled above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
}); 