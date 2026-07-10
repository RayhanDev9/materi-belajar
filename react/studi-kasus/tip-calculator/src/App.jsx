import { useState } from "react";
import "./App.css";

function App() {
  const [tagihan, setTagihan] = useState("");
  const [tipSaya, setTipSaya] = useState("");
  const [tipTemen, setTipTemen] = useState("");

  function HandleReset() {
    setTagihan("");
    setTipSaya("");
    setTipTemen("");
  }
  return (
    <div>
      <CalculateTip tagihan={tagihan} setTagihan={setTagihan} />
      <SelectTip tip={tipSaya} setTip={setTipSaya}>
        <label> Bagaiman menurutmu layananya </label>
      </SelectTip>
      <SelectTip tip={tipTemen} setTip={setTipTemen}>
        <label>Bagaiman menurut temanmu tentang layananya</label>
      </SelectTip>
      <CalculateTotal tagihan={tagihan} tipSaya={tipSaya} tipTemen={tipTemen} />
      <ButtonReset onReset={HandleReset} />
    </div>
  );
}

function CalculateTip({ setTagihan, tagihan }) {
  return (
    <>
      <div>
        <p>
          Berapa total tagihanya ?{" "}
          <input
            type="number"
            value={tagihan}
            onChange={(e) => setTagihan(Number(e.target.value))}
          />
        </p>
      </div>
    </>
  );
}

function SelectTip({ children, tip, setTip }) {
  return (
    <div>
      {children}
      <select
        name=""
        id=""
        value={tip}
        onChange={(e) => setTip(Number(e.target.value))}
      >
        <option value="0">Tidak puas (0% tip)</option>
        <option value="5">Lumayan (5% tip)</option>
        <option value="10">Baik (10% tip)</option>
        <option value="20">Sangat Memuaskan (20% tip)</option>
      </select>
    </div>
  );
}

function CalculateTotal({ tagihan, tipSaya, tipTemen }) {
  const tips = tipSaya + tipTemen;

  const total = tagihan + tips;
  return (
    <>
      {tagihan > 0 && (
        <div>
          <p>
            Kamu bayar {total} ({tagihan} + {tips})
          </p>
        </div>
      )}
    </>
  );
}

function ButtonReset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

export default App;
