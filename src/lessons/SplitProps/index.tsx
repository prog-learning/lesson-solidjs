import { createSignal } from 'solid-js';
import { Nested } from './Nested';

export const SplitProps = () => {
  const [state, setState] = createSignal({
    id: 1,
    name: 'my-name',
    color: 'red',
  });

  return (
    <div>
      <h2>splitProps.</h2>
      NAME:
      <input
        type='text'
        value={state().name}
        onChange={(e) => setState({ ...state(), name: e.currentTarget.value })}
      />
      <br />
      COLOR:
      <input
        type='text'
        value={state().color}
        onChange={(e) => setState({ ...state(), color: e.currentTarget.value })}
      />
      <Nested {...state()} />
    </div>
  );
};
