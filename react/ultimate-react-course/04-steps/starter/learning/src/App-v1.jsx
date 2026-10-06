import { useState } from "react";

{
  // function App() {
  //   return (
  //     // Menambahkan textAlign center agar lebih rapi di tengah
  //     <div
  //       style={{ marginInline: "auto", textAlign: "center", marginTop: "2rem" }}
  //     >
  //       <Counter />
  //     </div>
  //   );
  // }
  // export default App;
  // function Counter() {
  //   const [step, setStep] = useState(1);
  //   const [count, setCount] = useState(0);
  //   // LOGIKA STEP: Berubah sebanyak 1
  //   function addStep() {
  //     setStep((s) => s + 1);
  //   }
  //   function minStep() {
  //     if (step > 1) setStep((s) => s - 1); // Step tidak boleh kurang dari 1
  //   }
  //   // LOGIKA COUNT: Bertambah/berkurang sesuai dengan nilai STEP
  //   function addCount() {
  //     setCount((c) => c + step);
  //   }
  //   function minCount() {
  //     setCount((c) => c - step);
  //   }
  //   return (
  //     <>
  //       <div>
  //         <button onClick={minStep}>-</button>
  //         <span> Step : {step} </span>
  //         <button onClick={addStep}>+</button>
  //       </div>
  //       <div style={{ marginTop: "10px" }}>
  //         <button onClick={minCount}>-</button>
  //         <span> Count : {count} </span>
  //         <button onClick={addCount}>+</button>
  //       </div>
  //       {/* Kita hanya perlu melempar 'count', tidak perlu melempar 'setCount'
  //         karena DateJ tidak bertugas mengubah nilai count */}
  //       <DateJ count={count} />
  //     </>
  //   );
  // }
  // function DateJ({ count }) {
  //   // 1. Ambil tanggal HARI INI
  //   const date = new Date();
  //   // 2. Tambahkan/Kurangkan hari pada tanggal hari ini berdasarkan angka 'count'
  //   // JavaScript akan otomatis menyesuaikan bulan & tahunnya jika harinya melampaui bulan!
  //   date.setDate(date.getDate() + count);
  //   // 3. Format tanggal yang BARU saja dihitung
  //   const year = date.getFullYear();
  //   const tanggal = date.getDate();
  //   const month = date.toLocaleString("id-ID", { month: "long" });
  //   const day = date.toLocaleDateString("id-ID", { weekday: "long" });
  //   // 4. Logika kalimat agar lebih dinamis
  //   let message = "";
  //   if (count === 0) {
  //     message = "Hari ini adalah";
  //   } else if (count > 0) {
  //     message = `${count} hari dari sekarang adalah`;
  //   } else {
  //     // Math.abs() mengubah angka minus jadi positif (misal -5 jadi 5)
  //     // agar tulisannya enak dibaca: "5 hari yang lalu", bukan "-5 hari yang lalu"
  //     message = `${Math.abs(count)} hari yang lalu adalah`;
  //   }
  //   return (
  //     <div style={{ marginTop: "20px", fontWeight: "bold" }}>
  //       <p>
  //         {message} {`${day}, ${tanggal} ${month} ${year}`}
  //       </p>
  //     </div>
  //   );
  // }
}

export default function App() {
  return (
    <div
      style={{ marginInline: "auto", textAlign: "center", marginTop: "2rem" }}
    >
      <Counter />
    </div>
  );
}

function Counter() {
  const [range, setRange] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <input
          type="range"
          name="range"
          id=""
          min="1"
          max="10"
          step="1"
          value={range}
          onChange={(e) => setRange(e.target.value)}
        />
        <span>{range}</span>
      </div>
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <input type="number" name="text" id="" value={count} />
        <button onClick={() => setCount(count + Number(range))}>+</button>
      </div>
      <div>
        <Tanggal count={count} />
      </div>

      {count !== 0 || range !== 1 ? (
        <div>
          <button
            type="reset"
            onClick={() => {
              (setCount(0), setRange(1));
            }}
          >
            Reset
          </button>
        </div>
      ) : null}
    </>
  );
}

function Tanggal({ count }) {
  const date = new Date("june 21 2026");
  // 2. Tambahkan/Kurangkan hari pada tanggal hari ini berdasarkan angka 'count'
  // JavaScript akan otomatis menyesuaikan bulan & tahunnya jika harinya melampaui bulan!
  date.setDate(date.getDate() + count);
  console.info(date);

  return (
    <>
      <span>
        {count === 0
          ? "Today is "
          : count > 0
            ? ` ${count} days from today is `
            : `${Math.abs(count)} days ago was`}
      </span>
      <span>{date.toDateString()}</span>
    </>
  );
}
