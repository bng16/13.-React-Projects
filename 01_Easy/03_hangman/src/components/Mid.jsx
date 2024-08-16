import WordDisplay from './WordDisplay';


function Mid({word, correct, wrong}) {
  return (
    <div className="w-full h-[30vh]  flex justify-center items-center">
        <div className="w-[60vw] h-[50%]  flex justify-around items-center">
          <WordDisplay word={word} correct={correct} wrong={wrong}/>
        </div>
    </div>
  )
}

export default Mid