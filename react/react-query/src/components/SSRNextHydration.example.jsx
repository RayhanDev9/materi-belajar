/**
 * MATERI 3: SSR / NEXT.JS HYDRATION WITH TANSTACK QUERY
 * 
 * Mengapa butuh SSR Hydration?
 * Pada framework SSR seperti Next.js (App Router / Pages Router), kita ingin memasak data API
 * di server SEBELUM halaman dikirim ke browser (bagus untuk SEO dan First Contentful Paint).
 * 
 * Alur Kerjanya:
 * 1. Server melakukan prefetch data API (`queryClient.prefetchQuery`).
 * 2. Server mengubah cache tersebut menjadi JSON string (`dehydrate`).
 * 3. Browser menerima JSON tersebut dan menghidupkan kembali cache React Query (`HydrationBoundary` / `Hydrate`).
 */

/* 
===================================================================
1. CONTOH IMPLEMENTASI DI NEXT.JS APP ROUTER (Next.js 13/14/15+)
===================================================================
File: app/posts/page.jsx (Server Component)

import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query'
import PostsList from './PostsList' // Client component

export default async function PostsPage() {
  const queryClient = new QueryClient()

  // 1. Prefetch data di Server side
  await queryClient.prefetchQuery({
    queryKey: ['posts'],
    queryFn: getPostsFetcher,
  })

  return (
    // 2. Transfer (dehydrate) state dari Server ke Client
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostsList />
    </HydrationBoundary>
  )
}
*/

/* 
===================================================================
2. CONTOH IMPLEMENTASI DI NEXT.JS PAGES ROUTER (Next.js versi Lama)
===================================================================
File: pages/posts.jsx

import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query'

// Fungsi berjalan di Server Side
export async function getServerSideProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['super-heroes'],
    queryFn: () => fetch('http://localhost:4000/superheroes').then(res => res.json())
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

// Komponen berjalan di Client Side (Data langsung tersedia tanpa loading!)
export default function PostsPage() {
  const { data } = useQuery({
    queryKey: ['super-heroes'],
    queryFn: () => fetch('http://localhost:4000/superheroes').then(res => res.json())
  })

  return <div>{JSON.stringify(data)}</div>
}
*/

export const SSRNextHydrationExample = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h2>3. SSR / Next.js Hydration Example</h2>
            <p>
                File ini berisi panduan & struktur penulisan React Query pada 
                <b> Server-Side Rendering (SSR)</b> di Next.js (baik App Router maupun Pages Router).
            </p>
            <ul>
                <li><b>prefetchQuery:</b> Mengambil data API di Server sebelum HTML dikirim.</li>
                <li><b>dehydrate:</b> Mengkonversi cache server menjadi data mentah yang aman dikirim via HTTP.</li>
                <li><b>HydrationBoundary:</b> Menghubungkan cache server ke `useQuery` di client tanpa perlu fetch ulang.</li>
            </ul>
        </div>
    )
}
