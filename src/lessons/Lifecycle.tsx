import {
  Component,
  createEffect,
  createSignal,
  onCleanup,
  onMount,
} from 'solid-js';

export const Lifecycle = () => {
  const [count, setCount] = createSignal(0);

  /* 初回とcountの変更時 */
  createEffect(() => {
    console.log('createEffect', count());
  });

  /* 初回のみ（countに依存しない） */
  onMount(() => {
    console.log('onMount', count());
  });

  /* 破棄時のみ（countに依存しない） */
  onCleanup(() => {
    console.log('onCleanup', count());
  });

  return (
    <div>
      <h2>Lifecycle.</h2>
      <button onClick={() => setCount(count() + 1)}>increment</button>
      <div>count: {count()}</div>
    </div>
  );
};
