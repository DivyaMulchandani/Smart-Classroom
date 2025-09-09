"use client"

import { useState } from 'react'
import SidebarAdmin from '@/components/admin/SidebarAdmin'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <div className="min-h-screen flex">
      <SidebarAdmin isCollapsed={collapsed} onToggleCollapse={() => setCollapsed(v => !v)} />
      <main className="flex-1 bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}


