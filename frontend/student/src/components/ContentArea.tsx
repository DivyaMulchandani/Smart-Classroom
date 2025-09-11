'use client'

import { 
  Clock, 
  Award, 
  MessageSquare, 
  CreditCard, 
  ClipboardList, 
  BookOpen, 
  BarChart3, 
  Calendar,
  Mail,
  Book,
  Shield,
  Calendar as CalendarIcon,
  FileCheck,
  Users
} from 'lucide-react'

interface ContentAreaProps {
  activePage: string
}

const pageConfig = {
  'attendance': {
    title: 'Attendance',
    icon: <Clock className="w-6 h-6" />,
    description: 'View your attendance records and statistics'
  },
  'result': {
    title: 'Results',
    icon: <Award className="w-6 h-6" />,
    description: 'Check your academic results and grades'
  },
  'feedback': {
    title: 'Feedback',
    icon: <MessageSquare className="w-6 h-6" />,
    description: 'Submit and view feedback'
  },
  'academic-fees': {
    title: 'Academic Fees',
    icon: <CreditCard className="w-6 h-6" />,
    description: 'View and manage your academic fees'
  },
  'course-registration': {
    title: 'Course Registration',
    icon: <ClipboardList className="w-6 h-6" />,
    description: 'Register for courses and manage your schedule'
  },
  'minor-registration': {
    title: 'Minor Registration',
    icon: <BookOpen className="w-6 h-6" />,
    description: 'Register for minor courses'
  },
  'repeater-course-registration': {
    title: 'Repeater Course Registration',
    icon: <BookOpen className="w-6 h-6" />,
    description: 'Register for courses you need to repeat'
  },
  'schedule': {
    title: 'Schedule / Timetable',
    icon: <Calendar className="w-6 h-6" />,
    description: 'View your class schedule and timetable'
  },
  'credit-summary': {
    title: 'Credit Summary',
    icon: <BarChart3 className="w-6 h-6" />,
    description: 'View your academic credit summary'
  },
  'nuv-email': {
    title: 'NUV Email',
    icon: <Mail className="w-6 h-6" />,
    description: 'Access your university email account'
  },
  'student-handbook': {
    title: 'Student Handbook',
    icon: <Book className="w-6 h-6" />,
    description: 'Download and view the student handbook'
  },
  'academic-regulation': {
    title: 'Academic Regulation',
    icon: <Shield className="w-6 h-6" />,
    description: 'View academic rules and regulations'
  },
  'harassment-free-zone': {
    title: 'Harassment Free Zone',
    icon: <Shield className="w-6 h-6" />,
    description: 'Information about harassment-free policies'
  },
  'academic-calendar': {
    title: 'Academic Calendar',
    icon: <CalendarIcon className="w-6 h-6" />,
    description: 'View important academic dates and events'
  },
  'course-catalog': {
    title: 'Course Catalog 2025–2026',
    icon: <FileCheck className="w-6 h-6" />,
    description: 'Browse available courses for 2025-2026'
  },
  'discipline-regulation': {
    title: 'Regulation for Maintaining Discipline',
    icon: <Shield className="w-6 h-6" />,
    description: 'View discipline and conduct regulations'
  },
  'counselling-session': {
    title: 'Appointment – Counselling Session',
    icon: <Users className="w-6 h-6" />,
    description: 'Schedule and manage counselling appointments'
  }
}

export default function ContentArea({ activePage }: ContentAreaProps) {
  const config = pageConfig[activePage as keyof typeof pageConfig] || {
    title: 'Welcome',
    icon: <Award className="w-6 h-6" />,
    description: 'Select a page from the sidebar to get started'
  }

  return (
    <div className="flex-1 bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            {config.icon}
            <h1 className="text-3xl font-bold text-gray-900">{config.title}</h1>
          </div>
          <p className="text-gray-600">{config.description}</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          {activePage === 'attendance' && <AttendanceContent />}
          {activePage === 'result' && <ResultContent />}
          {activePage === 'feedback' && <FeedbackContent />}
          {activePage === 'academic-fees' && <FeesContent />}
          {activePage === 'course-registration' && <CourseRegistrationContent />}
          {activePage === 'minor-registration' && <MinorRegistrationContent />}
          {activePage === 'repeater-course-registration' && <RepeaterCourseContent />}
          {activePage === 'schedule' && <ScheduleContent />}
          {activePage === 'credit-summary' && <CreditSummaryContent />}
          {activePage === 'nuv-email' && <EmailContent />}
          {activePage === 'student-handbook' && <HandbookContent />}
          {activePage === 'academic-regulation' && <RegulationContent />}
          {activePage === 'harassment-free-zone' && <HarassmentFreeContent />}
          {activePage === 'academic-calendar' && <CalendarContent />}
          {activePage === 'course-catalog' && <CatalogContent />}
          {activePage === 'discipline-regulation' && <DisciplineContent />}
          {activePage === 'counselling-session' && <CounsellingContent />}
          {!activePage && <WelcomeContent />}
        </div>
      </div>
    </div>
  )
}

