import { Component, splitProps } from 'solid-js';

type Props = {
  id: number;
  name: string;
  color: string;
};

export const Nested: Component<Props> = (props) => {
  const { name, color } = props; // これだと更新されない
  const [local, others] = splitProps(props, ['name', 'color']);

  return (
    <div>
      <h3>通常の分割代入</h3>
      <div>ID: {props.id}</div>
      <div>NAME: {name}</div>
      <div>COLOR: {color}</div>
      <h3>splitPropsを使用した分割代入</h3>
      <div>ID: {others.id}</div>
      <div>NAME: {local.name}</div>
      <div>COLOR: {local.color}</div>
    </div>
  );
};
