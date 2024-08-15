function WordDisplay({ word, correct }) {
  
  return (
    <>
      {word.map((lt,index) => (correct.includes(lt) ? <div key={index} className="w-[5vw] h-[5vw]  font-bold text-4xl text-center">{lt}</div> : <div key={index} className="w-[5vw] h-[5vw] border-b-4 border-black font-bold text-4xl text-center"></div> ))}
    </>
  );
}

export default WordDisplay;



