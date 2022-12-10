import { createSignal, For } from 'solid-js';
// import { count, setCount } from './App';

export const CreateSignal = () => {
  const [count, setCount] = createSignal(0); // これ2つとも関数なので注意
  const countup = () => {
    setCount(count() + 1);
  };

  const [arr, setArr] = createSignal(['html', 'css', 'javascript', 'solid-js']);
  const addLang = () => {
    setArr([...arr(), 'react-byebye']);
  };

  return (
    <div>
      <h2>createSignal</h2>
      {/* JSXではどっちでもいけるみたい */}
      <div>
        {'{count}: '}
        {count}
      </div>
      <div>
        {'{count()}: '}
        {count()}
      </div>
      <button onClick={countup}>increment</button>

      <button onClick={addLang}>add</button>
      {/* React風 */}
      {arr().map((item) => (
        <div>{item}</div>
      ))}
      {/* Solidの場合 */}
      <For each={arr()}>{(item) => <div>{item}</div>}</For>
    </div>
  );
};
