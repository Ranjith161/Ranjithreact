import { useState } from 'react';
import * as math from 'mathjs'
import './App.css';
import Button from "./components/Button";
import Input from './components/Input';

const App=()=> {
  const [text,setText]=useState("")
  const [result,setResult]=useState("")

  const addToText=(val)=>{
    setText((text)=>[...text,val+" "])
  }
  const resetInput=()=>{
    setText("")
    setResult("")
  }
  const caluclateResult=()=>{
    console.log(text)
    var input=text.join("")
    input=input.replaceAll(" ","")
    console.log(input)
   
    setResult(math.evaluate(input))
 
  }
  const buttoncolor="#FFC0CB"
  return (
    <div className="App">
      
      <div className="calc-wrap">
        <Input text={text} result={result}/>     
    
        <div className='row'>
          <Button symbol="7"handleClick={addToText}/>
          <Button symbol='8'handleClick={addToText}/>
          <Button symbol='9'handleClick={addToText}/>
          <Button symbol='/' color={buttoncolor}handleClick={addToText}/>
          </div>
          <div className='row'>
          <Button symbol='4'handleClick={addToText}/>
          <Button symbol='5'handleClick={addToText}/>
          <Button symbol='6'handleClick={addToText}/>
          <Button symbol='*'color={buttoncolor}handleClick={addToText}/>
          </div>
          <div className='row'>
          <Button symbol='1'handleClick={addToText}/>
          <Button symbol='2'handleClick={addToText}/>
          <Button symbol='3'handleClick={addToText}/>
          <Button symbol='+' color={buttoncolor}handleClick={addToText}/>
          
          </div>
          <div className='row'>
          <Button symbol='0'handleClick={addToText}/>
          <Button symbol='.'handleClick={addToText}/>
          <Button symbol='='handleClick={caluclateResult}/>
          <Button symbol="-" color={buttoncolor}handleClick={addToText}/>
          </div>
          <div> 
            <Button symbol="clear" color="#4EE2EC"handleClick={resetInput}/>
            </div>

      </div>
    
    </div>
  );
}

export default App;
