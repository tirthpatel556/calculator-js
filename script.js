let buttons=document.querySelectorAll("button");
let display=document.getElementById("display");
let firstNumber="";
let operator="";
let equals="";
let justCalculated=false;
let isNewNumber=true;
buttons.forEach(function(button){
    button.addEventListener("click",
        function () {

            // number-logic;
            
            let value= button.innerText;
            if (!isNaN(value)) {
                if (isNewNumber) {
                    display.value=value;
                    isNewNumber=false;
                }else{
                    display.value+=value;
                }
            }

            //operator-logic

            else if (value==="+" || value==="-" || value==="*" || value==="/") {
                firstNumber=display.value;
                operator= value;
                isNewNumber = true;
                display.value="";  
            }

            //reset-logic
            
            else if(value==="C"){
                display.value="";
                firstNumber="";
                operator="";
                isNewNumber=true;
                justCalculated=false;
            }
            
            //equals-logic
            
            else if (value==="=") {
                secoundNumber=display.value;
                let num1=Number(firstNumber);
                let num2=Number(secoundNumber);
                let result;
                if (operator==="+") {
                    result = num1+num2;
                }else if (operator==="-") {
                    result = num1-num2;
                }else if (operator==="*") {
                    result = num1*num2;
                }else if (operator==="/") {
                    result = num1 / num2;
                }
                display.value=result;
                justCalculated=true;
                firstNumber="";
                operator="";
                isNewNumber=true;

            }
        }
    );
});
