import { createEffect } from 'solid-js';

type Props = {
  text: string;
};

const HelloWorld = (props: Props) => {
  const { text } = props;
  createEffect(() => {
    console.log('HelloWorld createEffect');
  });

  return (
    <>
      <span>Hello World!{text}</span>
      <button>button</button>
    </>
  );
};

export { HelloWorld };
