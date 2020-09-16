import React from "react";

export default function Box(props) {
  let { item, title, result } = props;
  if (title === "computer" && result !== "") {
    result = result === "tie" ? "tie" : result === "lose" ? "victory" : "lose";
    console.log("rrr", result);
  }
  return (
    <div className={`box-style ${result}`}>
      <h1>{title}</h1>
      <div>{item.name}</div>
      <h3>{result}</h3>
    </div>
  );
}

// import React, { Component } from "react";

// export default class Box extends Component {

//   render() {
//     return (
//       <div className="box-style">
//         box
//       </div>
//     );
//   }

// }
