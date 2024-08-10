import { useState } from "react";
import car1 from "./assets/cars/car1.png";
import car2 from "./assets/cars/car2.png";
import car3 from "./assets/cars/car3.png";
import car4 from "./assets/cars/car4.png";
import car5 from "./assets/cars/car5.png";
import car6 from "./assets/cars/car6.png";
import car7 from "./assets/cars/car7.png";
import car8 from "./assets/cars/car8.png";
import ArrowButtons from "./components/ArrowButtons";


import Slide from "./components/Slide";
import ImageButton from './components/ImageButton';

function App() {

  const carLink=[
    car1,
    car2,
    car3,
    car4,
    car5,
    car6,
    car7,
    car8,
  ]

  const [slideNo, setSlideNo] = useState(0)
  console.log(slideNo)


  return (
    <div className="h-screen flex flex-col justify-around items-center " >
      <div className='w-full flex justify-around items-center '>
        <ArrowButtons direction={'left'} setSlideNo={setSlideNo}/>
        <Slide carLink={carLink} slideNo={slideNo}/>
        <ArrowButtons direction={'right'} setSlideNo={setSlideNo}/>
      </div>
      <div >
        <ImageButton carLink={carLink} setSlideNo={setSlideNo} slideNo={slideNo} />
      </div>
      
    </div>
  )
}

export default App
