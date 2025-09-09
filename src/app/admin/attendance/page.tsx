'use client'

import { useEffect, useState } from 'react'

type Student = { id: string; name: string; department: string; semester: number }

export default function AdminAttendancePage() {
  const [students, setStudents] = useState<Student[]>([])
  const [date, setDate] = useState<string>('')
  const [marked, setMarked] = useState<Record<string, boolean>>({})
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  useEffect(() => {
    fetch('http://localhost:3001/api/admin/students').then(r => r.json()).then(setStudents)
  }, [])

  const toggle = (id: string) => setMarked(prev => ({ ...prev, [id]: !prev[id] }))

  const submit = async () => {
    setLoading(true)
    setMessage(null)
    try {
      const payload = {
        date: date || new Date().toISOString().slice(0, 10),
        records: students.map(s => ({ studentId: s.id, present: !!marked[s.id] }))
      }
      const res = await fetch('http://localhost:3001/api/admin/attendance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Failed')
      setMessage('Attendance submitted')
    } catch (e) {
      setMessage('Error submitting attendance')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex flex-col md:flex-row md:items-end gap-4 mb-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="border rounded px-3 py-2" />
        </div>
        <button onClick={submit} disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50">
          {loading ? 'Submitting...' : 'Submit Attendance'}
        </button>
      </div>
      {message && <div className="mb-4 text-sm text-gray-700">{message}</div>}
      <div className="overflow-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2 pr-2">Present</th>
              <th className="py-2 pr-2">ID</th>
              <th className="py-2 pr-2">Name</th>
              <th className="py-2 pr-2">Department</th>
              <th className="py-2 pr-2">Semester</th>
            </tr>
          </thead>
          <tbody>
            {students.map(s => (
              <tr key={s.id} className="border-b hover:bg-gray-50">
                <td className="py-2 pr-2">
                  <input type="checkbox" checked={!!marked[s.id]} onChange={() => toggle(s.id)} />
                </td>
                <td className="py-2 pr-2">{s.id}</td>
                <td className="py-2 pr-2">{s.name}</td>
                <td className="py-2 pr-2">{s.department}</td>
                <td className="py-2 pr-2">{s.semester}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}


