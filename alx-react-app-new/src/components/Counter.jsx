import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f4f4f4', borderRadius: '8px', marginTop: '20px' }}>
      <h2>Simple Counter</h2>
      <p style={{ fontSize: '20px' }}>Current Count: {count}</p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button onClick={increment} style={{ padding: '10px 20px' }}>Increment</button>
        <button onClick={decrement} style={{ padding: '10px 20px' }}>Decrement</button>
        <button onClick={reset} style={{ padding: '10px 20px' }}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;