import { useReducer } from "react";
import "./index.css";

/*
INSTRUKSI / PERTIMBANGAN:

1.Mari kita buat sebuah akun bank sederhana! Ini mirip dengan contoh yang saya gunakan sebagai analogi untuk menjelaskan cara kerja useReducer, tetapi disederhanakan (kita tidak menggunakan nomor rekening di sini).

2.Gunakan sebuah reducer untuk memodelkan transisi state berikut: openAccount, deposit, withdraw, requestLoan, payLoan, closeAccount. Gunakan initialState di bawah ini untuk memulai.

3.Semua operasi (kecuali membuka akun) hanya dapat dilakukan jika isActive bernilai true. Jika tidak, cukup kembalikan objek state aslinya. Anda bisa melakukan pengecekan ini tepat di bagian awal reducer.

4.Ketika akun dibuka, isActive diubah menjadi true. Terdapat juga jumlah setoran minimum sebesar 500 untuk membuka akun (yang berarti saldo atau balance akan dimulai pada angka 500).

5.Nasabah hanya dapat mengajukan pinjaman (request loan) jika belum ada pinjaman sebelumnya. Jika kondisi tersebut terpenuhi, jumlah yang diminta akan dicatat ke dalam state loan, dan nilainya akan ditambahkan ke saldo (balance). Jika kondisi tersebut tidak terpenuhi, cukup kembalikan state saat ini.

6.Ketika nasabah membayar pinjaman (pay loan), kebalikannya yang terjadi: uang diambil dari saldo (balance), dan loan akan kembali menjadi 0. Hal ini bisa menyebabkan saldo menjadi negatif, tetapi tidak masalah, karena nasabah belum bisa menutup akun mereka saat ini (lihat poin berikutnya).

7.Nasabah hanya dapat menutup akun (close account) jika tidak ada pinjaman, DAN jika saldo (balance) adalah nol. Jika kondisi ini tidak terpenuhi, cukup kembalikan state-nya. Jika kondisi terpenuhi, akun dinonaktifkan dan semua uang ditarik. Akun pada dasarnya akan kembali ke kondisi awal (initialState).
*/

const initialState = {
  balance: 500,
  loan: 0,
  isActive: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "openAccount":
      return { ...state, isActive: false };
    case "deposit":
      return { ...state, balance: state.balance + 150 };
    case "withdraw":
      return { ...state, balance: state.balance - 50 };
    case "requestLoan":
      const isLoan = state.loan > 0;
      return isLoan
        ? state
        : { ...state, balance: state.balance + 5000, loan: 5000 };
    case "payLoan":
      return { ...state, loan: 0 };
    case "closeAccount":
      return { ...state, isActive: true };

    default:
      throw new Error("Deposit unknow");
  }
}

export default function App() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>

      <p>
        <button
          onClick={() => {
            dispatch({ type: "openAccount" });
          }}
          disabled={!isActive}
        >
          Open account
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "deposit" });
          }}
          disabled={isActive}
        >
          Deposit 150
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "withdraw" });
          }}
          disabled={isActive}
        >
          Withdraw 50
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "requestLoan" });
          }}
          disabled={isActive}
        >
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "payLoan" });
          }}
          disabled={isActive}
        >
          Pay loan
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "closeAccount" });
          }}
          disabled={isActive}
        >
          Close account
        </button>
      </p>
    </div>
  );
}
