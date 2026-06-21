import React from 'react';

/**
 * A standard, high-quality circular loading spinner component.
 */
const LoadingSpinner = ({ message = 'Loading...' }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center w-full" role="status">
      <div className="animate-spin inline-block w-8 h-8 border-[3.5px] border-primary-500 border-t-transparent rounded-full mb-3"></div>
      <p className="text-slate-400 text-xs font-semibold tracking-wide uppercase font-mono">{message}</p>
    </div>
  );
};

export default LoadingSpinner;
