import LifeIndicator from "./LifeIndicator"

function Top({ wrong }) {
  return (
    <div className="w-full h-[30vh]  flex justify-center items-center">
        <div className="w-[60vw] h-[50%]  flex justify-between items-center">
            <LifeIndicator wrong={wrong}/>
        </div>
    </div>
  )
}

export default Top