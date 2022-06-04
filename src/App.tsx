import { Component, createSignal } from 'solid-js';

import styles from './App.module.css';
import { CountUp } from './CountUp';
import { HelloWorld } from './HelloWorld';

export const [count, setCount] = createSignal(0);
setCount(count() + 1);
console.log(count());

const App: Component = () => {
  const message = 'messageだよ';

  return (
    <div class={styles.App}>
      <HelloWorld text='テキスト' />
      <div style='color:tomato;font-size:32px;font-weight:bold;'>
        style 文字列で
      </div>
      <div
        style={{ color: 'tomato', 'font-size': '32px', 'font-weight': 'bold' }}
      >
        style objectで
      </div>
      <div>埋め込み→{message}</div>
      <CountUp />
    </div>
  );
};

export default App;
