import React from "react";

function Count(props) {
//   console.log(props);
  let number = props.number;

  console.log("Count component rendered");
  return (
    <div className="counter--count">
      <h1>{number}</h1>
    </div>
  );
}

export default Count;
