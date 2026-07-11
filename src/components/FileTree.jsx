import React, { useState } from 'react';
import { FolderIcon, FileIcon, ChevronDownIcon, ChevronRightIcon } from './Icons';

// Recursive tree node component
function TreeNode({ node, depth = 0 }) {
  const [isOpen, setIsOpen] = useState(node.isOpen !== false);
  const isFolder = node.isFolder || (node.children && node.children.length > 0);

  const handleToggle = () => {
    if (isFolder) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="font-mono text-sm selection:bg-transparent">
      {/* Node Row */}
      <div
        onClick={handleToggle}
        className={`flex items-center gap-1.5 py-1 px-2 rounded cursor-pointer transition-colors ${
          isFolder ? 'hover:bg-slate-800/40 text-accent/90' : 'hover:bg-slate-800/20 text-textMain'
        }`}
        style={{ paddingLeft: `${depth * 16 + 8}px` }}
      >
        {isFolder ? (
          <>
            <span className="text-textMuted/60">
              {isOpen ? <ChevronDownIcon size={14} /> : <ChevronRightIcon size={14} />}
            </span>
            <FolderIcon size={16} className="text-accent/80" />
            <span className="font-medium">{node.name}</span>
          </>
        ) : (
          <>
            <span className="w-[14px]"></span> {/* Indent offset for no chevron */}
            <FileIcon size={16} className="text-textMuted/80" />
            <span>{node.name}</span>
          </>
        )}
      </div>

      {/* Children */}
      {isFolder && isOpen && node.children && (
        <div className="border-l border-slate-800/80 ml-[18px]">
          {node.children.map((child, idx) => (
            <TreeNode key={idx} node={child} depth={depth} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function FileTree({ treeData, title = "File Explorer" }) {
  return (
    <div className="my-6 max-w-md rounded-lg border border-slate-800 bg-[#0d1117]/80 overflow-hidden shadow-lg">
      {/* Sidebar Header Bar */}
      <div className="flex items-center gap-2 px-4 py-2 bg-[#161b22] border-b border-slate-800">
        <FolderIcon size={14} className="text-accent" />
        <span className="text-xs font-semibold uppercase tracking-wider text-textMuted font-sans">
          {title}
        </span>
      </div>

      {/* Tree Content */}
      <div className="p-3 bg-[#090d16]/40 select-none">
        {treeData.map((node, idx) => (
          <TreeNode key={idx} node={node} />
        ))}
      </div>
    </div>
  );
}
