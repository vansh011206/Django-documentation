import React from 'react';
import { WarningIcon, InfoIcon, LightbulbIcon } from './Icons';

export default function Callout({ type = 'info', children, title }) {
  const getStyles = () => {
    switch (type) {
      case 'warning':
        return {
          border: 'border-l-4 border-amber-500',
          bg: 'bg-amber-950/20',
          iconColor: 'text-amber-400',
          icon: <WarningIcon size={20} className="text-amber-400 shrink-0" />,
          defaultTitle: 'WARNING'
        };
      case 'tip':
        return {
          border: 'border-l-4 border-accent',
          bg: 'bg-accent/5',
          iconColor: 'text-accent',
          icon: <LightbulbIcon size={20} className="text-accent shrink-0" />,
          defaultTitle: 'TIP'
        };
      case 'info':
      default:
        return {
          border: 'border-l-4 border-cyan-500',
          bg: 'bg-cyan-950/20',
          iconColor: 'text-cyan-400',
          icon: <InfoIcon size={20} className="text-cyan-400 shrink-0" />,
          defaultTitle: 'INFO'
        };
    }
  };

  const styles = getStyles();

  return (
    <div className={`my-6 p-4 rounded-r-lg ${styles.border} ${styles.bg} flex items-start gap-3 shadow-md`}>
      <div className="mt-0.5">{styles.icon}</div>
      <div className="flex-1">
        <h4 className={`text-xs font-bold uppercase tracking-wider mb-1 ${styles.iconColor}`}>
          {title || styles.defaultTitle}
        </h4>
        <div className="text-sm text-textMain leading-relaxed font-sans">
          {children}
        </div>
      </div>
    </div>
  );
}
