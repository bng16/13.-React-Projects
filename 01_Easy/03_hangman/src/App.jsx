import { useState } from 'react'
import Top from './components/Top'
import Mid from './components/Mid'
import Words from "./assets/words.json"
import Bot from './components/Bot';




function App() {
  const[wrong,setWrong]=useState([]);
  const[correct,setCorrect]=useState([]);
  
  let word=[];
  const getWord=()=>{
    word=Words[Math.floor(Math.random() * Words.length)];
    word=word.split('')
  }
  
  
  
  return (
    <>
      <Top wrong={wrong}/>
      <Mid word={word} correct={correct}/>
      <Bot wrong={wrong} correct={correct}/>
    </>
  )
}

export default App
