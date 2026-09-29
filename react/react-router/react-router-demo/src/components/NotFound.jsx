import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="card text-center">
      <h1>404</h1>
      <h2>Halaman Tidak Ditemukan</h2>
      <p>Halaman yang Anda cari tidak tersedia atau rutenya belum dibuat.</p>
      <Link to="/" className="btn-primary">
        Kembali ke Home
      </Link>
    </div>
  );
}

export default NotFound;
