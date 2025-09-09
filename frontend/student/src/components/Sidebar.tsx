'use client'

import { useState } from 'react'
import { 
  ChevronDown, 
  ChevronRight, 
  GraduationCap, 
  FileText, 
  Calendar,
  BookOpen,
  Award,
  MessageSquare,
  CreditCard,
  ClipboardList,
  Clock,
  BarChart3,
  Mail,
  Book,
  Shield,
  Calendar as CalendarIcon,
  FileCheck,
  Users
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface MenuItem {
  id: string
  label: string
  icon: React.ReactNode
  href?: string
  children?: MenuItem[]
}

interface SidebarProps {
  activePage: string
  onPageChange: (page: string) => void
  isCollapsed: boolean
  onToggleCollapse: () => void
}

const menuItems: MenuItem[] = [
  {
    id: 'academic',
    label: 'Academic',
    icon: <GraduationCap className="w-5 h-5" />,
    children: [
      { id: 'attendance', label: 'Attendance', icon: <Clock className="w-4 h-4" />, href: '/attendance' },
      { id: 'result', label: 'Result', icon: <Award className="w-4 h-4" />, href: '/result' },
      { id: 'feedback', label: 'Feedback', icon: <MessageSquare className="w-4 h-4" />, href: '/feedback' },
      { id: 'academic-fees', label: 'Academic Fees', icon: <CreditCard className="w-4 h-4" />, href: '/academic-fees' },
      { id: 'course-registration', label: 'Course Registration', icon: <ClipboardList className="w-4 h-4" />, href: '/course-registration' },
      { id: 'minor-registration', label: 'Minor Registration', icon: <BookOpen className="w-4 h-4" />, href: '/minor-registration' },
      { id: 'repeater-course-registration', label: 'Repeater Course Registration', icon: <BookOpen className="w-4 h-4" />, href: '/repeater-course-registration' },
      { id: 'schedule', label: 'Schedule / Timetable', icon: <Calendar className="w-4 h-4" />, href: '/schedule' },
      { id: 'credit-summary', label: 'Credit Summary', icon: <BarChart3 className="w-4 h-4" />, href: '/credit-summary' }
    ]
  },
  {
    id: 'academic-documents',
    label: 'Academic Documents',
    icon: <FileText className="w-5 h-5" />,
    children: [
      { id: 'nuv-email', label: 'NUV Email', icon: <Mail className="w-4 h-4" />, href: '/nuv-email' },
      { id: 'student-handbook', label: 'Student Handbook', icon: <Book className="w-4 h-4" />, href: '/student-handbook' },
      { id: 'academic-regulation', label: 'Academic Regulation', icon: <Shield className="w-4 h-4" />, href: '/academic-regulation' },
      { id: 'harassment-free-zone', label: 'Harassment Free Zone', icon: <Shield className="w-4 h-4" />, href: '/harassment-free-zone' },
      { id: 'academic-calendar', label: 'Academic Calendar', icon: <CalendarIcon className="w-4 h-4" />, href: '/academic-calendar' },
      { id: 'course-catalog', label: 'Course Catalog 2025–2026', icon: <FileCheck className="w-4 h-4" />, href: '/course-catalog' },
      { id: 'discipline-regulation', label: 'Regulation for Maintaining Discipline', icon: <Shield className="w-4 h-4" />, href: '/discipline-regulation' }
    ]
  },
  {
    id: 'appointment',
    label: 'Appointment – Counselling Session',
    icon: <Users className="w-5 h-5" />,
    children: [
      { id: 'counselling-session', label: 'Appointment – Counselling Session', icon: <Users className="w-4 h-4" />, href: '/counselling-session' }
    ]
  }
]

export default function Sidebar({ activePage, onPageChange, isCollapsed, onToggleCollapse }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(['academic'])
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    )
  }

  const handleItemClick = (item: MenuItem) => {
    if (isCollapsed) {
      // In collapsed mode, clicking a main section should expand it and show first child
      if (item.children && item.children.length > 0) {
        toggleSection(item.id)
        onPageChange(item.children[0].id)
      }
    } else {
      // In expanded mode, normal behavior
      if (item.href) {
        onPageChange(item.id)
      } else if (item.children) {
        toggleSection(item.id)
      }
    }
  }

  const isActive = (itemId: string) => {
    if (activePage === itemId) return true
    
    // Check if any child of this section is active
    const section = menuItems.find(s => s.id === itemId)
    if (section?.children) {
      return section.children.some(child => child.id === activePage)
    }
    
    return false
  }

  const isSectionExpanded = (sectionId: string) => {
    return expandedSections.includes(sectionId)
  }

  // Get only the main sections for collapsed mode
  const getMainSections = () => {
    return menuItems.map(section => ({
      ...section,
      href: section.children?.[0]?.href || `#${section.id}` // Use first child's href or section id
    }))
  }

  return (
    <div className={cn(
      "bg-white border-r border-gray-200 transition-all duration-300 flex flex-col shadow-sm",
      isCollapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <h1 className="text-xl font-bold text-gray-800">Student ERP</h1>
          )}
          <button
            onClick={onToggleCollapse}
            className={cn(
              "p-2 rounded-lg transition-all duration-200",
              isCollapsed 
                ? "hover:bg-gray-100 w-full flex justify-center" 
                : "hover:bg-gray-100"
            )}
            title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <ChevronDown className={cn(
              "w-5 h-5 text-gray-600 transition-transform duration-200", 
              isCollapsed && "rotate-90"
            )} />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {isCollapsed ? (
          // Collapsed mode - show only main sections as big clickable icons
          <div className="space-y-3">
            {getMainSections().map((section) => (
              <div key={section.id} className="relative">
                <button
                  onClick={() => handleItemClick(section)}
                  onMouseEnter={() => setHoveredItem(section.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={cn(
                    "w-full flex items-center justify-center p-4 rounded-lg transition-all duration-200",
                    isActive(section.id) || expandedSections.includes(section.id)
                      ? "bg-blue-100 text-blue-700 shadow-sm"
                      : "hover:bg-gray-100 text-gray-600 hover:text-gray-800"
                  )}
                  title={section.label}
                >
                  <div className="w-8 h-8">
                    {section.icon}
                  </div>
                </button>
                
                {/* Tooltip */}
                {hoveredItem === section.id && (
                  <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 z-50 animate-in fade-in-0 slide-in-from-left-2 duration-200">
                    <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
                      {section.label}
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 rotate-45"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          // Expanded mode - show sections with dropdowns
          menuItems.map((section) => (
            <div key={section.id}>
              {/* Section Header */}
              <button
                onClick={() => handleItemClick(section)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors",
                  "hover:bg-gray-100 text-gray-700 font-medium"
                )}
              >
                {section.icon}
                <span className="flex-1">{section.label}</span>
                {section.children && (
                  isSectionExpanded(section.id) ? 
                    <ChevronDown className="w-4 h-4" /> : 
                    <ChevronRight className="w-4 h-4" />
                )}
              </button>

              {/* Section Children */}
              {section.children && isSectionExpanded(section.id) && (
                <div className="ml-6 mt-2 space-y-1">
                  {section.children.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleItemClick(item)}
                      className={cn(
                        "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors",
                        isActive(item.id)
                          ? "bg-blue-50 text-blue-700 border-l-2 border-blue-700"
                          : "hover:bg-gray-50 text-gray-600"
                      )}
                    >
                      {item.icon}
                      <span className="text-sm">{item.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        {!isCollapsed ? (
          <div className="text-xs text-gray-500 text-center">
            Student Portal v1.0
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-blue-600">S</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
