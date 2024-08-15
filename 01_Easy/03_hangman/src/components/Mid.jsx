import WordDisplay from './WordDisplay';


function Mid({word, correct}) {
  return (
    <div className="w-full h-[30vh]  flex justify-center items-center">
        <div className="w-[60vw] h-[50%]  flex justify-around items-center">
          <WordDisplay word={word} correct={correct}/>
        </div>
    </div>
  )
}

export default Mid