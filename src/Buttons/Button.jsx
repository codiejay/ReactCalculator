import React, { useState } from "react";
import "./Buttons.css";
import Display from "../Display/Display"



export const Button = (props) => {
    // Calculation Data;
  
    let keys   = ["(", ")", "%", "AC",  7, 8, 9, "/", 4, 5, 6, "x", 1, 2, 3 ,"-", 0, ".", "=", "+" ];
  

    let [currentState, setCurrentState] = useState({ 
        screeDisplay: "",
        firstFigure: "",
        secondFigure: "",
        operator: "",
        falseMove: 0,
        bigNum: ""
        
    })

    const equalsTo = (e) => {
        console.log(currentState.firstFigure + " " + currentState.bigNum);

        setCurrentState( {
            screeDisplay: parseInt(currentState.firstFigure) + parseInt(currentState.bigNum),
            firstFigure: "",
            secondFigure: "",
            operator: "",
            falseMove: currentState.falseMove += 1,
            bigNum: currentState.firstFigure,

        } )
    }

    const operators = (e) => {
       
       
        setCurrentState( {
            screeDisplay: currentState.screeDisplay += e.target.innerHTML,
            firstFigure: "",
            secondFigure: "",
            operator: "",
            falseMove: currentState.falseMove += 1,
            bigNum: currentState.firstFigure,

        } )

       
    }

    const getNumbers = (e) => {


        if(currentState.falseMove === 1){
        setCurrentState ( {
            screeDisplay:  currentState.screeDisplay += e.target.innerHTML,
            firstFigure: currentState.firstFigure += e.target.innerHTML,
            secondFigure: "",
            operator: "",
            falseMove: currentState.falseMove,
            bigNum: currentState.bigNum
        
        } )

    }

    else if(currentState.falseMove === 0){
        setCurrentState ( {
            screeDisplay:  currentState.screeDisplay += e.target.innerHTML,
            firstFigure: currentState.firstFigure += e.target.innerHTML,
            secondFigure: "",
            operator: "",
            falseMove: currentState.falseMove,
            bigNum: currentState.bigNum
        
        } )

    }

       
    }
   
    return (
        
        <div id="keys">
        < Display calculation={currentState.screeDisplay}  />

            <div id="key">
            {
            keys.map(i => {

                if(i === "="){
                    {/* THE EQUALS TO SIGN */}
                    return <h1 onClick= {equalsTo}   className="blue" key={i}>{i}</h1>

                }


                
                else if( 
                    i === "/" || 
                    i === "x" ||
                    i === "-" ||
                    i === "+"){
                        {/* THE OPERATORS */}
                    return <h1 onClick= {operators} className="grey" key={i}>{i}</h1>
                }
                

                else if(i === "AC"){
                    {/* CLEAR THE SCREEN BUTTON */}
                    return <h1  className="grey" id="clear" key={i}>{i}</h1>
                }

                else if(
                    i === ")" || 
                    i === "(" ||
                    i === "%" ||
                    i === "."){
                        return <h1  className="grey" key={i}>{i}</h1>
                    }

                else{

                    return <h1 onClick= {getNumbers}  className={i} id="btn"  key={i}>{i}</h1>
                }
            
            })}
        </div>

        </div>
        
      )
} 




// {
//     for(let i = 0; i <= 9){
//          return 
//     }
//  }