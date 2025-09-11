'use client'

import { useEffect, useState } from 'react'

type Apt = { id: string; studentId: string; studentName: string; topic: string; preferredTime: string; status: string }

export default function AdminAppointmentsPage() {
  const [apts, setApts] = useState<Apt[]>([])
  const [message, setMessage] = useState<string | null>(null)

  const load = () => fetch('http://localhost:3001/api/admin/appointments').then(r => r.json()).then(setApts)
  useEffect(() => { load() }, [])

  const act = async (id: string, action: 'approve'|'reject'|'reschedule', newTime?: string) => {
    setMessage(null)
    const res = await fetch('http://localhost:3001/api/admin/appointments', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, action, newTime })
    })
    setMessage(res.ok ? 'Updated' : 'Failed')
    load()
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      {message && <div className="mb-3 text-sm text-gray-700">{message}</div>}
      <div className="overflow-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2 pr-2">Student</th>
              <th className="py-2 pr-2">Topic</th>
              <th className="py-2 pr-2">Preferred Time</th>
              <th className="py-2 pr-2">Status</th>
              <th className="py-2 pr-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {apts.map(a => (
              <tr key={a.id} className="border-b hover:bg-gray-50">
                <td className="py-2 pr-2">{a.studentName} ({a.studentId})</td>
                <td className="py-2 pr-2">{a.topic}</td>
                <td className="py-2 pr-2">{new Date(a.preferredTime).toLocaleString()}</td>
                <td className="py-2 pr-2">{a.status}</td>
                <td className="py-2 pr-2 space-x-2">
                  <button onClick={() => act(a.id, 'approve')} className="text-green-700 hover:underline">Approve</button>
                  <button onClick={() => act(a.id, 'reject')} className="text-red-700 hover:underline">Reject</button>
                  <button onClick={() => {
                    const newTime = prompt('Enter new ISO date/time', a.preferredTime) || undefined
                    if (newTime) act(a.id, 'reschedule', newTime)
                  }} className="text-blue-700 hover:underline">Reschedule</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
