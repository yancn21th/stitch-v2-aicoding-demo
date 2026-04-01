import React from 'react'
import { actionCardItems, pendingApprovals } from '../data/mockData'

interface ActionCardsProps {
  readonly className?: string
}

export const ActionCards: React.FC<ActionCardsProps> = ({ className = '' }) => {
  return (
    <section className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${className}`}>
      {actionCardItems.map((card) => (
        <button
          key={card.title}
          className="bg-surface-container-low dark:bg-slate-800 p-6 rounded-xl text-left group hover:bg-primary dark:hover:bg-primary transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-xl bg-surface-container-lowest dark:bg-slate-700 flex items-center justify-center mb-4 text-primary group-hover:text-white transition-colors">
            <span className="material-symbols-outlined">{card.icon}</span>
          </div>
          <h4 className="font-headline font-bold text-on-surface dark:text-slate-100 group-hover:text-white transition-colors">
            {card.title}
          </h4>
          <p className="text-xs text-on-surface-variant dark:text-slate-400 group-hover:text-blue-100 mt-1 transition-colors">
            {card.description}
          </p>
        </button>
      ))}

      {/* Pending Approvals */}
      <div className="bg-surface-container-highest/30 dark:bg-slate-700/30 p-6 rounded-xl flex items-center justify-between border-2 border-dashed border-outline-variant dark:border-slate-600">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-error animate-pulse" />
            <h4 className="font-headline font-bold text-on-surface dark:text-slate-100">
              {pendingApprovals.label}
            </h4>
          </div>
          <p className="text-xs text-on-surface-variant dark:text-slate-400">
            {pendingApprovals.description}
          </p>
        </div>
        <span className="text-4xl font-headline font-extrabold text-primary dark:text-blue-400">
          {String(pendingApprovals.count).padStart(2, '0')}
        </span>
      </div>
    </section>
  )
}

export default ActionCards
