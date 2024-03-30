import React, { useState } from "react";
import "./Counter.css";
import Count from "./Count";

function Counter() {
  /**
   * Challenge: Set up state to track our count (initial value is 0)
   */
  /**
   * Challenge: Create a function called `add` that runs
   * when the + button is clicked. (Can just console.log("add") for now)
   */
  /**
   * Challenge:
   * See if you can think of a way to add 1 to the count
   * every time the + button is clicked
   */
  /**
   * Challenge:
   * Add functionality to the minus button
   */

  let [count, setCount] = useState(0);

  /**
   * Note: if you ever need the old value of state
   * to help you determine the new value of state,
   * you should pass a callback function to your
   * state setter function instead of using
   * state directly. This callback function will
   * receive the old value of state as its parameter,
   * which you can then use to determine your new
   * value of state.
   */

  let add = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Challenge: update `substract` to use a callback function

  let subtract = () => {
    setCount((prevCount) => prevCount - 1);
  };

  /**
   * Challenge:
   * - Create a new component named Count
   *    - It should receive a prop called `number`, whose value
   *      is the current value of our count
   *    - Have the component render the whole div.counter--count
   *      and display the incoming prop `number`
   * - Replace the div.counter--count below with an instance of
   *   the new Count component
   */

  console.log("Counter component rendered");

  return (
    <div className="counter">
      <button className="counter--minus" onClick={subtract}>
        -
      </button>
      <Count number={count}/>
      <button className="counter--plus" onClick={add}>
        +
      </button>
    </div>
  );
}

export default Counter;
