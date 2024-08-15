import Keybord from './Keybord';

function Bot({wrong,correct}) {
  return (
    <div className='w-full h-[40vh]  flex justify-center items-center'>
      <div className='w-[60%] h-[100%]  flex justify-center items-center  '>
        <Keybord wrong={wrong} correct={correct}/>
      </div>

    </div>
  )
}

export default Bot