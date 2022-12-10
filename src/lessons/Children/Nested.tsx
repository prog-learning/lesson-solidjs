import { children, Component, createEffect } from 'solid-js';

type Props = {
  children: any;
};

export const Nested: Component<Props> = (props) => {
  const c = children(() => props.children);

  createEffect(() =>
    console.log('createEffect props.children', props.children),
  );
  createEffect(() => console.log('createEffect c', c()));
  /* 違いがわからん */

  return (
    <div>
      <h3>通常のchildren</h3>
      <div>{props.children}</div>

      <h3>memo化されたのchildren</h3>
      <div>{c()}</div>
    </div>
  );
};
