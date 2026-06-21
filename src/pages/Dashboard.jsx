import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiPlus } from 'react-icons/fi';
import StatsCards from '../components/StatsCards.jsx';
import UrlTable from '../components/UrlTable.jsx';
import LoadingSpinner from '../components/LoadingSpinner.jsx';

/**
 * Main dashboard view displaying statistics cards, a searchable table of links,
 * and loading/error fallback states.
 */
const Dashboard = ({ urls, isLoading, error, onRefresh }) => {
  const [search, setSearch] = useState('');

  // Filter urls based on search query
  const filteredUrls = urls.filter((url) => {
    return (
      url.originalUrl.toLowerCase().includes(search.toLowerCase()) ||
      url.shortCode.toLowerCase().includes(search.toLowerCase())
    );
  });

  // Calculate statistics
  const totalUrls = urls.length;
  const totalClicks = urls.reduce((sum, u) => sum + (u.clickCount || 0), 0);
  const mostPopular = urls.length > 0 ? [...urls].sort((a, b) => b.clickCount - a.clickCount)[0] : null;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div className="text-left">
          <h1 className="text-3xl font-extrabold text-warm-900 tracking-tight">Your Dashboard</h1>
          <p className="text-slate-500 text-sm mt-1">Manage and track your shortened URLs in real-time.</p>
        </div>
        <Link 
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-white bg-primary-500 hover:bg-primary-600 transition shadow-lg shadow-primary-500/15 text-sm active:scale-95"
        >
          <FiPlus />
          Create New Link
        </Link>
      </div>

      {/* Statistics Cards */}
      <StatsCards 
        totalUrls={totalUrls} 
        totalClicks={totalClicks} 
        mostPopular={mostPopular} 
      />

      {/* Main Table Card */}
      <div className="bg-white rounded-3xl border border-warm-200 shadow-sm overflow-hidden">
        {/* Table Filters */}
        <div className="p-6 border-b border-warm-200/80 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <FiSearch className="text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search by original URL or short code..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-warm-50 border border-warm-200 text-sm text-warm-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
            />
          </div>
          <button 
            onClick={onRefresh}
            className="text-xs font-bold text-primary-500 hover:text-primary-600 px-3 py-1.5 rounded-lg hover:bg-primary-50 transition active:scale-95"
          >
            Refresh Links
          </button>
        </div>

        {/* URL List Table */}
        {isLoading ? (
          <LoadingSpinner message="Loading shortened links..." />
        ) : error ? (
          <div className="py-16 text-center px-4">
            <p className="text-red-500 font-medium mb-2">⚠️ Error loading links</p>
            <p className="text-slate-500 text-xs">{error}</p>
          </div>
        ) : filteredUrls.length === 0 ? (
          <div className="py-20 text-center px-4">
            <div className="text-slate-300 text-5xl mb-4">🔗</div>
            <h3 className="text-lg font-bold text-warm-900">No links found</h3>
            <p className="text-slate-500 text-sm mt-1 max-w-xs mx-auto">
              {search ? "We couldn't find any links matching your search." : "Shorten your first URL to see it displayed in your dashboard!"}
            </p>
            {!search && (
              <Link 
                to="/" 
                className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-white bg-primary-500 hover:bg-primary-600 transition shadow-lg text-sm active:scale-95"
              >
                Go Shorten URL
              </Link>
            )}
          </div>
        ) : (
          <UrlTable urls={filteredUrls} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
