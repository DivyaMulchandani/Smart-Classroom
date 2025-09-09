# Student ERP - Smart Classroom Web Portal

A modern, responsive Student ERP system built with Next.js frontend and Node.js backend, featuring a comprehensive academic portal with sidebar navigation and dynamic content loading.

## Features

### 🎓 Academic Management
- **Attendance Tracking** - View attendance records and statistics
- **Results & Grades** - Check academic results and GPA
- **Feedback System** - Submit and view course feedback
- **Academic Fees** - Manage tuition and fee payments
- **Course Registration** - Register for courses and manage schedule
- **Minor Registration** - Register for minor courses
- **Repeater Course Registration** - Register for courses to repeat
- **Schedule/Timetable** - View class schedules and timetables
- **Credit Summary** - Track academic credits and progress

### 📚 Academic Documents
- **NUV Email** - Access university email
- **Student Handbook** - Download comprehensive handbook
- **Academic Regulations** - View academic rules and policies
- **Harassment Free Zone** - Information about harassment policies
- **Academic Calendar** - View important dates and events
- **Course Catalog 2025-2026** - Browse available courses
- **Discipline Regulations** - View conduct and discipline rules

### 👥 Counselling & Support
- **Appointment System** - Schedule counselling sessions

## Technology Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **shadcn/ui** - Modern UI components

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **JSON** - Mock data storage

## Prerequisites

Before running this project, make sure you have the following installed:

1. **Node.js** (v18 or higher)
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version`

2. **npm** (comes with Node.js)
   - Verify installation: `npm --version`

## Installation & Setup

### 1. Install Dependencies

```bash
# Install frontend dependencies
npm install

# The package.json includes all required dependencies:
# - Next.js, React, TypeScript
# - TailwindCSS, Lucide React
# - Express.js, CORS for backend
```

### 2. Start the Development Servers

#### Frontend (Next.js)
```bash
npm run dev
```
The frontend will be available at: `http://localhost:3000`

#### Backend (Node.js/Express)
```bash
npm run server
```
The backend API will be available at: `http://localhost:3001`

### 3. Access the Application

1. Open your browser and navigate to `http://localhost:3000`
2. The sidebar will show three main sections:
   - **Academic** - Core academic functions
   - **Academic Documents** - University documents and policies
   - **Appointment** - Counselling and support services

## Project Structure

```
student-erp/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and CSS variables
│   │   ├── layout.tsx           # Root layout component
│   │   └── page.tsx             # Main page component
│   ├── components/
│   │   ├── Sidebar.tsx          # Navigation sidebar component
│   │   └── ContentArea.tsx      # Main content area component
│   └── lib/
│       └── utils.ts             # Utility functions
├── server/
│   ├── index.js                 # Express server setup
│   └── data/                    # Mock JSON data files
│       ├── attendance.json
│       ├── results.json
│       ├── fees.json
│       └── schedule.json
├── package.json                 # Dependencies and scripts
├── tailwind.config.ts           # TailwindCSS configuration
├── tsconfig.json                # TypeScript configuration
└── README.md                    # This file
```

## API Endpoints

The backend provides the following API endpoints:

- `GET /api/attendance` - Student attendance data
- `GET /api/results` - Academic results and grades
- `GET /api/fees` - Fee information and payment status
- `GET /api/schedule` - Class schedule and timetable
- `GET /api/feedback` - Feedback system data
- `GET /api/course-registration` - Course registration data
- `GET /api/credit-summary` - Academic credit summary
- `GET /api/health` - Server health check

## Features Overview

### 🎨 Modern UI/UX
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Collapsible Sidebar** - Space-efficient navigation
- **Active Page Highlighting** - Clear visual feedback
- **Clean Academic Theme** - Professional university portal look

### 🔧 Technical Features
- **TypeScript** - Full type safety
- **Component-based Architecture** - Modular and maintainable
- **Dynamic Routing** - Client-side navigation
- **Mock Data Integration** - Ready for real API integration
- **Modern CSS** - TailwindCSS with custom design system

### 📱 Responsive Behavior
- **Desktop** - Full sidebar with expanded navigation
- **Tablet** - Collapsible sidebar for better content space
- **Mobile** - Optimized mobile navigation

## Development

### Available Scripts

```bash
# Development
npm run dev          # Start Next.js development server
npm run server       # Start Express backend server

# Production
npm run build        # Build Next.js for production
npm run start        # Start Next.js production server
npm run lint         # Run ESLint
```

### Customization

1. **Styling** - Modify `src/app/globals.css` and `tailwind.config.ts`
2. **Components** - Update components in `src/components/`
3. **API Data** - Modify JSON files in `server/data/`
4. **Navigation** - Update menu items in `src/components/Sidebar.tsx`

## Future Enhancements

- [ ] User authentication and authorization
- [ ] Real database integration (PostgreSQL/MongoDB)
- [ ] Real-time notifications
- [ ] File upload/download functionality
- [ ] Advanced reporting and analytics
- [ ] Mobile app development
- [ ] Integration with external systems

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact the development team or create an issue in the repository.

---

**Built with ❤️ for modern academic management**
