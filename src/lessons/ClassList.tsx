import { createSignal, For } from 'solid-js';
import './ClassList.css';
const arr = ['red', 'blue', 'green'];

export const ClassList = () => {
  const [name, setName] = createSignal('red'); // これ2つとも関数なので注意

  return (
    <div>
      <h2>createMemo</h2>
      <For each={arr}>
        {(color) => (
          <button
            classList={{ selected: name() === color }} // 条件を満たすときに'selected'クラスを付与
            onClick={() => setName(color)}
          >
            {color}
          </button>
        )}
      </For>
    </div>
  );
};
