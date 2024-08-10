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
    <div className='w-full h-screen  flex justify-around items-center'>
      <ArrowButtons direction={'left'} setSlideNo={setSlideNo}/>
      <Slide carLink={carLink} slideNo={slideNo}/>
      <ArrowButtons direction={'right'} setSlideNo={setSlideNo}/>
    </div>
  )
}

export default App
