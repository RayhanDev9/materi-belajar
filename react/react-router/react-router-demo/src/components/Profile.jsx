import React from 'react';
import { useAuth } from './Auth';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        // 1. Pindah ke halaman Home dulu
        navigate("/");

        // 2. Beri jeda 0 ms agar rute Home terpasang dulu baru logout
        setTimeout(() => {
            logout();
        }, 0);
    }

    return (
        <div className="card">
            <h2>Welcome, {user} 👋</h2>
            <button style={{ marginTop: '16px' }} onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Profile;
