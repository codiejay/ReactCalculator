import React, { useState } from "react";
import "./Buttons.css";
import Display from "../Display/Display"



export const Button = (props) => {
    // Calculation Data
    let firstDigits;
    let keys   = ["(", ")", "%", "AC",  7, 8, 9, "/", 4, 5, 6, "x", 1, 2, 3 ,"-", 0, ".", "=", "+" ];
    
   
    

      const [calculation, setCalculation] = useState( {
          calValue: "",
          calAction: ""
      } )

      const handleCalculation = (e) => {
        setCalculation({
            calValue: calculation.calValue += e.target.classList[0],
          })
      }

      const calFunction = (e) => {
        firstDigits = calculation.calValue;
        
        setCalculation({
            calValue: calculation.calValue += e.target.innerHTML,
            calAction: e.target.innerHTML
            
        })

        
      }

      const equalSignHandler = (e) => {
        console.log(calculation.calAction);
     
      }
     
      
 
  

    return (
        
        <div id="keys">
        < Display calculation={calculation.calValue} />

            <div id="key">
            {
            keys.map(i => {
                if(i === "="){
                    return <h1 onClick={equalSignHandler()}  className="blue" key={i}>{i}</h1>

                }

                else if( 
                    i === "=" ||
                    i === "(" ||
                    i === ")" || 
                    i === "%" ||
                    i === "/" || 
                    i === "x" ||
                    i === "-" ||
                    i === "." ||
                    i === "+"){
                    return <h1 onClick={calFunction} className="grey" key={i}>{i}</h1>
                }
                

                else if(i === "AC"){
                    return <h1  className="grey" id="clear" key={i}>{i}</h1>
                }

                else{
                    return <h1 onClick= {handleCalculation} className={i} id="btn"  key={i}>{i}</h1>
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