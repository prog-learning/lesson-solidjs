import { Component, createEffect, createSignal, For, Show } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import styles from './App.module.css';
import { Children } from './lessons/Children';
import { ClassList } from './lessons/ClassList';
import { CreateMemo } from './lessons/CreateMemo';
import { CreateSignal } from './lessons/CreateSignal';
import { ErrorCatch } from './lessons/ErrorCatch';
import { ForAndIndex } from './lessons/ForAndIndex';
import { HelloWorld } from './lessons/HelloWorld';
import { Lifecycle } from './lessons/Lifecycle';
import { SplitProps } from './lessons/SplitProps';

const App: Component = () => {
  const [current, setCurrent] = createSignal<MenuKeys>('create-signal');
  createEffect(() => {
    console.log('Do createEffect');
  });

  const menus = {
    'create-signal': CreateSignal,
    'create-memo': CreateMemo,
    'for-and-index': ForAndIndex,
    'error-boundary': ErrorCatch,
    lifecycle: Lifecycle,
    'class-list': ClassList,
    'split-props': SplitProps,
    children: Children,
  };
  type MenuKeys = keyof typeof menus;

  return (
    <div class={styles.App}>
      <HelloWorld text='World!!' />
      <h2>Inline Style 2パターン</h2>
      <div style='color:tomato;font-size:20px;font-weight:bold;'>
        style='color:tomato;font-size:20px;font-weight:bold;'
      </div>
      <div
        style={{ color: 'skyblue', 'font-size': '20px', 'font-weight': 'bold' }}
      >
        {
          "style={{ color: 'skyblue', 'font-size': '20px', 'font-weight': 'bold' }}"
        }
      </div>

      <For each={Object.keys(menus)}>
        {(key) => (
          <button
            onClick={() => setCurrent(key as MenuKeys)}
            style={{ margin: '0 5px' }}
          >
            {key}
          </button>
        )}
      </For>

      <Dynamic component={menus[current()]} />
    </div>
  );
};

export default App;
