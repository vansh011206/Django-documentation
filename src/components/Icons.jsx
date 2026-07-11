import React from 'react';

// Common SVG Wrapper Props
const defaultProps = (size, className) => ({
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: className
});

export const SearchIcon = ({ size = 18, className = "" }) => (
  <svg {...defaultProps(size, className)}>
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

export const MenuIcon = ({ size = 18, className = "" }) => (
  <svg {...defaultProps(size, className)}>
    <line x1="4" y1="12" x2="20" y2="12"></line>
    <line x1="4" y1="6" x2="20" y2="6"></line>
    <line x1="4" y1="18" x2="20" y2="18"></line>
  </svg>
);

export const XIcon = ({ size = 18, className = "" }) => (
  <svg {...defaultProps(size, className)}>
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export const CopyIcon = ({ size = 18, className = "" }) => (
  <svg {...defaultProps(size, className)}>
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

export const CheckIcon = ({ size = 18, className = "" }) => (
  <svg {...defaultProps(size, className)}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export const TerminalIcon = ({ size = 18, className = "" }) => (
  <svg {...defaultProps(size, className)}>
    <polyline points="4 17 10 11 4 5"></polyline>
    <line x1="12" y1="19" x2="20" y2="19"></line>
  </svg>
);

export const CodeIcon = ({ size = 18, className = "" }) => (
  <svg {...defaultProps(size, className)}>
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

export const FolderIcon = ({ size = 18, className = "" }) => (
  <svg {...defaultProps(size, className)}>
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
  </svg>
);

export const FileIcon = ({ size = 18, className = "" }) => (
  <svg {...defaultProps(size, className)}>
    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
    <polyline points="13 2 13 9 20 9"></polyline>
  </svg>
);

export const ChevronDownIcon = ({ size = 18, className = "" }) => (
  <svg {...defaultProps(size, className)}>
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

export const ChevronRightIcon = ({ size = 18, className = "" }) => (
  <svg {...defaultProps(size, className)}>
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

export const ChevronLeftIcon = ({ size = 18, className = "" }) => (
  <svg {...defaultProps(size, className)}>
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

export const InfoIcon = ({ size = 18, className = "" }) => (
  <svg {...defaultProps(size, className)}>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
);

export const WarningIcon = ({ size = 18, className = "" }) => (
  <svg {...defaultProps(size, className)}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

export const BookOpenIcon = ({ size = 18, className = "" }) => (
  <svg {...defaultProps(size, className)}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

export const ExternalLinkIcon = ({ size = 18, className = "" }) => (
  <svg {...defaultProps(size, className)}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

export const ArrowLeftIcon = ({ size = 18, className = "" }) => (
  <svg {...defaultProps(size, className)}>
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);

export const ArrowRightIcon = ({ size = 18, className = "" }) => (
  <svg {...defaultProps(size, className)}>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export const LightbulbIcon = ({ size = 18, className = "" }) => (
  <svg {...defaultProps(size, className)}>
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
    <line x1="9" y1="18" x2="15" y2="18"></line>
    <line x1="10" y1="22" x2="14" y2="22"></line>
  </svg>
);
