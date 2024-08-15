function LifeIndicator({ wrong }) {
  const arr=[0,1,2,3,4]
  return (
    <>
      {arr.map((num)=> num<wrong.length ? <div key={`${num}sdf`} className="w-[5vw] h-[5vw] bg-red-500"></div>:<div key={`${num}sdf`} className="w-[5vw] h-[5vw] bg-green-500"></div>)}
    </>
  )
}

export default LifeIndicator
