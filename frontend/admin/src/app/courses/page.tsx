'use client'

import { useEffect, useState } from 'react'

type Course = { code: string; name: string; credits?: number; faculty?: string }

export default function AdminCoursesPage() {
  const [courses, setCourses] = useState<Course[]>([])
  const [form, setForm] = useState<Course>({ code: '', name: '', credits: 0, faculty: '' })
  const [message, setMessage] = useState<string | null>(null)

  const load = () => fetch('http://localhost:3001/api/admin/courses').then(r => r.json()).then(setCourses)
  useEffect(() => { load() }, [])

  const submit = async () => {
    setMessage(null)
    const res = await fetch('http://localhost:3001/api/admin/courses', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form)
    })
    if (res.ok) { setMessage('Course added'); setForm({ code: '', name: '', credits: 0, faculty: '' }); load() } else { setMessage('Failed to add') }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-3">Add New Course</h2>
        {message && <div className="mb-3 text-sm text-gray-700">{message}</div>}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <input placeholder="Code" value={form.code} onChange={e => setForm({ ...form, code: e.target.value })} className="border rounded px-3 py-2" />
          <input placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="border rounded px-3 py-2" />
          <input placeholder="Credits" type="number" value={form.credits} onChange={e => setForm({ ...form, credits: Number(e.target.value) })} className="border rounded px-3 py-2" />
          <input placeholder="Faculty" value={form.faculty} onChange={e => setForm({ ...form, faculty: e.target.value })} className="border rounded px-3 py-2" />
        </div>
        <button onClick={submit} className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Course</button>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">Courses</h2>
        <div className="overflow-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2 pr-2">Code</th>
                <th className="py-2 pr-2">Name</th>
                <th className="py-2 pr-2">Credits</th>
                <th className="py-2 pr-2">Faculty</th>
              </tr>
            </thead>
            <tbody>
              {courses.map(c => (
                <tr key={c.code} className="border-b hover:bg-gray-50">
                  <td className="py-2 pr-2">{c.code}</td>
                  <td className="py-2 pr-2">{c.name}</td>
                  <td className="py-2 pr-2">{c.credits}</td>
                  <td className="py-2 pr-2">{c.faculty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
