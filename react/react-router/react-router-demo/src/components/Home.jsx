import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="card">
            <div className="badge">Halaman Utama</div>
            <h1>Selamat Datang di Home! 🏠</h1>
            <p>
                Aplikasi ini menggunakan <strong>React Router v6</strong> untuk mengatur perpindahan rute antar halaman secara Single Page Application (SPA).
            </p>

            <div className="feature-grid">
                <div className="feature-card">
                    <h3>⚡ Cepat & Ringan</h3>
                    <p>Navigasi halaman berlangsung instan tanpa reload browser.</p>
                </div>
                <div className="feature-card">
                    <h3>🧭 Declarative Routing</h3>
                    <p>Mudah menentukan rute menggunakan <code>&lt;Routes&gt;</code> dan <code>&lt;Route&gt;</code>.</p>
                </div>
            </div>

            <button onClick={() => navigate('/order-summary', { replace: true })}>Place Order</button>

            <div style={{ marginTop: '24px' }}>
                <Link to="/about" className="btn-primary">
                    Pelajari Lebih Lanjut di About &rarr;
                </Link>
            </div>
        </div>
    );
}

export default Home;