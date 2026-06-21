import React from 'react';
import { FiActivity, FiMousePointer, FiTrendingUp } from 'react-icons/fi';

/**
 * Statistics display cards panel for dashboard header overview.
 */
const StatsCards = ({ totalUrls, totalClicks, mostPopular }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 w-full">
      {/* Stat 1 */}
      <div className="bg-white p-6 rounded-2xl border border-warm-200 shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-500">
          <FiActivity className="text-xl" />
        </div>
        <div>
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Links Created</div>
          <div className="text-2xl font-extrabold text-warm-900 mt-0.5">{totalUrls}</div>
        </div>
      </div>
      {/* Stat 2 */}
      <div className="bg-white p-6 rounded-2xl border border-warm-200 shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
          <FiMousePointer className="text-xl" />
        </div>
        <div>
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Link Clicks</div>
          <div className="text-2xl font-extrabold text-warm-900 mt-0.5">{totalClicks}</div>
        </div>
      </div>
      {/* Stat 3 */}
      <div className="bg-white p-6 rounded-2xl border border-warm-200 shadow-sm flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
          <FiTrendingUp className="text-xl" />
        </div>
        <div className="min-w-0 flex-1 text-left">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Most Popular Link</div>
          <div className="text-sm font-bold text-warm-900 mt-1 truncate" title={mostPopular ? mostPopular.originalUrl : ''}>
            {mostPopular ? `/${mostPopular.shortCode}` : 'N/A'}
          </div>
          <div className="text-[11px] text-slate-500 font-medium">
            {mostPopular ? `${mostPopular.clickCount} clicks` : 'No visits yet'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
