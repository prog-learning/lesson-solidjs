import { ErrorBoundary } from 'solid-js';
// import { count, setCount } from './App';

export const ErrorCatch = () => {
  /* レンダリング自体がSkipされる */

  return (
    <ErrorBoundary fallback={(err) => <>{err}</>}>
      {/* 以下のエラーでアプリ自体が落ちないように */}
      <button onClick={countup}>increment</button>
    </ErrorBoundary>
  );
};
