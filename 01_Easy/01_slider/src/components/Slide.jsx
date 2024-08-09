function Slide({carLink}) {
  return (
    <div className='flex  w-[50vw] overflow-hidden'>
      {carLink.map((imglink)=><img src={imglink} className='w-[100vw]'/>)}
    </div>
  )
}
// dfhskdjhfkjsdhfdjshf

export default Slide


