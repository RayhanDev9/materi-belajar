import React from "react";

// 1. Definisi Tipe Data
interface Mahasiswa {
  id: number;
  nama: string;
  jurusan: string;
}

interface Buku {
  id: string;
  judul: string;
  harga: number;
}

// 2. Definisi Komponen Generik Dasar
interface GenericListProps<T extends { id: number | string }> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  onClick: (item: T) => void;
}

interface GenericListProps<T extends { id: number | string }> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  onClick: (item: T) => void;
}
function GenericList<T extends { id: number | string }>({
  items,
  renderItem,
  onClick,
}: GenericListProps<T>) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {items.map((item) => (
        <li
          key={item.id}
          onClick={() => onClick(item)}
          style={{
            padding: "8px 12px",
            borderBottom: "1px solid #ddd",
            cursor: "pointer",
          }}
        >
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}

// 3. Sumber Data Kompleks
const daftarMahasiswa: Mahasiswa[] = [
  { id: 1, nama: "Rayhan", jurusan: "Teknik Informatika" },
  { id: 2, nama: "Fajri", jurusan: "Sistem Informasi" },
];

const daftarBuku: Buku[] = [
  { id: "B-01", judul: "Belajar TypeScript", harga: 85000 },
  { id: "B-02", judul: "Mastering React", harga: 95000 },
];

// 4. Data Array Siap Pakai yang Diekspor
export const listSections = [
  {
    id: "section-mahasiswa",
    title: "Daftar Mahasiswa",
    content: (
      <GenericList
        items={daftarMahasiswa}
        renderItem={(mhs) => (
          <span>
            {mhs.nama} — <em>{mhs.jurusan}</em>
          </span>
        )}
        onClick={(mhs) => alert(`Mahasiswa: ${mhs.nama}`)}
      />
    ),
  },
  {
    id: "section-buku",
    title: "Daftar Buku",
    content: (
      <GenericList
        items={daftarBuku}
        renderItem={(buku) => (
          <span>
            {buku.judul} (Rp{buku.harga.toLocaleString("id-ID")})
          </span>
        )}
        onClick={(buku) => alert(`Buku: ${buku.judul}`)}
      />
    ),
  },
];
