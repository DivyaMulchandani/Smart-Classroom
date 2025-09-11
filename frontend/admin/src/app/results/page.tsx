'use client'

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

type Student = { id: string; name: string }
type Course = { code: string; name: string }

type FormValues = {
  studentId: string
  courseCode: string
  grade: string
  gpa?: number
}

export default function AdminResultsPage() {
  const { register, handleSubmit, reset } = useForm<FormValues>()
  const [students, setStudents] = useState<Student[]>([])
  const [courses, setCourses] = useState<Course[]>([])
  const [message, setMessage] = useState<string | null>(null)

  useEffect(() => {
    fetch('http://localhost:3001/api/admin/students').then(r => r.json()).then(setStudents)
    fetch('http://localhost:3001/api/admin/courses').then(r => r.json()).then(setCourses)
  }, [])

  const onSubmit = async (data: FormValues) => {
    setMessage(null)
    const res = await fetch('http://localhost:3001/api/admin/results', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    if (res.ok) {
      setMessage('Result saved')
      reset()
    } else {
      setMessage('Failed to save')
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold mb-4">Upload Marks/Grades</h2>
      {message && <div className="mb-3 text-sm text-gray-700">{message}</div>}
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Student</label>
          <select {...register('studentId', { required: true })} className="border rounded px-3 py-2 w-full">
            <option value="">Select student</option>
            {students.map(s => <option key={s.id} value={s.id}>{s.name} ({s.id})</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Course</label>
          <select {...register('courseCode', { required: true })} className="border rounded px-3 py-2 w-full">
            <option value="">Select course</option>
            {courses.map(c => <option key={c.code} value={c.code}>{c.name} ({c.code})</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Grade</label>
          <input {...register('grade', { required: true })} className="border rounded px-3 py-2 w-full" placeholder="A, B+, C..." />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">GPA (optional)</label>
          <input type="number" step="0.01" {...register('gpa')} className="border rounded px-3 py-2 w-full" />
        </div>
        <div className="md:col-span-2">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save Result</button>
        </div>
      </form>
    </div>
  )
}
