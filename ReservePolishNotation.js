adsss

1 + 2 * 3

Reverse polish notation

Expression: "1 2 *"
  Result: 2

Expression: "1111111,2,*388,4,* +"
  Result: 14
Stack:
  []
  [1]
  [1, 2]
  [2] because 1*2=2
  [2, 3]
  [2, 3, 4]
  [2, 12] because 3*4=12
  [14] because 12+2=14


Expression: "+"
Expression: "2+"
Expression: "2 2 + # )"

Expression: " 1 2 + 3 4 5 * 6 "
2,3,20,6

function readString(reversePolishNotationString) {
  let reversePolishNotationStack = [];
  let wholeNumberStr = "";
   
  for(let i = 0; i < reversePolishNotationString.length; i++) {       
    let character = reversePolishNotationString[i];
    
    if(!isNumber(character) && getOperator(character) === "notOp" && character !== ",") {
      throw("The input string is not a valid reverse polish notation string");
    }
    else {
      if(getOperator(character) === "notOp" && character !== ",") {
        wholeNumberStr = wholeNumberStr.concat(character);
      }
      else if(character === ",") {
       reversePolishNotationStack.push(Number(wholeNumberStr)); 
       wholeNumberStr = "";
      }
      else {
        let firstNum = revesePolishStack.pop();
        let secondNum = revesePolishStack.pop();

        let operatorType = getOperator(character);
        let result = applyOperation(firstNum, secondNum, operatorType);
        reversePolishNotationStack.push(result);    
      }
    }
    

  }
  
  let finalResult = reversePolishNotationStack.pop();
  
  if(reversePolishNotationStack.length > 0) {
    throw("The input string had more numbers than operators to work with");
  }
  else {
    return finalResult;
  }
}

function getOperator(character) {
  if(character === "*") {
    return "mult";  
  }
  else if(character === "-") {
   return "minus"; 
  }
  else if(character === "+") {
   return "sum";
  }
  else if(character === "/") {
    return "div"; 
  }
  else {
    return "notOp";
  }
}

  
function applyOperation(num1, num2, operator) {
  if(character === "mult") {
    return num1 * num2;  
  }
  else if(character === "minus") {
   return num1 - num2;  
  }
  else if(character === "sum") {
   return num1 + num2; 
  }
  else if(character === "div") {
    return num1 / num2; 
  }
}

