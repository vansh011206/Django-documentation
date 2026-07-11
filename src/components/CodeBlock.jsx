import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CodeIcon, CopyIcon, CheckIcon } from './Icons';

export default function CodeBlock({ code, language = 'python', filename }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Map display names for languages
  const getLanguageLabel = (lang) => {
    switch (lang.toLowerCase()) {
      case 'python': return 'Python';
      case 'html': return 'HTML/Django';
      case 'django': return 'Django Template';
      case 'css': return 'CSS';
      case 'javascript':
      case 'js': return 'JavaScript';
      default: return lang.toUpperCase();
    }
  };

  return (
    <div className="my-6 rounded-lg border border-slate-800 bg-[#0d1117] overflow-hidden shadow-xl">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-slate-800">
        <div className="flex items-center gap-2">
          <CodeIcon size={14} className="text-accent" />
          {filename ? (
            <span className="text-xs font-mono text-textMain px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700">
              {filename}
            </span>
          ) : (
            <span className="text-xs text-textMuted font-sans">
              {getLanguageLabel(language)}
            </span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="p-1 rounded text-textMuted hover:text-accent hover:bg-slate-800 transition-colors"
          title="Copy code"
        >
          {copied ? (
            <CheckIcon size={16} className="text-accent animate-pulse" />
          ) : (
            <CopyIcon size={16} />
          )}
        </button>
      </div>

      {/* Highlighter Container */}
      <div className="text-sm font-mono overflow-x-auto custom-scrollbar">
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            background: '#090d16',
            padding: '1.25rem',
            fontSize: '0.875rem',
            lineHeight: '1.6',
            fontFamily: '"Fira Code", "JetBrains Mono", monospace',
          }}
          codeTagProps={{
            style: {
              fontFamily: 'inherit',
            }
          }}
        >
          {code.trim()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
