import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";




function ArrowButtons({direction, setSlideNo}) {
  const calculate=()=>{
    if(direction==="left"){
      setSlideNo((prev) => prev===0 ? 7 : prev-1); 
    }else{
      setSlideNo((prev) => prev===7 ? 0 : prev+1); 
    }
  }

  return (
    <button className="transform hover:scale-150 transition duration-300 ease-in-out " onClick={calculate}>{direction==='left' ? <IoIosArrowBack /> : <IoIosArrowForward />}</button>
  )
}

export default ArrowButtons
