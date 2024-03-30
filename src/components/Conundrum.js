import React, { useState } from "react";
import "./Conundrum.css";

function Conundrum() {
  /**
   * Challenge: Map over the thingsArray to generate
   * a <p> element for each item and render them on the page
   * below the button
   */

  /**
   * Challenge: Add an event listener to the button so when
   * it is clicked, it adds another thing to our array
   *
   * Hint: use the array length + 1 to determine the number
   * of the "Thing" being added. Also, have you event listener
   * console.log(thingsArray) after adding the new item to the
   * array
   *
   * Spoiler: the page won't update when new things get added
   * to the array!
   */

  /**
   * Challenge: Convert the code below to use an array
   * held in state instead of a local variable. Initialize
   * the state array with the same 2 items below
   *
   * Don't worry about fixing `addItem` quite yet.
   */

  const [thingsArr, setThingsArr] = useState(["Thing1","Thing2"]);
  const addItem = () => {
    // setThingsArr([...thingsArr, "Thing" + Number(thingsArr.length + 1)]);
    // console.log(thingsArr);

    setThingsArr((prevState)=>([...prevState,"Thing" + Number(prevState.length + 1)]))

    //Mistake down:
    // thingsArr.push(`Thing${thingsArr.length+1}`)
    // console.log(thingsArr);
  };

  return (
    <div className="outest">
      <div className="outer">
        <button onClick={addItem} className="button">
          Add Item
        </button>
      </div>
      <div className="">
      {thingsArr.map((element,index)=>{
        return <h1 key={index}>{element}</h1>
      })}
      </div>
    </div>
  );
}

export default Conundrum;
