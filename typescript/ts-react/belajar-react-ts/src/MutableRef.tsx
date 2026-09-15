import { useEffect, useRef, useState } from "react";

export default function MutableRef() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<number | null>(null);

  // 1. Fungsi untuk memulai / menghidupkan kembali timer
  const startTimer = () => {
    // Guard clause: jika timer sudah aktif berjalan, jangan buat interval baru lagi
    if (intervalRef.current !== null) return;

    intervalRef.current = window.setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };

  // 2. Fungsi untuk menghentikan timer
  const stopTimer = () => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null; // Reset ke null agar bisa distart kembali
    }
  };

  // Jalankan timer saat pertama kali dibuka
  useEffect(() => {
    startTimer();

    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      HookTimer = {timer} -{" "}
      <button onClick={startTimer}>Start Timer</button>{" "}
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
}