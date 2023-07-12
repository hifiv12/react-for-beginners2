import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect }  from "react";
import userEvent from "@testing-library/user-event";

function Hello() {
  useEffect(() => {
    console.log("hi");
    return () => console.log("bye");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);
  const onClick = () => setValue((prev) => prev + 1);

  useEffect(() => {
    console.log("I run only once.");
  }, []);

  useEffect(() => {
    console.log("I run when `keyword` changes.")
  }, [keyword]);

  useEffect(() => {
    console.log("I run when `counter` changes.")
  }, [counter]);

  useEffect(() => {
    console.log("I run when `counter` & 'keyword' changes.")
  }, [counter, keyword]);

  const [showing, setShowing] = useState(false);
  const onClick1 = () => setShowing((prev) => !prev);

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="search here..."/>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
      {showing ? <Hello /> : null}
      <button onClick={onClick1}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default AppToDos;
