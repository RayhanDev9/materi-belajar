import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'

/**
 * MATERI 1: QUERY CANCELLATION (Membatalkan HTTP Request)
 * 
 * Mengapa butuh Query Cancellation?
 * Ketika pengguna berpindah halaman dengan cepat atau mengubah filter dengan cepat,
 * HTTP request sebelumnya yang belum selesai akan membuang bandwidth & CPU.
 * React Query menyediakan `signal` (AbortSignal) otomatis di dalam `queryFn`.
 */

// 1. Fetcher function menerima parameter `{ signal }` dari React Query
const fetchSuperHeroesWithCancellation = async ({ signal }) => {
    // Kita teruskan `signal` ke request Axios
    return await axios.get('http://localhost:4000/superheroes', {
        signal // <-- Axios akan otomatis membatalkan HTTP request jika signal di-abort
    })
}


export const QueryCancellationPage = () => {
    const [heroId, setHeroId] = useState(1)
    const queryClient = useQueryClient()

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['super-hero-cancel', heroId],
        queryFn: fetchSuperHeroesWithCancellation
    })

    // Manual Cancel Function
    const handleManualCancel = () => {
        // Membatalkan query secara manual lewat queryClient
        queryClient.cancelQueries({ queryKey: ['super-hero-cancel', heroId] })
        console.log('Request dibatalkan secara manual oleh pengguna!')


    }

    return (
        <div style={{ padding: '20px' }}>
            <h2>1. Query Cancellation Example</h2>
            <p>
                Buka tab <b>Network</b> di Inspect Element (DevTools). Jika Anda menekan tombol
                <b> "Batal Request Manual"</b> atau berpindah halaman dengan cepat saat loading,
                status request akan menjadi <code>(canceled)</code>.
            </p>

            <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                <button onClick={() => setHeroId((prev) => prev + 1)}>
                    Ganti ID Hero ({heroId})
                </button>
                <button onClick={handleManualCancel} style={{ backgroundColor: '#ff4d4f', color: 'white' }}>
                    Batal Request Manual
                </button>
            </div>

            {isLoading && <p>Loading data hero...</p>}
            {isError && <p style={{ color: 'red' }}>Error / Request Cancelled: {error.message}</p>}
            {data && (
                <pre style={{ background: '#f4f4f4', padding: '10px' }}>
                    {JSON.stringify(data.data, null, 2)}
                </pre>
            )}
        </div>
    )
}
