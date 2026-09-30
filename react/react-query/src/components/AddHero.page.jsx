import { useState } from 'react'
import { useAddHeroData } from '../hooks/useHeroesData'

export const AddHeroPage = () => {
  const [name, setName] = useState('')
  const [alterEgo, setAlterEgo] = useState('')
  const [message, setMessage] = useState('')

  // Menggunakan Custom Mutation Hook
  const { mutate, isPending, isError, error } = useAddHeroData()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !alterEgo) {
      alert('Nama dan Alter Ego wajib diisi!')
      return
    }

    const hero = { name, alterEgo }

    // 2. Level Mutate Callback
    mutate(hero, {
      onSuccess: () => {
        setMessage('Hero berhasil ditambahkan ke database!')
        setName('')
        setAlterEgo('')
      },
      onError: (err) => {
        setMessage(`Terjadi kesalahan: ${err.message}`)
      }
    })
  }



  return (
    <div style={{ padding: '20px' }}>
      <h2>Add Hero (Mutation Example)</h2>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '4px' }}>Hero Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Batman"
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '4px' }}>Alter Ego:</label>
          <input
            type="text"
            value={alterEgo}
            onChange={(e) => setAlterEgo(e.target.value)}
            placeholder="e.g. Bruce Wayne"
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          style={{ padding: '10px', cursor: isPending ? 'not-allowed' : 'pointer', marginTop: '10px' }}
        >
          {isPending ? 'Menyimpan...' : 'Tambah Hero'}
        </button>
      </form>

      {message && <p style={{ color: 'green', marginTop: '12px' }}>{message}</p>}
      {isError && <p style={{ color: 'red', marginTop: '12px' }}>{error.message}</p>}
    </div>
  )
}
