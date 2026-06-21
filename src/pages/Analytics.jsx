import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiExternalLink, FiCalendar, FiActivity } from 'react-icons/fi';
import urlService from '../services/urlService.js';
import AnalyticsTimeline from '../components/AnalyticsTimeline.jsx';
import LoadingSpinner from '../components/LoadingSpinner.jsx';
import CopyButton from '../components/CopyButton.jsx';

/**
 * Renders the analytics detail screen for a specific link, showing metadata 
 * and log timeline activity records using the urlService abstraction.
 */
const Analytics = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAnalytics = async () => {
    try {
      setIsLoading(true);
      const responseData = await urlService.getAnalytics(id);
      setData(responseData);
      setError(null);
    } catch (err) {
      console.error('Error fetching analytics:', err);
      setError(err.response?.data?.message || 'Failed to fetch analytics data.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchAnalytics();
    }
  }, [id]);

  if (isLoading) {
    return <LoadingSpinner message="Loading analytics statistics..." />;
  }

  if (error) {
    return (
      <div className="w-full max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="p-6 bg-red-50 border border-red-100 rounded-3xl max-w-md mx-auto">
          <p className="text-red-500 font-bold mb-2">⚠️ Error Loading Analytics</p>
          <p className="text-slate-600 text-sm mb-6">{error}</p>
          <Link 
            to="/dashboard" 
            className="px-6 py-2.5 rounded-full bg-primary-500 hover:bg-primary-600 text-white font-bold text-sm transition active:scale-95"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  if (!data || !data.url) {
    return (
      <div className="w-full max-w-4xl mx-auto px-4 py-16 text-center">
        <p className="text-slate-500">No data found for this URL.</p>
        <Link to="/dashboard" className="text-primary-500 hover:underline mt-4 inline-block font-bold">
          Go back to dashboard
        </Link>
      </div>
    );
  }

  const { url, clicks } = data;
  const createdDate = new Date(url.createdAt).toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Back to Dashboard Link */}
      <div className="text-left">
        <Link 
          to="/dashboard" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-warm-900 font-semibold text-sm transition mb-6"
        >
          <FiArrowLeft />
          Back to Dashboard
        </Link>
      </div>

      {/* URL Detail Summary Card */}
      <div className="bg-white rounded-3xl border border-warm-200 shadow-sm p-6 lg:p-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex-1 min-w-0 text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary-50 text-primary-600 mb-4">
              <FiActivity className="text-xs" /> Link Info
            </span>
            <h1 className="text-2xl font-bold text-warm-900 truncate" title={url.originalUrl}>
              {url.originalUrl}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-1.5">
                <FiCalendar className="text-slate-400" />
                <span>Created {createdDate}</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 min-w-[200px]">
            <div className="bg-warm-50 p-4 rounded-2xl border border-warm-200 text-center flex-1">
              <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Total Clicks</div>
              <div className="text-3xl font-extrabold text-warm-900 mt-1">{url.clickCount || 0}</div>
            </div>
          </div>
        </div>

        {/* Short Link Action Row */}
        <div className="mt-8 pt-6 border-t border-warm-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
          <div className="flex-1">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Shortened Address</div>
            <a 
              href={url.shortUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lg font-bold text-primary-500 hover:underline inline-flex items-center gap-1.5"
            >
              {url.shortUrl}
              <FiExternalLink className="text-xs text-slate-400" />
            </a>
          </div>
          
          <CopyButton text={url.shortUrl} className="w-full md:w-auto px-5 py-3 rounded-xl text-sm" />
        </div>
      </div>

      {/* Click Log History Timeline */}
      <div className="bg-white rounded-3xl border border-warm-200 shadow-sm p-6 lg:p-8">
        <h2 className="text-xl font-bold text-warm-900 mb-6 text-left">Click Timeline Activity</h2>
        <AnalyticsTimeline clicks={clicks} />
      </div>
    </div>
  );
};

export default Analytics;
