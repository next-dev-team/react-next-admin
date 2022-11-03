export default function useDemo() {
  const [counter, setCounter] = useState(0);

  const inc = _useMemoizedFn(() => {
    setCounter((prev) => prev + 1);
  });

  const dec = _useMemoizedFn((val: number) => {
    setCounter((prev) => prev - val ?? 1);
  });

  return {
    dec,
    inc,
    counter,
  };
}
