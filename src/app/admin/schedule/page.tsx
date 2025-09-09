'use client'

import { useState } from 'react'

type Entry = { day: string; time: string; courseCode: string; room?: string; instructor?: string }

export default function AdminSchedulePage() {
  const [entry, setEntry] = useState<Entry>({ day: '', time: '', courseCode: '', room: '', instructor: '' })
  const [message, setMessage] = useState<string | null>(null)

  const submit = async () => {
    setMessage(null)
    const res = await fetch('http://localhost:3001/api/admin/schedule', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(entry)
    })
    setMessage(res.ok ? 'Schedule updated' : 'Failed to update')
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold mb-4">Update Timetable</h2>
      {message && <div className="mb-3 text-sm text-gray-700">{message}</div>}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        <input placeholder="Day" value={entry.day} onChange={e => setEntry({ ...entry, day: e.target.value })} className="border rounded px-3 py-2" />
        <input placeholder="Time" value={entry.time} onChange={e => setEntry({ ...entry, time: e.target.value })} className="border rounded px-3 py-2" />
        <input placeholder="Course Code" value={entry.courseCode} onChange={e => setEntry({ ...entry, courseCode: e.target.value })} className="border rounded px-3 py-2" />
        <input placeholder="Room" value={entry.room} onChange={e => setEntry({ ...entry, room: e.target.value })} className="border rounded px-3 py-2" />
        <input placeholder="Instructor" value={entry.instructor} onChange={e => setEntry({ ...entry, instructor: e.target.value })} className="border rounded px-3 py-2" />
      </div>
      <button onClick={submit} className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save</button>
    </div>
  )
}


