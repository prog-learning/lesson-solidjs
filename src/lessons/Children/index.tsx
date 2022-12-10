import { createSignal } from 'solid-js';
import { Nested } from './Nested';

export const Children = () => {
  const [text, setText] = createSignal('text');

  return (
    <div>
      <h2>Children.</h2>
      <input
        type='text'
        value={text()}
        onChange={(e) => setText(e.currentTarget.value)}
      />
      <Nested>
        <span>{text()}</span>
      </Nested>
    </div>
  );
};
