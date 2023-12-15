import React from 'react'
import { useState } from 'react'
import "./Questions.css"
import Result from './Result';
import '../App.css'


function questionContainer(props) {
    // State variables
    const [number, setCurrentQuestionNumber] = useState(0);
    const [score, setScore] = useState(0);
    const [Highlight, setHighlight] = useState(false);

      // Event handler for option buttons
    const handleClick = (e) => { 
      setCurrentQuestionNumber(number + 1); 
      setHighlight(false);
      if (e.target.getAttribute('isValid') === "true") { 
        setScore(score + 1); 
      }
    };

      // Event handler for reset button
    const handleReset = () => {
      setCurrentQuestionNumber(0);
      setScore(0);
      setHighlight(false);
    }

      // Event handler for highlight button
    const handleHighlight = () => { 
      setHighlight(!Highlight);
    };

  return (
    <div>
{number < 5 ? ( 
        <div className="questions">

          {/* Display current question number out of 5 */}
          <h2 className='questionNumber'>Question: {number + 1} of 5</h2> 

          {/* Display the question with highlighting effect */}
          <h2 style={{ color: Highlight ? "red" : "#242424" , animation: Highlight ? "text-shadow-drop-br 0.6s both":"none"}} className='question'>
            {props.data[number].text}
          </h2>
          <div className="options">
              
              {/*Displaying all the option for the specific question*/}
            {props.data[number].options.map((option, index) => (
              <button style={{ color: props.theme ? '#242424' : 'white' , backgroundColor: props.theme ? '#A8A6FF':'#242424'}}
                key={index}
                className= "option"
                onClick={handleClick}
                isValid={`${option.isCorrect}`} 
              >
                {option.text}
              </button>
            ))}
          </div>

          <div className="highlightBtn">
            <button onClick={handleHighlight} style={{ color: props.theme ? '#242424' : 'white' , backgroundColor: props.theme ? '#A8A6FF':'#242424'}} >
              {Highlight ? "De-highlight" : "Highlight"}
            </button>
          </div>
        </div>
      ) : (
        
        // Display result component when all questions are answered
        <Result score={score} reset={handleReset} theme={props.theme}/> 
      )}
      
    </div>
  )
}

export default questionContainer
