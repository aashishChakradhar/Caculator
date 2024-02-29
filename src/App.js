import {
  useState,
} from "react"; 
import "./App.css";

function App() { 
  const[number, setNumber]=useState({
    input: 0,
    symbol: null,
    result: null,
  });

  function clickHandel(){
    if(number.symbol == null){
      setNumber({
        ...number,input: ' ',result: null
      })
    }
    else{
      setNumber({
        ...number,input: ' ',
      })
    }
  }

  function Equals(){
    if (number.result === 0){
      setNumber({
        result: null
      })
    }
    if(number.input === ' '){
      number.input = 0
    }
    if (number.symbol === '+'){
      setNumber(
        {
          ...number,
          result : parseFloat(number.result) + parseFloat(number.input),
          input:0,
          symbol: null
        }
      )      
    }
    else if (number.symbol === '-'){
      setNumber(
        {
          ...number,
          result : parseFloat(number.result) - parseFloat(number.input),
          input:0,
          symbol: null
        }
      )  
    }
    else if (number.symbol === '*'){
      setNumber(
        {
          ...number,
          result : parseFloat(number.result) * parseFloat(number.input),
          input:0,
          symbol: null
        }
      )  
    }
    else if (number.symbol === '/'){
      setNumber(
        {
          ...number,
          result : parseFloat(number.result) / parseFloat(number.input),
          input:0,
          symbol: null
        }
      )  
    }
    else{
      number.result = number.input
    }
  };

  function Add(){
    if(number.input === ' '){
      number.input = 0
    }
    if(number.result === null){
      setNumber({
        ...number,
        result: parseFloat(number.input),
        symbol: '+',
      })
    }
    else{
      setNumber({
        ...number,
        result: parseFloat(number.result) + parseFloat(number.input),
        symbol: '+',
      })
    }
  };

  function Subtract(){
    if(number.input === ' '){
      number.input = 0
    }
    if(number.result === null){
      setNumber({
        ...number,
        result : number.input,
        symbol: '-',
      })
    }
    else{
      setNumber({
        ...number,
        result: parseFloat(number.result) - parseFloat(number.input) ,
        symbol: '-',
      })
    }
  };

  function Times(){
    if(number.input === ' '){
      number.input = 0
    }
    if(number.result === null){
      setNumber({
        ...number,
        result: parseFloat(number.input),
        symbol: '*',
      })
    }
    else{
      setNumber({
        ...number,
        result: parseFloat(number.result) * parseFloat(number.input),
        symbol: '*',
      })
    }
  };

  function Division(){
    if(number.input === ' '){
      number.input = 0
    }
    if(number.result === null){
      setNumber({
        ...number,
        result: parseFloat(number.input),
        symbol: '/',
      })
    }
    else{ 
      setNumber({
        ...number,
        result: parseFloat(number.result) / parseFloat(number.input),
        symbol: '/',
      })
    }
  };

  function Power(power){
    setNumber({
      ...number,
      result : Math.pow(number.input,power),  
      symbol: null
    })
  }
  return(
    <div className="App">
      <h1>Simple Working Calculator</h1>
      <p> = {number.result} {number.symbol} </p>
      <input type = 'number' placeholder="0" pattern="[0-9]"
        onClick={
          clickHandel
        }
        value={number.input}
        onChange={
          e => {
            setNumber({
                ...number,
                input: e.target.value,
              }
            )
          } 
        }   
      />

      <div>
        <button onClick={()=>Power(2)}>X<sup>2</sup></button>
        <button onClick={()=>Power(0.5)}>X<sup>1/2</sup></button>
        <button onClick={Add}>+</button>
        <button onClick={Subtract}>-</button>
        <button onClick={Times}>*</button>
        <button onClick={Division}>/</button>
        <button onClick={Equals}>=</button>

        <button 
          onClick={
            () => setNumber({
              ...number,input: 0,
            })
          }
        >
          Clear
        </button>

        <button 
          onClick={
            () => setNumber({
              ...number, result: null, symbol: null,input: 0
            })
          }
          >
          MC
        </button>
      </div>
    </div>
  )
} 
export default App; 
