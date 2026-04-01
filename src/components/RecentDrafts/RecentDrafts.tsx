import React from 'react'
import { recentDrafts } from '../../data/mockData'
import { DraftRow } from './DraftRow'

interface RecentDraftsProps {
  readonly className?: string
}

export const RecentDrafts: React.FC<RecentDraftsProps> = ({ className = '' }) => {
  return (
    <section className={`space-y-6 ${className}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-headline font-bold text-on-surface dark:text-slate-100">
          Recent Drafts
        </h3>
        <button className="text-sm font-label font-semibold text-primary dark:text-blue-400 flex items-center gap-1 hover:underline">
          View All Reports
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </div>
      <div className="space-y-3">
        {recentDrafts.map((draft) => (
          <DraftRow key={draft.id} draft={draft} />
        ))}
      </div>
    </section>
  )
}

export default RecentDrafts
