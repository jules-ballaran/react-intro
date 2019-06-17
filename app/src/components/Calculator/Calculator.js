import React, { useState } from 'react'
import calculatorImg from '../../calculator.png';

function Calculator() {
    const [header, setHeader] = useState();
    const [display, setDisplay] = useState('0');
    const [operator, setOperator] = useState('');
    const [temp, setTemp] = useState();
    const [reset, setReset] = useState('false');
    const normal = function (num) {
        if(display == '0'){
            setDisplay(num)
        } else if (display.length < 15){
            setDisplay(display + num)
        }
    }

    const select = function (op){
        if (!operator){
            setTemp(parseInt(display));
            setDisplay('0');
            setOperator(op);
        }
    }

    let result;
    const cal = function(){
        if (!operator) return;
        switch (operator){
            case '+':
                result = temp + parseInt(display, 10);
                break;
            case '-':
                result = temp - parseInt(display, 10);
                break;
            case '*':
                result = temp * parseInt(display, 10);
                break;
            case '/':
                result = temp / parseInt(display, 10);
                break;
            default:
                break;
        }
        setDisplay(result.toString());
    }

    const clearDisplay = () => {
        setDisplay('0');
        setTemp(0);
        setOperator('');
        setReset(false);
    }

    return (
      <div id="calculator-container">
        <input id="header-input"  onChange={(e) => setHeader(e.target.value)}/>
        <h1 id="header">{header}</h1>
        <img className="remove-highlight" src={calculatorImg} alt="calculator" />
        <div id="calculator-mask" className="remove-highlight">
          <div className="output">
            <span className="total">{display}</span>
          </div>

          <div onClick={clearDisplay} className="btn clear"></div>

          <div onClick={()=>normal('0')} className="btn zero"></div>
          <div onClick={()=>normal('1')} className="btn one"></div>
          <div onClick={()=>normal('2')} className="btn two"></div>
          <div onClick={()=>normal('3')} className="btn three"></div>
          <div onClick={()=>normal('4')} className="btn four"></div>
          <div onClick={()=>normal('5')} className="btn five"></div>
          <div onClick={()=>normal('6')} className="btn six"></div>
          <div onClick={()=>normal('7')} className="btn seven"></div>
          <div onClick={()=>normal('8')} className="btn eight"></div>
          <div onClick={()=>normal('9')} className="btn nine"></div>

          <div onClick={cal} className="btn equal"></div>
          <div onClick={()=>select('*')} className="btn multiply"></div>
          <div onClick={()=>select('/')} className="btn divide"></div>
          <div onClick={()=>select('-')} className="btn subtract"></div>
          <div onClick={()=>select('+')} className="btn add"></div>
        </div>
      </div>
    )
}

export default Calculator;