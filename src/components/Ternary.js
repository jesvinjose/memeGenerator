import React, { useState } from "react";

// let [answer,setAnswer]=useState("Yes")

// let handleChange=function (){
//  answer==="Yes" ? setAnswer("No"):setAnswer("Yes")
// }

function Ternary() {
  /*
    Challenge
    Replace if/else below with ternary
    to determine the text that should display on the page
    
    */


//   const isGoingOut = true;
//   let answer = isGoingOut ? "Yes" : "No";

  /*
Challenge
Move our ternary directly inside of the JSX so the "Yes" and "No" are determined inside the <h1>
*/

  /**
 Challenge
 Initialize state for `isGoingOut` as a boolean
 Make it so clicking the div.state--value flips that
 boolean value(true-->false,false-->true)
 Display "Yes" if `isGoingOut` is true, "No" otherwise
 */

let [isGoingOut,setIsGoingOut]=useState(true)

let handleChange=function (){
    isGoingOut ? setIsGoingOut(false):setIsGoingOut(true)
}

  return (
    <div>
      <h1>Do I feel like going out tonight?</h1>
      <h2 onClick={handleChange}>{isGoingOut ? "Yes" : "No"}</h2>
    </div>
  );
}

export default Ternary;
