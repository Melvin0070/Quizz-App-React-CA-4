import React from "react";
import "./Results.css"
import "./Questions.css"


function Result(props) {
  const handleClick = () => {
    props.reset();
  };

  return (
    <div className="questions Result">
      <h1>Results</h1>
      <h2>
        SCORE: {props.score} out of 5
      </h2>
      <h1>{(props.score / 5) * 100}%</h1>
      <button onClick={handleClick} style={{ color: props.theme ? '#242424' : 'white' , backgroundColor: props.theme ? '#A8A6FF':'#242424'}}>
        Restart
      </button>
    </div>
  );
}
export default Result;