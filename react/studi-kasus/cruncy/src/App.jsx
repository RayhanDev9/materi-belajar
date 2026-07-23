// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
import { useEffect, useState } from "react";
export default function App() {
  const [inputNum, setInputNum] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [toCruncy, setToCruncy] = useState("");
  function handlePertukaranMataUang() {
    setInputNum("");
    setToCruncy("");
  }
  useEffect(
    function () {
      async function fetchCurrency() {
        try {
          // if (inputNum.includes("")) return;
          if (to === from) throw new Error("Mata uang sama");

          const res = await fetch(
            `/api/latest?amount=${inputNum}&from=${from}&to=${to}`,
          );
          const data = await res.json();
          console.log(data);
          setToCruncy(data.rates[to]);
        } catch (err) {
          console.error(err.message);
        }
        //finally {
        // }
      }
      fetchCurrency();
    },
    [inputNum, to, from],
  );
  return (
    <div>
      <input
        type="text"
        value={inputNum}
        onChange={(e) =>
          setInputNum(isNaN(Number(e.target.value)) ? inputNum : e.target.value)
        }
      />
      <select
        value={from}
        onChange={(e) => {
          setFrom(e.target.value);
          handlePertukaranMataUang(e);
        }}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={to}
        onChange={(e) => {
          setTo(e.target.value);
          handlePertukaranMataUang(e);
        }}
      >
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {toCruncy} {to}
      </p>
    </div>
  );
}
