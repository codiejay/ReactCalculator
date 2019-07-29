import React, { useState } from "react";
import "./Content.css";
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
        bigNum: "",
        
    })

    const getNumbers = (e) => {


        if(currentState.falseMove === 1){
        setCurrentState ( {
            screeDisplay:  currentState.screeDisplay += e.target.innerHTML,
            firstFigure: currentState.firstFigure += e.target.innerHTML,
            secondFigure: "",
            operator: currentState.operator,
            falseMove: currentState.falseMove,
            bigNum: currentState.bigNum
        
        } )

    }

    else if(currentState.falseMove === 0){
        setCurrentState ( {
            screeDisplay:  currentState.screeDisplay += e.target.innerHTML,
            firstFigure: currentState.firstFigure += e.target.innerHTML,
            secondFigure: "",
            operator: currentState.operator,
            falseMove: currentState.falseMove,
            bigNum: currentState.bigNum
        
        } )

    }

       
    }


    const operators = (e) => {
       
       
        setCurrentState( {
            screeDisplay: currentState.screeDisplay += e.target.innerHTML,
            firstFigure: "",
            secondFigure: "",
            operator: e.target.innerHTML,
            falseMove: currentState.falseMove += 1,
            bigNum: currentState.firstFigure,

        } )

       
    }

    
    const equalsTo = (e) => {
        console.log(currentState.operator);

        switch (currentState.operator) {
            case "+": 
                
                setCurrentState( {
                    screeDisplay: parseInt(currentState.firstFigure) + parseInt(currentState.bigNum),
                    firstFigure: "",
                    secondFigure: "",
                    operator: currentState.operator,
                    falseMove: currentState.falseMove += 1,
                    bigNum: currentState.firstFigure,

                } )
                
                break;
            case "-":
                
                setCurrentState( {
                    screeDisplay: parseInt(currentState.firstFigure) - parseInt(currentState.bigNum),
                    firstFigure: "",
                    secondFigure: "",
                    operator: currentState.operator,
                    falseMove: currentState.falseMove += 1,
                    bigNum: currentState.firstFigure,

                } )

                break;

            case "*": 
                
                setCurrentState( {
                    screeDisplay: parseInt(currentState.firstFigure) * parseInt(currentState.bigNum),
                    firstFigure: "",
                    secondFigure: "",
                    operator: currentState.operator,
                    falseMove: currentState.falseMove += 1,
                    bigNum: currentState.firstFigure,

                } )
                
                break;

            case "/": 
                
                setCurrentState( {
                    screeDisplay: parseInt(currentState.firstFigure) / parseInt(currentState.bigNum),
                    firstFigure: "",
                    secondFigure: "",
                    operator: currentState.operator,
                    falseMove: currentState.falseMove += 1,
                    bigNum: currentState.firstFigure,

                } )
                
                break;
        
            default:
                break;
        }

    }

   
   
    return (
        
        <div id="keys">

        <div id="display">
            <b id="results"> {props.result} </b>
            <h1 id="calculations">{currentState.screeDisplay}</h1>
        </div>

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