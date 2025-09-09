'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import ContentArea from '@/components/ContentArea'

export default function Home() {
  const [activePage, setActivePage] = useState('')
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  const handlePageChange = (page: string) => {
    setActivePage(page)
  }

  const handleToggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed)
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar 
        activePage={activePage}
        onPageChange={handlePageChange}
        isCollapsed={isSidebarCollapsed}
        onToggleCollapse={handleToggleSidebar}
      />
      <ContentArea activePage={activePage} />
    </div>
  )
}
