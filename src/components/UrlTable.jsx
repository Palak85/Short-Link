import React from 'react';
import { Link } from 'react-router-dom';
import { FiBarChart2, FiExternalLink } from 'react-icons/fi';
import CopyButton from './CopyButton.jsx';

/**
 * Renders the table of shortened URLs, click counts, created date, and detailed action triggers.
 */
const UrlTable = ({ urls }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-warm-50/80 border-b border-warm-200 text-xs font-bold text-slate-400 uppercase tracking-wider">
            <th className="px-6 py-4">Original URL</th>
            <th className="px-6 py-4">Short URL</th>
            <th className="px-6 py-4 text-center">Clicks</th>
            <th className="px-6 py-4">Created Date</th>
            <th className="px-6 py-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-warm-200/70 text-sm text-slate-700">
          {urls.map((url) => {
            const createdDate = new Date(url.createdAt).toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            });

            return (
              <tr key={url._id} className="hover:bg-warm-50/30 transition">
                {/* Original URL */}
                <td className="px-6 py-4 max-w-xs lg:max-w-md">
                  <div className="font-semibold text-warm-900 truncate" title={url.originalUrl}>
                    {url.originalUrl}
                  </div>
                </td>
                {/* Short URL */}
                <td className="px-6 py-4 font-mono font-medium text-primary">
                  <a 
                    href={url.shortUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline inline-flex items-center gap-1"
                  >
                    /{url.shortCode}
                    <FiExternalLink className="text-[10px] text-slate-400" />
                  </a>
                </td>
                {/* Click Count */}
                <td className="px-6 py-4 text-center font-bold text-warm-900">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-warm-200 text-warm-900 font-mono text-xs">
                    {url.clickCount || 0}
                  </span>
                </td>
                {/* Created Date */}
                <td className="px-6 py-4 text-slate-500 whitespace-nowrap">
                  {createdDate}
                </td>
                {/* Actions */}
                <td className="px-6 py-4 text-right whitespace-nowrap">
                  <div className="flex items-center justify-end gap-2">
                    <CopyButton 
                      text={url.shortUrl} 
                      showLabel={false} 
                      className="p-2 border-slate-200 hover:bg-slate-50"
                    />
                    <Link
                      to={`/analytics/${url._id}`}
                      className="p-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-primary hover:text-primary-600 transition inline-flex items-center justify-center active:scale-95"
                      title="View click analytics"
                    >
                      <FiBarChart2 className="text-sm" />
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UrlTable;
