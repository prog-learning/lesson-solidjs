import { createEffect, createSignal, For } from 'solid-js';
// import { count, setCount } from './App';

export const CountUp = () => {
  const [count, setCount] = createSignal(0);
  const countup = () => {
    setCount(count() + 1);
  };

  createEffect(() => {
    console.log('CountUp createEffect');
    // console.log(count());
  });

  console.log('CountUp render'); // 動かない

  const [arr, setArr] = createSignal(['html', 'css', 'javascript', 'solid-js']);
  const addLang = () => {
    setArr([...arr(), 'react-byebye']);
  };

  return (
    <div>
      <div>{count()}</div>
      <button onClick={countup}>incriment</button>
      <button onClick={addLang}>add</button>
      {arr().map((item) => (
        <div>{item}</div>
      ))}
      <For each={arr()}>{(item) => <div>{item}</div>}</For>
    </div>
  );
};