// Placeholder content components
function WelcomeContent() {
  return (
    <div className="text-center py-12">
      <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <Award className="w-12 h-12 text-blue-600" />
      </div>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Welcome to Student ERP</h2>
      <p className="text-gray-600 max-w-md mx-auto mb-6">
        Your comprehensive academic portal. Use the sidebar to navigate to different sections and manage your academic journey.
      </p>
      
      {/* New Features Info */}
      <div className="max-w-2xl mx-auto mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">✨ Enhanced Sidebar Features</h3>
        <div className="text-left space-y-2 text-sm text-blue-800">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span><strong>Collapsible Design:</strong> Click the toggle button to minimize the sidebar</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span><strong>Three Main Sections:</strong> Academic, Documents, and Appointment when collapsed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span><strong>Big Icons:</strong> Larger, more prominent icons in collapsed mode</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span><strong>Smart Navigation:</strong> Click main section icons to access first item in that section</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span><strong>Hover Tooltips:</strong> Hover over icons to see section names</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function AttendanceContent() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Attendance Overview</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-green-600">93.3%</div>
          <div className="text-sm text-green-700">Overall Attendance</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">28/30</div>
          <div className="text-sm text-blue-700">Classes Attended</div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-yellow-600">2</div>
          <div className="text-sm text-yellow-700">Classes Missed</div>
        </div>
      </div>
    </div>
  )
}

function ResultContent() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Academic Results</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
          <div>
            <div className="font-medium">CS101 - Introduction to Computer Science</div>
            <div className="text-sm text-gray-600">3 Credits</div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-green-600">A</div>
            <div className="text-sm text-gray-600">4.0 GPA</div>
          </div>
        </div>
        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
          <div>
            <div className="font-medium">MATH201 - Calculus II</div>
            <div className="text-sm text-gray-600">4 Credits</div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-green-600">A-</div>
            <div className="text-sm text-gray-600">3.7 GPA</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeedbackContent() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Feedback System</h3>
      <p className="text-gray-600 mb-4">Submit feedback about your courses, instructors, or general academic experience.</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
        Submit New Feedback
      </button>
    </div>
  )
}

function FeesContent() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Academic Fees</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-medium mb-2">Fee Breakdown</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Tuition</span>
              <span>$15,000</span>
            </div>
            <div className="flex justify-between">
              <span>Registration</span>
              <span>$500</span>
            </div>
            <div className="flex justify-between">
              <span>Library</span>
              <span>$200</span>
            </div>
            <div className="flex justify-between font-bold border-t pt-2">
              <span>Total</span>
              <span>$16,100</span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-medium mb-2">Payment Status</h4>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-green-600 font-semibold">Fully Paid</div>
            <div className="text-sm text-green-700">Balance: $0</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CourseRegistrationContent() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Course Registration</h3>
      <p className="text-gray-600 mb-4">Register for courses for the upcoming semester.</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
        Start Registration
      </button>
    </div>
  )
}

function MinorRegistrationContent() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Minor Registration</h3>
      <p className="text-gray-600 mb-4">Register for minor courses to complement your major.</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
        Register for Minor
      </button>
    </div>
  )
}

function RepeaterCourseContent() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Repeater Course Registration</h3>
      <p className="text-gray-600 mb-4">Register for courses you need to repeat.</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
        Register for Repeater Course
      </button>
    </div>
  )
}

function ScheduleContent() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Class Schedule</h3>
      <div className="space-y-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="font-medium">Monday</div>
          <div className="text-sm text-gray-600">09:00 - 10:30 | CS101 | CS-101</div>
          <div className="text-sm text-gray-600">11:00 - 12:30 | MATH201 | MATH-205</div>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="font-medium">Tuesday</div>
          <div className="text-sm text-gray-600">10:00 - 11:30 | PHYS101 | PHYS-103</div>
          <div className="text-sm text-gray-600">14:00 - 15:30 | ENG101 | ENG-201</div>
        </div>
      </div>
    </div>
  )
}

function CreditSummaryContent() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Credit Summary</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-blue-600">14</div>
          <div className="text-sm text-blue-700">Credits Completed</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-green-600">3.75</div>
          <div className="text-sm text-green-700">Semester GPA</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-purple-600">3.68</div>
          <div className="text-sm text-purple-700">Cumulative GPA</div>
        </div>
      </div>
    </div>
  )
}

function EmailContent() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">NUV Email</h3>
      <p className="text-gray-600 mb-4">Access your university email account.</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
        Open Email
      </button>
    </div>
  )
}

function HandbookContent() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Student Handbook</h3>
      <p className="text-gray-600 mb-4">Download and view the comprehensive student handbook.</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
        Download Handbook
      </button>
    </div>
  )
}

function RegulationContent() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Academic Regulations</h3>
      <p className="text-gray-600 mb-4">View academic rules, policies, and regulations.</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
        View Regulations
      </button>
    </div>
  )
}

function HarassmentFreeContent() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Harassment Free Zone</h3>
      <p className="text-gray-600 mb-4">Information about harassment-free policies and reporting procedures.</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
        View Policies
      </button>
    </div>
  )
}

function CalendarContent() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Academic Calendar</h3>
      <p className="text-gray-600 mb-4">View important academic dates, holidays, and events.</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
        View Calendar
      </button>
    </div>
  )
}

function CatalogContent() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Course Catalog 2025–2026</h3>
      <p className="text-gray-600 mb-4">Browse available courses for the 2025-2026 academic year.</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
        Browse Catalog
      </button>
    </div>
  )
}

function DisciplineContent() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Discipline Regulations</h3>
      <p className="text-gray-600 mb-4">View regulations for maintaining discipline and conduct.</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
        View Regulations
      </button>
    </div>
  )
}

function CounsellingContent() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Counselling Sessions</h3>
      <p className="text-gray-600 mb-4">Schedule and manage your counselling appointments.</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
        Schedule Appointment
      </button>
    </div>
  )
}
