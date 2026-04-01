import React from 'react'
import { ActiveReport } from './ActiveReport'
import { ComplianceCard } from './ComplianceCard'
import { EfficiencyCard } from './EfficiencyCard'

interface HeroMetricsProps {
  readonly className?: string
}

export const HeroMetrics: React.FC<HeroMetricsProps> = ({ className = '' }) => {
  return (
    <section className={`grid grid-cols-12 gap-6 ${className}`}>
      <ActiveReport />
      <div className="col-span-12 lg:col-span-4 space-y-6">
        <ComplianceCard className="h-[calc(50%-0.75rem)]" />
        <EfficiencyCard className="h-[calc(50%-0.75rem)]" />
      </div>
    </section>
  )
}

export default HeroMetrics
