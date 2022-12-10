type Props = {
  text: string;
};

export const HelloWorld = (props: Props) => {
  const hello = 'Hello';
  const { text } = props; // props.text

  return (
    <>
      <h1 class='hello-name'>
        Solid.js {hello} {text}
      </h1>
      <input type='button' value='Start Lesson' />
    </>
  );
};
