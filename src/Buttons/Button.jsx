import React from "react";
import "./Buttons.css";


const Button = (prop) => {
    let keys   = ["(", ")", "%", "AC",  7, 8, 9, "/", 4, 5, 6, "x", 1, 2, 3 ,"-", 0, ".", "=", "+" ]
    return (
        <div id="keys">

            <div id="key">
          {
            keys.map(i => {
                if(i === "="){
                    console.log("caught the shit!")
                    return <h1 className="blue" key={i}>{i}</h1>
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
                    return <h1 className="grey" key={i}>{i}</h1>
                }
                

                else if(i === "AC"){
                    return <h1 className="grey" id="clear" key={i}>{i}</h1>
                }

                else{
                    return <h1 className={i} id="btn" key={i}>{i}</h1>
                }
            
          })}
        </div>

        </div>
        
      )
} 


export default Button;


// {
//     for(let i = 0; i <= 9){
//          return 
//     }
//  }