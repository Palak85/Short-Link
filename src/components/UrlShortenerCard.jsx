import React, { useState } from 'react';
import { FiLink, FiArrowRight } from 'react-icons/fi';
import CopyButton from './CopyButton.jsx';

/**
 * Component representing the URL Shortener input form card matching the user's design.
 */
const UrlShortenerCard = ({ onShorten, isShortening, shortResult, error }) => {
  const [urlInput, setUrlInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (urlInput.trim()) {
      onShorten(urlInput.trim());
    }
  };

  return (
    <div className="bg-white rounded-[2rem] p-6 lg:p-8 sunset-glow border border-warm-300 max-w-4xl mx-auto w-full" id="shortener">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
        <div className="flex-grow relative">
          <FiLink className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
          <input
            type="text"
            placeholder="Paste your long URL here..."
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            disabled={isShortening}
            className="w-full pl-[56px] pr-4 py-4 bg-[#f8f3e9] border-none focus:ring-2 focus:ring-primary pill-shape font-sans text-warm-900 placeholder:text-slate-400 focus:outline-none transition"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isShortening}
          className="bg-primary text-white font-bold px-8 py-4 pill-shape hover:scale-105 active:scale-95 sunset-glow-hover transition-all whitespace-nowrap flex items-center justify-center gap-2"
        >
          {isShortening ? 'Shortening...' : 'Shorten Now'}
          <FiArrowRight />
        </button>
      </form>

      {/* Trending Tags matching provided code */}
      <div className="mt-4 flex flex-wrap gap-2 items-center justify-start text-xs font-semibold">
        <span className="text-slate-400 uppercase tracking-widest text-[10px]">Trending Tags:</span>
        <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full">#Campaign2024</span>
        <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full">#BioLink</span>
      </div>

      {error && (
        <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-xl text-sm border border-red-100 font-medium">
          ⚠️ {error}
        </div>
      )}

      {shortResult && (
        <div className="mt-6 p-5 bg-pink-50/50 border border-dashed border-primary-100 rounded-[1.5rem] flex flex-col md:flex-row items-center justify-between gap-4 animate-fadeIn">
          <div className="flex-1 w-full min-w-0 text-left">
            <div className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-1">Your Shortened Link</div>
            <a 
              href={shortResult.shortUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lg font-bold text-primary hover:underline break-all"
            >
              {shortResult.shortUrl}
            </a>
            <div className="text-xs text-slate-400 mt-1 break-all truncate">
              Original: {shortResult.originalUrl}
            </div>
          </div>
          <CopyButton text={shortResult.shortUrl} className="w-full md:w-auto px-5 py-3 rounded-full bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition" />
        </div>
      )}
    </div>
  );
};

export default UrlShortenerCard;
