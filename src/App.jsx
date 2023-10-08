import { useState } from "react";
import Button from "./Button";
import Numbers from "./Numbers";

const App = () => {
  /* 
    state 
  */
  const [answer, setAnswer] = useState(0);
  /* 
    creates an array of 1 - 100
  */
  const range = Array(100)
    .fill(1)
    .map((x, y) => {
      return (
        <li
          key={x}
          className="main__numbers_list_item"
          style={{ listStyle: "none" }}
        >
          {x + y}
        </li>
      );
    });

  return (
    <section className="main" style={{ height: "50vh" }}>
      <div className="main__btn_wrap">
        <Button range={range} setAnswer={setAnswer} />
      </div>
      <div className="main__numbers_wrap">
        <Numbers answer={answer} />
      </div>
    </section>
  );
};

export default App;
