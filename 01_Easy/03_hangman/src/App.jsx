import { useEffect, useState } from 'react';
import Top from './components/Top';
import Mid from './components/Mid';
import Words from "./assets/words.json";
import Bot from './components/Bot';

function App() {
  const [wrong, setWrong] = useState([]);
  const [correct, setCorrect] = useState([]);
  const [word, setWord] = useState([]);

  useEffect(() => {
    const getWord = () => {
      const randomWord = Words[Math.floor(Math.random() * Words.length)];
      setWord(randomWord.toUpperCase().split(''));
    };
    getWord();
  }, []);

  useEffect(() => {
    const handleKeypress = (event) => {
      let input = event.key.toUpperCase();

      if (word.includes(input)) {
        setCorrect((prev) => [...prev, input]);
      } else {
        setWrong((prev) => [...prev, input]);
      }
    };

    window.addEventListener('keypress', handleKeypress);

    return () => {
      window.removeEventListener('keypress', handleKeypress);
    };
  }, [word]);

  return (
    <>
      <Top wrong={wrong} />
      <Mid word={word} correct={correct} wrong={wrong} />
      <Bot wrong={wrong} correct={correct} />
    </>
  );
}

export default App;