import { createRoot } from 'react-dom/client';

function CounterDisplay({ count }) {
  return <p>{count}</p>;
}

function IncreaseButton({ increase }) {
  return (
    <div>
      <button onClick={increase}>+ increase</button>
    </div>
  );
}

// kode CounterApp disembunyikan ...
