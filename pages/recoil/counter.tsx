import { useRecoilState } from "recoil";
import Head from "../../components/Head";
import { countState } from "../../recoil/data";

const Counter = () => {
  const [value, setValue] = useRecoilState(countState);

  const add = () => setValue(value + 1);
  const subtract = () => value !== 0 && setValue(value - 1);
  const clear = () => value !== 0 && setValue(0);
  return (
    <div>
      <Head />
      <h1>Count: {value}</h1>
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
};

export default Counter;
