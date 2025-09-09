'use client'

import { useEffect, useState } from 'react'
import Sidebar from '@/components/Sidebar'
import ContentArea from '@/components/ContentArea'

function useAuthGuard() {
  const [authorized, setAuthorized] = useState(false)
  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
    if (!token) {
      window.location.href = '/login'
    } else {
      setAuthorized(true)
    }
  }, [])
  return authorized
}

export default function Home() {
  const [activePage, setActivePage] = useState('')
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const authorized = useAuthGuard()

  const handlePageChange = (page: string) => {
    setActivePage(page)
  }

  const handleToggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed)
  }

  if (!authorized) return null
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
