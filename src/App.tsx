import { SideNavBar } from './components/SideNavBar'
import { TopAppBar } from './components/TopAppBar'
import { HeroMetrics } from './components/HeroMetrics/HeroMetrics'
import { ActionCards } from './components/ActionCards'
import { RecentDrafts } from './components/RecentDrafts/RecentDrafts'
import { AIInsightBanner } from './components/AIInsightBanner'
import { useNavigation } from './hooks/useNavigation'

function App() {
  const { activeNav, handleNavChange } = useNavigation()

  return (
    <div className="bg-surface dark:bg-slate-950 min-h-screen font-body text-on-surface">
      <SideNavBar activeNav={activeNav} onNavChange={handleNavChange} />

      <main className="ml-64 min-h-screen">
        <TopAppBar />

        <div className="p-12 space-y-12">
          <HeroMetrics />
          <ActionCards />
          <RecentDrafts />
          <AIInsightBanner />
        </div>
      </main>
    </div>
  )
}

export default App
