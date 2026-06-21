# ShortLink - Premium URL Shortener & Analytics Dashboard

ShortLink is a production-quality, responsive URL shortening platform built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). The frontend is built using Vite and styled with a modern, warm-beige and burgundy design system.

---

## 🚀 Features

- **URL Shortening**: Pasteurize a long URL, validate the structure, and generate a unique, secure 6-character short code using NanoID. Avoids duplicate URL generation.
- **Redirection**: Instant redirection from `/:shortCode` to the original destination with automatic visit logging.
- **Visit Tracking**: Every redirection records a timestamped `Click` event and increments the parent link's total click counter.
- **Analytics Dashboard**: Grid panel visualizing core metrics (total links, link clicks, and most popular link). Includes a fully searchable and filterable database table of shortened URLs with quick copy actions.
- **Click Timeline Activity**: Interactive list details displaying historical visit logs sorted newest first.
- **SEO Ready**: Page title tags, custom meta-description configuration, and semantic layout structure.

---

## 🛠️ Tech Stack

### Frontend
- **React.js (Vite)**
- **Tailwind CSS v4** (CSS-first engine)
- **React Router DOM** (Client routing)
- **Axios** (API client communications)
- **React Icons** (Feather icon set)

### Backend
- **Node.js**
- **Express.js**
- **MongoDB & Mongoose**
- **NanoID** (Short code generator)
- **Helmet** (HTTP security headers)
- **CORS** (Cross-origin resources)
- **Morgan** (Request logger)

---

## 📁 Folder Structure

```text
/Users/palaksingh/Desktop/Assigment/
├── server/                    # Backend Source Files
│   ├── config/                # Database Configurations
│   ├── controllers/           # API Endpoint Controller Handlers
│   ├── middleware/            # Security and Exception Catchers
│   ├── models/                # MongoDB Mongoose Schemas
│   ├── routes/                # Route Endpoint Configuration Paths
│   ├── utils/                 # Validators and Helpers
│   ├── .env                   # Local Backend Environment Credentials
│   ├── package.json           # Backend Project Configuration Manager
│   └── server.js              # Express Bootstrapper Application Hook
├── src/                       # Frontend React Source Files
│   ├── assets/                # Images and Global Styles
│   ├── components/            # Reusable UI Custom Components
│   ├── hooks/                 # Custom React Hooks
│   ├── layouts/               # Master Header Navigation layout wrappers
│   ├── pages/                 # Routing Endpoint Component Targets
│   ├── services/              # Client API Request Handlers (Axios)
│   ├── utils/                 # Client utilities
│   ├── App.jsx                # Router config and global layouts
│   ├── index.css              # Styling themes config file
│   └── main.jsx               # Dom rendering config
├── vite.config.js             # Vite configuration settings
└── package.json               # Frontend Project Configuration Manager
```

---

## ⚙️ Setup and Installation

### Prerequisites
- Node.js (v16.x or higher)
- MongoDB running locally on port `27017`

### Step 1: Start MongoDB
Ensure MongoDB is running locally:
```bash
# If using brew services (macOS)
brew services start mongodb-community
```

### Step 2: Backend Setup
1. Navigate to the server folder:
   ```bash
   cd server
   ```
2. The `.env` file is already created for you with default configurations. Verify the contents:
   ```text
   PORT=5000
   MONGODB_URI=mongodb://127.0.0.1:27017/url_shortener
   BASE_URL=http://localhost:5000
   FRONTEND_URL=http://localhost:5173
   NODE_ENV=development
   ```
3. Start the Express server:
   ```bash
   npm start
   # Or for hot-reloading development mode
   npm run dev
   ```

### Step 3: Frontend Setup
1. Navigate back to the workspace root:
   ```bash
   cd ..
   ```
2. Start the Vite React development server:
   ```bash
   npm run dev
   ```
3. Open your browser to the URL displayed in the console (usually `http://localhost:5173`).

---

## 🔌 API Documentation

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/urls` | Shorten a new long URL. Body: `{ "originalUrl": "..." }` |
| `GET` | `/api/urls` | Retrieve all shortened URLs (sorted newest first). |
| `GET` | `/api/urls/:id` | Fetch detailed URL stats and click history logs. |
| `GET` | `/:shortCode` | Redirection route. Redirects browser to original URL. |
