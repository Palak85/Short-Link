import React, { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';

/**
 * A reusable button to copy text contents into clipboard with visual transition states.
 */
const CopyButton = ({ text, className = '', showLabel = true }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-bold border rounded-xl transition-all active:scale-95 ${
        copied
          ? 'bg-emerald-50 border-emerald-200 text-emerald-600'
          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
      } ${className}`}
      title="Copy to clipboard"
    >
      {copied ? <FiCheck className="text-sm" /> : <FiCopy className="text-sm" />}
      {showLabel && <span>{copied ? 'Copied' : 'Copy'}</span>}
    </button>
  );
};

export default CopyButton;
