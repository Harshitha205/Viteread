# Bookworm Rewards API

A Node.js Express API with Supabase integration for the Bookworm Rewards application.

## Features

- ✅ Express.js server with CORS support
- ✅ Supabase database integration
- ✅ Environment variable configuration
- ✅ Health check endpoint
- ✅ Database connection testing
- ✅ Error handling middleware
- ✅ Development mode with nodemon

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create environment file:**
   Create a `.env` file in the backend directory with the following variables:
   ```env
   # Server Configuration
   PORT=3001
   NODE_ENV=development

   # Supabase Configuration
   SUPABASE_URL=your_supabase_project_url_here
   SUPABASE_ANON_KEY=your_supabase_anon_key_here
   ```

3. **Get Supabase credentials:**
   - Go to your Supabase project dashboard
   - Navigate to Settings > API
   - Copy the Project URL and anon/public key
   - Add them to your `.env` file

## Running the Server

**Development mode (with auto-restart):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will start on port 3001 (or the port specified in your `.env` file).

## API Endpoints

### Health Check
- **GET** `/api/status`
- Returns server status and timestamp

### Database Test
- **GET** `/api/test-db`
- Tests Supabase connection

### Root
- **GET** `/`
- Returns API information and available endpoints

## Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `PORT` | Server port | No | 3001 |
| `NODE_ENV` | Environment mode | No | development |
| `SUPABASE_URL` | Supabase project URL | Yes | - |
| `SUPABASE_ANON_KEY` | Supabase anonymous key | Yes | - |

## Project Structure

```
backend/
├── index.js          # Main server file
├── package.json      # Dependencies and scripts
└── README.md         # This file
```

## Dependencies

- **express**: Web framework
- **cors**: Cross-origin resource sharing
- **@supabase/supabase-js**: Supabase client library
- **dotenv**: Environment variable management
- **nodemon**: Development auto-restart (dev dependency)
