import { createSignal, For, Index } from 'solid-js';

export const ForAndIndex = () => {
  const [arr, setArr] = createSignal([
    { id: 1, name: 'html' },
    { id: 2, name: 'css' },
    { id: 3, name: 'javascript' },
    { id: 4, name: 'solid-js' },
  ]);

  const addLang = () => {
    setArr([
      ...arr(),
      {
        id: arr().length + 1,
        name: 'react-byebye' + (arr().length + 1),
      },
    ]);
  };

  const handleChange = (
    e: Event & {
      currentTarget: HTMLInputElement;
      target: Element;
    },
    i: number,
  ) => {
    const { value } = e.currentTarget; // currentTargetを使った方が良さそう
    const newArr = arr().map((item) => {
      if (item.id === i) {
        return { ...item, name: value };
      }
      return item;
    });
    setArr(newArr);
  };

  const addSuffix = (id: number, suffix: string) => {
    console.log(id, 'addSuffix', suffix);

    return id + '-' + suffix;
  };

  return (
    <div>
      <button onClick={addLang}>addLang</button>
      <h2>For</h2>
      <For each={arr()}>
        {(item, index) => {
          console.log('For');

          return (
            <div>
              {index}.[ID:{addSuffix(item.id, 'FOR')}]
              <input
                type='text'
                value={item.name}
                onChange={(e) => handleChange(e, item.id)}
              />
            </div>
          );
        }}
      </For>
      <h2>Index</h2>
      <Index each={arr()}>
        {(item, index) => {
          console.log('Index');

          return (
            <div>
              {/*  itemの呼び出しには()が必要 */}
              {index}.[ID:{addSuffix(item().id, 'INDEX')}]
              <input
                type='text'
                value={item().name}
                onInput={(e) => handleChange(e, item().id)}
              />
            </div>
          );
        }}
      </Index>
    </div>
  );
};
