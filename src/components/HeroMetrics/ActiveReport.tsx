import React from 'react'
import { activeReport } from '../../data/mockData'

interface ActiveReportProps {
  readonly className?: string
}

export const ActiveReport: React.FC<ActiveReportProps> = ({ className = '' }) => {
  const { badge, timeLeft, title, phase, progress, description, actions } = activeReport

  return (
    <div
      className={`col-span-12 lg:col-span-8 bg-surface-container-lowest dark:bg-slate-800 rounded-xl p-8 flex flex-col justify-between relative overflow-hidden group ${className}`}
    >
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 dark:bg-blue-900/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-blue-100/50 transition-colors" />

      <div className="relative">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-blue-100 dark:bg-blue-900/40 text-primary dark:text-blue-300 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest">
            {badge}
          </span>
          <span className="text-on-surface-variant dark:text-slate-400 text-xs">• {timeLeft}</span>
        </div>
        <h2 className="text-2xl font-headline font-extrabold text-on-surface dark:text-slate-100 mb-8">
          {title}
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between items-end">
            <span className="text-sm font-label font-medium text-on-surface-variant dark:text-slate-400">
              {phase}
            </span>
            <span className="text-sm font-bold text-primary">{progress}%</span>
          </div>
          <div className="h-3 w-full bg-surface-container dark:bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full signature-gradient rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-on-surface-variant dark:text-slate-400 max-w-md">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        {actions.map((action) =>
          action.variant === 'secondary' ? (
            <button
              key={action.label}
              className="px-6 py-2.5 bg-surface-container-high dark:bg-slate-700 text-on-primary-fixed-variant dark:text-slate-200 rounded-full text-xs font-bold transition-all hover:bg-surface-container-highest dark:hover:bg-slate-600"
            >
              {action.label}
            </button>
          ) : (
            <button
              key={action.label}
              className="px-6 py-2.5 text-primary dark:text-blue-400 text-xs font-bold hover:underline transition-all"
            >
              {action.label}
            </button>
          ),
        )}
      </div>
    </div>
  )
}

export default ActiveReport
