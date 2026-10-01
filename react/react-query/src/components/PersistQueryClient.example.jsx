import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

/**
 * MATERI 2: PERSIST QUERY CLIENT (Menyimpan Cache ke LocalStorage)
 * 
 * Mengapa butuh Persist Query Client?
 * Secara bawaan, jika browser di-refresh (F5), seluruh cache di memori JavaScript akan HILANG.
 * Dengan Persist Query Client, cache React Query disimpan ke LocalStorage / SessionStorage.
 * Saat halaman di-refresh, data langsung dimuat dari LocalStorage tanpa loading network!
 * 
 * Di industri, kita menggunakan package official:
 * npm install @tanstack/react-query-persist-client
 * npm install @tanstack/query-sync-storage-persister
 */

/* 
--- CONTOH PENULISAN DI main.jsx ATAU App.jsx ---

import { QueryClient } from '@tanstack/react-query'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            gcTime: 1000 * 60 * 60 * 24, // Simpan cache selama 24 jam
        },
    },
})

// Membuat persister yang menyimpan cache ke localStorage browser
const persister = createSyncStoragePersister({
    storage: window.localStorage,
})

// Di Root Component (gantikan QueryClientProvider dengan PersistQueryClientProvider):
// <PersistQueryClientProvider
//   client={queryClient}
//   persistOptions={{ persister }}
// >
//   <App />
// </PersistQueryClientProvider>
*/

// Fetcher Function biasa
const fetchHeroes = async () => {
    return await axios.get('http://localhost:4000/superheroes')
}

export const PersistQueryClientExample = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['super-heroes-persisted'],
        queryFn: fetchHeroes,
        // Opsi gcTime menentukan berapa lama cache disimpan sebelum dibersihkan
        gcTime: 1000 * 60 * 60 * 24, // 24 Jam
    })

    return (
        <div style={{ padding: '20px' }}>
            <h2>2. Persist Query Client Example</h2>
            <p>
                Fitur ini berguna agar saat pengguna me-refresh browser, data langsung muncul dari
                <b> LocalStorage</b> tanpa menampilkan status <code>isLoading</code> lagi.
            </p>
            <p>
                Cek tab <b>Application -&gt; Local Storage</b> di Inspect Element (DevTools) untuk melihat
                cache yang tersimpan secara otomatis.
            </p>

            {isLoading ? <p>Loading dari Network...</p> : <p>✅ Data berhasil dimuat!</p>}
            {data && (
                <ul>
                    {data.data.map((hero) => (
                        <li key={hero.id}>{hero.name} - {hero.alterEgo}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}
