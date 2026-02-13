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
                if (display.value==="0" || isNewNumber || justCalculated) {
                    display.value=value;
                    isNewNumber=false;
                    justCalculated=false;
                }else{
                    display.value+=value;
                }
            }

            //operator-logic

            else if (value==="+" || value==="-" || value==="*" || value==="/") {
                firstNumber=display.value;
                operator= value;
                isNewNumber = true;
                display.value="0";  
            }

            //reset-logic
            
            else if(value==="C"){
                display.value="0";
                firstNumber="";
                operator="";
                isNewNumber=true;
                justCalculated=false;
            }
            
            //equals-logic
            
            else if (value==="=") {
                if (firstNumber ==="" || operator ==="" || display.value ===""){
                    firstNumber="";
                    operator="";
                    display.value="";
                    isNewNumber=true;
                    justCalculated=false;
                    return;
                }
                let secoundNumber=display.value;
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
