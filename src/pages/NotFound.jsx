import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';

const NotFound = () => {
  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-md bg-white p-8 md:p-12 rounded-3xl border border-warm-200 shadow-xl flex flex-col items-center">
        <span className="text-8xl font-black text-primary-500 tracking-tight leading-none mb-4">404</span>
        <h1 className="text-2xl font-extrabold text-warm-900 tracking-tight mb-2">Page Not Found</h1>
        <p className="text-slate-500 text-sm mb-8 leading-relaxed">
          The page you are looking for doesn't exist, has been deleted, or has moved to another address.
        </p>
        <Link 
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white bg-primary-500 hover:bg-primary-600 transition shadow-lg shadow-primary-500/15"
        >
          <FiHome />
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
