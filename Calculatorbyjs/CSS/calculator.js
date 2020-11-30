let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screen= document.querySelector('.screen');

function buttonClick(value) {
    if (isNaN(value)) {
        // is not a number
        handleSymbols(value);
    } else {
        // is a number
        handleNumbers(value);
    }
    screen.innerText = buffer;
}

function handleSymbols(symbol) {
    /*  if (symbol === 'C') {
          buffer = "0";
          runningTotal = 0;
     } */
     console.log('handleSymbol', symbol)
    switch(symbol) {
      case 'C':
          buffer = "0";
          runningTotal = 0;
          break;
      case '=':
          if (previousOperator === null) {
              //need 2 numbers
              return
          }    
          flushOperation(parseInt(buffer));
          previousOperator = null;
          buffer = runningTotal;
          runningTotal = 0;
          break;
      case '←':
          if (buffer.length === 1) {
              buffer = '0';
          }  else {
              buffer = buffer.substring(0,buffer.length - 1); 
          }
          break;   
      case '+':
      case '−':
      case '×':
      case '÷':
          handleMath(symbol);
          break;
    }
  }
  
  function handleMath(symbol) {
      console.log('handleMath',symbol)
      if (buffer === "0") {
          return;
      }
  
      const intBuffer = parseInt(buffer);
  
      if (runningTotal === 0) {
          runningTotal = intBuffer;
      } else {
          flushOperation(intBuffer);
      };
  
      previousOperator = symbol;
  
      buffer = "0";
  };
  
  function flushOperation(intBuffer) {
      if (previousOperator === '+')  {
          runningTotal += intBuffer;
      } else if (previousOperator === '−')  {
          runningTotal -= intBuffer;
      } else if (previousOperator === '×')  {
          runningTotal *= intBuffer;
      } else   {
          runningTotal /= intBuffer;
      };
    console.log('runningTotal', runningTotal);
  }

function handleNumbers(numberString) {
    if (buffer === '0') {
        buffer = numberString;
    } else {
        buffer += numberString;
    }
    
};

    function inIt() {
        document.querySelector('.calc-buttons').addEventListener('click', function(event) {
        buttonClick(event.target.innerText);
    })
};

inIt();



