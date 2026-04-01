import React from 'react'
import { complianceMetric } from '../../data/mockData'

interface ComplianceCardProps {
  readonly className?: string
}

export const ComplianceCard: React.FC<ComplianceCardProps> = ({ className = '' }) => {
  const { label, value, footnote, icon } = complianceMetric

  return (
    <div
      className={`bg-tertiary-container dark:bg-green-900 text-white p-6 rounded-xl flex flex-col justify-between relative overflow-hidden ${className}`}
    >
      <span
        className="material-symbols-outlined absolute -bottom-4 -right-4 text-8xl opacity-10"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        {icon}
      </span>
      <div>
        <p className="text-xs font-label font-medium text-tertiary-fixed dark:text-green-200 opacity-90 uppercase tracking-widest mb-1">
          {label}
        </p>
        <h3 className="text-4xl font-headline font-extrabold">{value}</h3>
      </div>
      <p className="text-[10px] opacity-80 mt-2 font-label font-medium">{footnote}</p>
    </div>
  )
}

export default ComplianceCard
