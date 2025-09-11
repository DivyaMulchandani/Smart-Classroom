'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { ClipboardList, FileText, Calendar, Users, CheckSquare, GraduationCap, ChevronDown } from 'lucide-react'

interface SidebarAdminProps {
  isCollapsed: boolean
  onToggleCollapse: () => void
}

const links = [
  { href: '/attendance', label: 'Attendance Management', icon: CheckSquare },
  { href: '/results', label: 'Results Management', icon: GraduationCap },
  { href: '/courses', label: 'Courses', icon: ClipboardList },
  { href: '/schedule', label: 'Schedule', icon: Calendar },
  { href: '/documents', label: 'Academic Documents', icon: FileText },
  { href: '/appointments', label: 'Counselling & Appointments', icon: Users }
]

export default function SidebarAdmin({ isCollapsed, onToggleCollapse }: SidebarAdminProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <aside className={cn(
      'bg-white border-r border-gray-200 transition-all duration-300 flex flex-col shadow-sm',
      isCollapsed ? 'w-16' : 'w-64'
    )}>
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <h1 className="text-xl font-bold text-gray-800">Admin ERP</h1>
          )}
          <button
            onClick={onToggleCollapse}
            className={cn(
              'p-2 rounded-lg transition-all duration-200',
              isCollapsed ? 'hover:bg-gray-100 w-full flex justify-center' : 'hover:bg-gray-100'
            )}
            title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <ChevronDown className={cn('w-5 h-5 text-gray-600 transition-transform duration-200', isCollapsed && 'rotate-90')} />
          </button>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {links.map(({ href, label, icon: Icon }) => {
          const active = pathname?.startsWith(href)
          return (
            <button
              key={href}
              onClick={() => router.push(href)}
              onMouseEnter={() => setHovered(href)}
              onMouseLeave={() => setHovered(null)}
              className={cn(
                'w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors',
                active ? 'bg-blue-50 text-blue-700 border-l-2 border-blue-700' : 'hover:bg-gray-50 text-gray-700'
              )}
              title={label}
            >
              <Icon className="w-5 h-5" />
              {!isCollapsed && <span className="text-sm">{label}</span>}
            </button>
          )
        })}
      </nav>

      <div className="p-4 border-t border-gray-200">
        {!isCollapsed ? (
          <div className="text-xs text-gray-500 text-center">Faculty/Admin Panel</div>
        ) : (
          <div className="flex justify-center">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-blue-600">A</span>
            </div>
          </div>
        )}
      </div>
    </aside>
  )
}
