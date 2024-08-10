function Slide({carLink, slideNo}) {
  return (
    <div className='flex  w-[50vw] overflow-hidden'>
      {carLink.map((imglink)=><img src={imglink} className="w-[100vw] transform transition-transform duration-500 transition ease-in-out" style={{ transform: `translateX(-${50 * slideNo}vw)` }}/>)}
    </div>
  )
}

export default Slide


