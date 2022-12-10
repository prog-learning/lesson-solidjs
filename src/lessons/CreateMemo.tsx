import { createMemo, createSignal } from 'solid-js';

export const CreateMemo = () => {
  const [count, setCount] = createSignal(1); // これ2つとも関数なので注意
  const double = () => {
    console.log('double: 計算しました');
    return count() * 2;
  };

  const memoDouble = createMemo(() => {
    console.log('memoDouble: 計算しました');
    return count() * 2;
  });

  return (
    <div>
      <h2>createMemo</h2>
      <button onClick={() => setCount(count() + 1)}>increment</button>
      <p>double.</p>
      <div>1. {double()}</div>
      <div>2. {double()}</div>
      <div>3. {double()}</div>
      <div>4. {double()}</div>

      <p>memoDouble.</p>
      <div>1. {memoDouble()}</div>
      <div>2. {memoDouble()}</div>
      <div>3. {memoDouble()}</div>
      <div>4. {memoDouble()}</div>
    </div>
  );
};
