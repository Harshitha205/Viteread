const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables. Please check your .env file.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Health check route
app.get('/api/status', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    message: 'Bookworm Rewards API is running',
    environment: process.env.NODE_ENV || 'development'
  });
});

// Test Supabase connection route
app.get('/api/test-db', async (req, res) => {
  try {
    // Simple query to test the connection
    const { data, error } = await supabase
      .from('books')
      .select('count')
      .limit(1);
    
    if (error) {
      return res.status(500).json({
        status: 'error',
        message: 'Database connection failed',
        error: error.message
      });
    }
    
    res.json({
      status: 'success',
      message: 'Database connection successful',
      data: data
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Database connection failed',
      error: error.message
    });
  }
});

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Bookworm Rewards API',
    version: '1.0.0',
    endpoints: {
      health: '/api/status',
      testDb: '/api/test-db'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Route not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📊 Health check available at: http://localhost:${PORT}/api/status`);
  console.log(`🔗 Supabase connected: ${supabaseUrl ? 'Yes' : 'No'}`);
});

module.exports = app;
