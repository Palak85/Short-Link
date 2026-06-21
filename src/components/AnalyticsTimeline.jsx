import React from 'react';
import { FiClock } from 'react-icons/fi';

/**
 * Renders a scrollable log timeline of individual visit timestamps.
 */
const AnalyticsTimeline = ({ clicks }) => {
  if (clicks.length === 0) {
    return (
      <div className="py-12 text-center text-slate-400 text-sm">
        <FiClock className="mx-auto text-3xl text-slate-300 mb-3 animate-pulse" />
        No activity tracked yet. Share your short URL to see visits appear here!
      </div>
    );
  }

  return (
    <div className="relative border-l border-warm-300 ml-4 pl-6 space-y-6 max-h-[400px] overflow-y-auto pr-2">
      {clicks.map((click, index) => {
        const clickDate = new Date(click.timestamp);
        const formattedDate = clickDate.toLocaleDateString(undefined, {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        });
        const formattedTime = clickDate.toLocaleTimeString(undefined, {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });

        return (
          <div key={click._id || index} className="relative">
            {/* Dot */}
            <div className="absolute -left-[31px] top-1.5 bg-primary-500 border-4 border-white w-4.5 h-4.5 rounded-full shadow-sm"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-warm-50/50 p-4 rounded-xl border border-warm-200/50 hover:bg-warm-50 transition">
              <div className="text-left">
                <span className="text-sm font-semibold text-warm-900">Link Visited</span>
                <p className="text-[10px] text-slate-400 mt-0.5">Device redirect success</p>
              </div>
              <div className="text-left sm:text-right text-xs mt-2 sm:mt-0">
                <span className="font-bold text-slate-600 block">{formattedDate}</span>
                <span className="text-slate-400 font-mono mt-0.5 block">{formattedTime}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnalyticsTimeline;
