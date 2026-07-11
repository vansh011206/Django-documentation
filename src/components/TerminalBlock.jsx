import React, { useState } from 'react';
import { TerminalIcon, CopyIcon, CheckIcon } from './Icons';

export default function TerminalBlock({ command, explanation }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // If command is an array, join it with newlines
    const textToCopy = Array.isArray(command) ? command.join('\n') : command;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const commandLines = Array.isArray(command) ? command : [command];

  return (
    <div className="my-6 rounded-lg border border-slate-800 bg-[#0d1117] overflow-hidden shadow-xl font-mono text-sm">
      {/* Top Title Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-slate-800">
        <div className="flex items-center gap-2">
          {/* Windows / macOS Control Dots */}
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] opacity-75"></span>
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] opacity-75"></span>
            <span className="w-3 h-3 rounded-full bg-[#27c93f] opacity-75"></span>
          </div>
          <span className="text-xs text-textMuted ml-2 flex items-center gap-1.5 font-sans">
            <TerminalIcon size={12} className="text-accent" />
            Terminal
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="p-1 rounded text-textMuted hover:text-accent hover:bg-slate-800 transition-colors"
          title="Copy command"
        >
          {copied ? (
            <CheckIcon size={16} className="text-accent animate-pulse" />
          ) : (
            <CopyIcon size={16} />
          )}
        </button>
      </div>

      {/* Terminal Content */}
      <div className="p-4 overflow-x-auto custom-scrollbar bg-[#090d16]">
        {commandLines.map((line, idx) => (
          <div key={idx} className="flex leading-relaxed">
            <span className="text-accent/60 select-none mr-3 font-semibold">$</span>
            <span className="text-textMain whitespace-pre select-all">{line}</span>
          </div>
        ))}
      </div>

      {/* Explanation Footer (if present) */}
      {explanation && (
        <div className="px-4 py-2 bg-[#121824] border-t border-slate-900 font-sans text-xs text-textMuted">
          <span className="font-semibold text-accent/80 mr-1.5">Note:</span>
          {explanation}
        </div>
      )}
    </div>
  );
}
