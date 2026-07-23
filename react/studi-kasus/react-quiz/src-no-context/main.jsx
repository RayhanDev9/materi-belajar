import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);



// Anda telah ditugaskan oleh manajer proyek Anda untuk
// memfaktorkan ulang aplikasi ini agar menggunakan Context API

// TUGAS ANDA:

// - Duplikat folder 'src' menjadi 'src-no-context'
// - Tinjau alur data dan props yang dilewatkan
// - Identifikasi masalah prop drilling
// - Gunakan Context API untuk memperbaiki masalah prop drilling (yang sangat kecil)

// - Buat konteks baru 'QuizContext' dengan reducer yang telah kita buat sebelumnya
// - Buat komponen provider kustom 'QuizProvider' dan
// berikan semua state ke aplikasi
// - Buat hook kustom untuk mengonsumsi state di seluruh aplikasi

// - Hapus semua props yang tidak perlu
// - PENTING: Perhatikan bagaimana Anda sebenarnya membutuhkan state tepat di komponen App. Ini berarti Anda perlu membungkus seluruh App ke dalam konteks (PETUNJUK: coba di index.js)

// Lakukan