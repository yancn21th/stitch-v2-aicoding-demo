import React from 'react'
import { appMeta } from '../data/mockData'

interface TopAppBarProps {
  readonly onSearch?: (query: string) => void
  readonly className?: string
}

export const TopAppBar: React.FC<TopAppBarProps> = ({ onSearch, className = '' }) => {
  return (
    <header
      className={`w-full h-16 sticky top-0 z-40 bg-gradient-to-b from-surface to-surface-container-low dark:from-slate-950 dark:to-slate-900 flex items-center justify-between px-8 border-b border-blue-100/20 dark:border-slate-700/20 ${className}`}
    >
      <div className="flex items-center gap-8">
        <h1 className="text-xl font-headline font-bold tracking-tight text-blue-800 dark:text-blue-300">
          {appMeta.appTitle}
        </h1>
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
            search
          </span>
          <input
            className="bg-surface-container-lowest dark:bg-slate-800 border-none rounded-full py-1.5 pl-10 pr-4 text-sm w-64 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-on-surface dark:text-slate-100 placeholder:text-on-surface-variant"
            placeholder={appMeta.searchPlaceholder}
            type="text"
            onChange={(e) => onSearch?.(e.target.value)}
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-slate-800 rounded-full transition-colors">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="p-2 text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-slate-800 rounded-full transition-colors">
          <span className="material-symbols-outlined">settings</span>
        </button>
        <div className="h-8 w-8 rounded-full overflow-hidden ml-2 bg-surface-container-high">
          <img src={appMeta.userAvatar.src} alt={appMeta.userAvatar.alt} />
        </div>
      </div>
    </header>
  )
}

export default TopAppBar
