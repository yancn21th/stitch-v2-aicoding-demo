import React from 'react'
import { navLinks, bottomLinks, appMeta } from '../data/mockData'

interface SideNavBarProps {
  readonly activeNav?: string
  readonly onNavChange?: (label: string) => void
  readonly className?: string
}

export const SideNavBar: React.FC<SideNavBarProps> = ({
  activeNav = 'Dashboard',
  onNavChange,
  className = '',
}) => {
  return (
    <aside
      className={`h-screen w-64 fixed left-0 top-0 bg-surface-container-low dark:bg-slate-900 shadow-[20px_0_40px_rgba(11,28,48,0.03)] flex flex-col py-6 z-50 ${className}`}
    >
      {/* Logo */}
      <div className="px-6 mb-10 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white">
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            {appMeta.logoIcon}
          </span>
        </div>
        <div>
          <h2 className="font-headline font-extrabold text-blue-900 dark:text-blue-100 leading-tight">
            {appMeta.logoTitle}
          </h2>
          <p className="text-[10px] uppercase tracking-wider text-on-surface-variant font-bold">
            {appMeta.logoSubtitle}
          </p>
        </div>
      </div>

      {/* Nav links */}
      <nav className="flex-1 px-4 space-y-2">
        {navLinks.map((link) => {
          const isActive = link.label === activeNav
          return (
            <a
              key={link.label}
              href="#"
              onClick={(e) => {
                e.preventDefault()
                onNavChange?.(link.label)
              }}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-label font-medium transition-all duration-200 ${
                isActive
                  ? 'text-primary dark:text-blue-300 border-r-4 border-primary bg-blue-50/50 dark:bg-blue-900/20 translate-x-1'
                  : 'text-on-surface-variant dark:text-slate-400 hover:text-primary dark:hover:text-blue-300 hover:bg-surface-container-lowest/50 dark:hover:bg-slate-800/50'
              }`}
            >
              <span className="material-symbols-outlined">{link.icon}</span>
              <span>{link.label}</span>
            </a>
          )
        })}
      </nav>

      {/* Bottom actions */}
      <div className="px-4 mt-auto space-y-6">
        <button className="w-full signature-gradient text-white py-3 rounded-full font-headline font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 active:scale-95 transition-all">
          <span className="material-symbols-outlined text-sm">add</span>
          New Report
        </button>
        <div className="pt-6 border-t border-blue-100/50 dark:border-slate-700/50">
          {bottomLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-primary dark:hover:text-blue-300 transition-all text-sm font-label font-medium"
            >
              <span className="material-symbols-outlined">{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default SideNavBar
