import React from 'react'
import { type DraftItem } from '../../data/mockData'

interface DraftRowProps {
  readonly draft: DraftItem
  readonly className?: string
}

export const DraftRow: React.FC<DraftRowProps> = ({ draft, className = '' }) => {
  return (
    <div
      className={`bg-surface-container-lowest dark:bg-slate-800 p-5 rounded-xl flex items-center justify-between hover:translate-x-1 transition-all duration-200 group ${className}`}
    >
      {/* Left: icon + text */}
      <div className="flex items-center gap-6 flex-1">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center ${draft.iconBg} ${draft.iconColor}`}
        >
          <span className="material-symbols-outlined">{draft.icon}</span>
        </div>
        <div>
          <h5 className="font-label font-bold text-on-surface dark:text-slate-100 text-sm">
            {draft.title}
          </h5>
          <p className="text-[10px] text-on-surface-variant dark:text-slate-500 font-label font-medium">
            {draft.meta}
          </p>
        </div>
      </div>

      {/* Right: collaborators + status + menu */}
      <div className="flex items-center gap-12">
        <div className="flex -space-x-2">
          {draft.collaborators.map((collab, idx) =>
            'src' in collab ? (
              <div
                key={idx}
                className="w-7 h-7 rounded-full border-2 border-surface-container-lowest dark:border-slate-700 bg-surface-container overflow-hidden"
              >
                <img src={collab.src} alt={collab.alt} />
              </div>
            ) : (
              <div
                key={idx}
                className={`w-7 h-7 rounded-full border-2 border-surface-container-lowest dark:border-slate-700 ${collab.bg} flex items-center justify-center text-[8px] text-white font-bold`}
              >
                {collab.initials}
              </div>
            ),
          )}
        </div>
        <span
          className={`px-3 py-1 text-[10px] font-label font-bold rounded-full uppercase tracking-tighter ${draft.statusStyle}`}
        >
          {draft.status}
        </span>
        <button className="p-2 opacity-0 group-hover:opacity-100 transition-opacity text-on-surface-variant hover:text-primary">
          <span className="material-symbols-outlined">more_horiz</span>
        </button>
      </div>
    </div>
  )
}

export default DraftRow
