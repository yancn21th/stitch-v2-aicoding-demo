import { useState } from 'react'
import { navLinks } from '../data/mockData'

export function useNavigation() {
  const [activeNav, setActiveNav] = useState(
    navLinks.find((l) => l.active)?.label ?? 'Dashboard',
  )

  const handleNavChange = (label: string) => {
    setActiveNav(label)
  }

  return { activeNav, handleNavChange }
}
