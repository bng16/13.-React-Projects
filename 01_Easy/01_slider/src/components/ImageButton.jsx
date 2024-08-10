
function ImageButton({carLink, setSlideNo, slideNo}) {

  return (
    <div className="flex justify-center w-20 ">
      {carLink.map((link, index) => (
        <img key={index} src={link} onClick={()=>setSlideNo(index)} className={`mr-7 ${slideNo===index ? 'border-b-2 border-black rounded-md pb-1' : ''}`}/>
      ))}
    </div>
  )
}

export default ImageButton





