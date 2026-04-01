import React from 'react'
import { efficiencyMetric } from '../../data/mockData'

interface EfficiencyCardProps {
  readonly className?: string
}

export const EfficiencyCard: React.FC<EfficiencyCardProps> = ({ className = '' }) => {
  const { value, unit, label, icon } = efficiencyMetric

  return (
    <div
      className={`bg-surface-container-lowest dark:bg-slate-800 p-6 rounded-xl flex items-center gap-6 border-l-4 border-secondary shadow-[0_20px_40px_rgba(11,28,48,0.05)] ${className}`}
    >
      <div className="bg-secondary-fixed dark:bg-purple-900 w-14 h-14 rounded-full flex items-center justify-center text-secondary dark:text-purple-300 shrink-0">
        <span
          className="material-symbols-outlined text-3xl"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          {icon}
        </span>
      </div>
      <div>
        <h3 className="text-2xl font-headline font-extrabold text-on-surface dark:text-slate-100 leading-none">
          {value}{' '}
          <span className="text-sm font-label font-medium text-on-surface-variant dark:text-slate-400">
            {unit}
          </span>
        </h3>
        <p className="text-xs text-on-surface-variant dark:text-slate-400 font-label font-medium">
          {label}
        </p>
      </div>
    </div>
  )
}

export default EfficiencyCard
