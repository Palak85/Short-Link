import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout.jsx';
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Analytics from './pages/Analytics.jsx';
import NotFound from './pages/NotFound.jsx';
import urlService from './services/urlService.js';

function App() {
  const [urls, setUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [listError, setListError] = useState(null);

  // Shortening state
  const [isShortening, setIsShortening] = useState(false);
  const [shortResult, setShortResult] = useState(null);
  const [shorteningError, setShorteningError] = useState(null);

  // Fetch all URLs from the backend
  const fetchUrls = async () => {
    try {
      setIsLoading(true);
      const data = await urlService.getAll();
      setUrls(data);
      setListError(null);
    } catch (err) {
      console.error('Error fetching URLs:', err);
      setListError('Failed to fetch shortened links. Make sure backend is running.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  // Handle URL shortening POST
  const handleShorten = async (originalUrl) => {
    try {
      setIsShortening(true);
      setShorteningError(null);
      setShortResult(null);

      const data = await urlService.shorten(originalUrl);
      
      setShortResult(data);
      
      // Refresh urls list in dashboard
      fetchUrls();
    } catch (err) {
      console.error('Error shortening URL:', err);
      setShorteningError(
        err.response?.data?.message || 'Failed to shorten URL. Please try again.'
      );
    } finally {
      setIsShortening(false);
    }
  };

  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                onShorten={handleShorten} 
                isShortening={isShortening} 
                shortResult={shortResult} 
                error={shorteningError} 
              />
            } 
          />
          <Route 
            path="/dashboard" 
            element={
              <Dashboard 
                urls={urls} 
                isLoading={isLoading} 
                error={listError} 
                onRefresh={fetchUrls} 
              />
            } 
          />
          <Route path="/analytics/:id" element={<Analytics />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
