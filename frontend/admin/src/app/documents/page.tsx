'use client'

import { useEffect, useState } from 'react'

type Doc = { id: string; title: string; filename: string; url: string; uploadedAt: string }

export default function AdminDocumentsPage() {
  const [docs, setDocs] = useState<Doc[]>([])
  const [title, setTitle] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  const load = () => fetch('http://localhost:3001/api/admin/documents').then(r => r.json()).then(setDocs)
  useEffect(() => { load() }, [])

  const submit = async () => {
    if (!file || !title) { setMessage('Title and file required'); return }
    // Mock upload: in real app, send FormData; for now, send metadata only
    const res = await fetch('http://localhost:3001/api/admin/documents', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title, filename: file.name })
    })
    if (res.ok) { setMessage('Document saved'); setTitle(''); setFile(null); load() } else { setMessage('Failed to save') }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-3">Upload Academic Document</h2>
        {message && <div className="mb-3 text-sm text-gray-700">{message}</div>}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} className="border rounded px-3 py-2" />
          <input type="file" onChange={e => setFile(e.target.files?.[0] ?? null)} className="border rounded px-3 py-2" />
          <button onClick={submit} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save</button>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-3">Documents</h2>
        <div className="overflow-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2 pr-2">Title</th>
                <th className="py-2 pr-2">Filename</th>
                <th className="py-2 pr-2">Uploaded</th>
                <th className="py-2 pr-2">Link</th>
              </tr>
            </thead>
            <tbody>
              {docs.map(d => (
                <tr key={d.id} className="border-b hover:bg-gray-50">
                  <td className="py-2 pr-2">{d.title}</td>
                  <td className="py-2 pr-2">{d.filename}</td>
                  <td className="py-2 pr-2">{new Date(d.uploadedAt).toLocaleString()}</td>
                  <td className="py-2 pr-2"><a className="text-blue-600 underline" href={`http://localhost:3001${d.url}`} target="_blank">View</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
