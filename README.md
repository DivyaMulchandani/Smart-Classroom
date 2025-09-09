# Smart Classroom ERP System

A comprehensive ERP system for educational institutions with separate Student and Faculty/Admin panels.

## Project Structure

```
SmartClassroom/
├── frontend/
│   ├── student/          # Student portal (Next.js)
│   │   ├── src/
│   │   │   ├── app/      # Student pages
│   │   │   ├── components/
│   │   │   └── lib/
│   │   └── package.json
│   └── admin/            # Faculty/Admin portal (Next.js)
│       ├── src/
│       │   ├── app/      # Admin pages
│       │   ├── components/
│       │   └── lib/
│       └── package.json
├── backend/              # Express.js API server
│   ├── server/
│   │   ├── data/         # Mock JSON data
│   │   ├── uploads/      # File uploads
│   │   └── index.js
│   └── package.json
└── package.json          # Root package.json with scripts
```

## Features

### Student Portal
- Attendance tracking
- Academic results
- Course registration
- Schedule/timetable
- Academic documents
- Counselling appointments

### Admin/Faculty Portal
- Attendance management
- Results management
- Course & schedule management
- Academic documents upload
- Counselling & appointments management

## Quick Start

### 1. Install Dependencies
```bash
npm run install:all
```

### 2. Development Mode
```bash
# Run all services (backend + both frontends)
npm run dev:all

# Or run individually:
npm run dev:backend    # Backend API (port 3001)
npm run dev:student    # Student portal (port 3000)
npm run dev:admin      # Admin portal (port 3002)
```

### 3. Access the Applications
- **Student Portal**: http://localhost:3000
- **Admin Portal**: http://localhost:3002
- **Backend API**: http://localhost:3001

## Individual Setup

### Backend Only
```bash
cd backend
npm install
npm run dev
```

### Student Frontend Only
```bash
cd frontend/student
npm install
npm run dev
```

### Admin Frontend Only
```bash
cd frontend/admin
npm install
npm run dev
```

## Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript, TailwindCSS
- **Backend**: Node.js, Express.js
- **UI Components**: Lucide React icons, shadcn/ui patterns
- **Forms**: React Hook Form

## API Endpoints

### Student Endpoints
- `GET /api/attendance` - Get attendance data
- `GET /api/results` - Get academic results
- `GET /api/schedule` - Get class schedule
- `GET /api/fees` - Get fee information

### Admin Endpoints
- `POST /api/admin/attendance` - Update attendance
- `POST /api/admin/results` - Upload grades
- `GET/POST /api/admin/courses` - Manage courses
- `POST /api/admin/schedule` - Update schedule
- `GET/POST /api/admin/documents` - Manage documents
- `GET/POST /api/admin/appointments` - Manage appointments
- `GET /api/admin/students` - Get student list

## Development Notes

- The backend uses mock JSON data files for development
- File uploads are currently mocked (metadata only)
- Both frontends are independent Next.js applications
- The backend serves static files from `/uploads` directory
- All services can run concurrently for full-stack development