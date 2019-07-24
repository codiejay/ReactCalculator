import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Calculations
let calcValue = "";
let firstHolder;

//equals sign
let equalSign = document.querySelector(".blue")



// Special Buttons
    let clearButton = document.getElementById("clear")

// All keys
const keys = document.querySelectorAll("#btn")

// Calculation buttons
let calBttns = document.querySelectorAll(".grey")
// console.log(calBttns)

// The screen display texts
let results = document.getElementById("results")
let calculations = document.getElementById("calculations")


// Loop them all and add an event;
keys.forEach(bttn => {
    bttn.addEventListener("click", (e) => {
        calculations.innerHTML += e.target.classList[0]
    } )
});


calBttns.forEach( bttn => {
    if( bttn.innerHTML === "+" ||
    bttn.innerHTML === "-" ||
    bttn.innerHTML === "x" ||
    bttn.innerHTML === "/" 
    
    ){
        bttn.addEventListener("click", () => {
            if(calculations.innerHTML !== ""){

                results.innerHTML = calculations.innerHTML;
                firstHolder = parseInt(calculations.innerHTML)
                calculations.innerHTML = "  ";


                switch(bttn.innerHTML){
                    case "+":
                    calcValue = "plus"
                     break;

                     case "-":
                    calcValue = "minus"
                     break;

                     case "x":
                    calcValue = "multiply"
                     break;

                     case "/":
                    calcValue = "divide"
                     break;

                     default: 


                }
            }
        })

    }
} )










// Clear off text when clicked;
clearButton.addEventListener("click", () => {
    results.innerHTML = "";
    calculations.innerHTML = "";
    calcValue = "";
})


equalSign.addEventListener("click", () => {
    if(calculations.innerHTML !== ""){
        console.log(parseInt(calculations.innerHTML) + firstHolder);

        switch(calcValue){
            case "plus":
                calculations.innerHTML = parseInt(calculations.innerHTML) + firstHolder;
            break;

            case "minus":
                calculations.innerHTML = parseInt(calculations.innerHTML) - firstHolder;
            
            break;

            case "multiply":
                calculations.innerHTML = parseInt(calculations.innerHTML) * firstHolder;
            
            break;

            case "divide":
                calculations.innerHTML = parseInt(calculations.innerHTML) / firstHolder;
            
            break;


            default: 
        }
        
      
        
    }
})