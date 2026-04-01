import React from 'react'
import { aiInsight } from '../data/mockData'

interface AIInsightBannerProps {
  readonly onDismiss?: () => void
  readonly onAutoReconcile?: () => void
  readonly className?: string
}

export const AIInsightBanner: React.FC<AIInsightBannerProps> = ({
  onDismiss,
  onAutoReconcile,
  className = '',
}) => {
  const { icon, title, body, linkText, bodyEnd, actions } = aiInsight

  return (
    <section
      className={`glass-insight p-6 rounded-2xl border border-white/50 dark:border-slate-700/50 flex gap-6 items-start ${className}`}
    >
      <div className="w-10 h-10 bg-secondary dark:bg-purple-700 rounded-full flex items-center justify-center text-white shrink-0">
        <span
          className="material-symbols-outlined text-xl"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          {icon}
        </span>
      </div>

      <div className="space-y-2 flex-1">
        <h4 className="font-headline font-bold text-secondary dark:text-purple-300 text-sm">
          {title}
        </h4>
        <p className="text-sm text-on-surface-variant dark:text-slate-300 leading-relaxed">
          {body}{' '}
          <a
            href="#"
            className="text-primary dark:text-blue-400 font-label font-semibold underline decoration-2 decoration-primary/30"
          >
            {linkText}
          </a>{' '}
          {bodyEnd}
        </p>
      </div>

      <div className="flex gap-2 shrink-0">
        {actions.map((action) =>
          action.variant === 'ghost' ? (
            <button
              key={action.label}
              onClick={onDismiss}
              className="bg-white/80 dark:bg-slate-700 px-4 py-2 rounded-lg text-xs font-label font-bold text-on-surface dark:text-slate-200 hover:bg-white dark:hover:bg-slate-600 transition-colors shadow-sm"
            >
              {action.label}
            </button>
          ) : (
            <button
              key={action.label}
              onClick={onAutoReconcile}
              className="bg-secondary dark:bg-purple-700 text-white px-4 py-2 rounded-lg text-xs font-label font-bold hover:bg-on-secondary-fixed dark:hover:bg-purple-600 transition-colors shadow-sm"
            >
              {action.label}
            </button>
          ),
        )}
      </div>
    </section>
  )
}

export default AIInsightBanner
