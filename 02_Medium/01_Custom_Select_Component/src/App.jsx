import { useState } from 'react';
import data from './assets/data.json';
import Select from './components/Select';

function App() {
  const [stateNo, setStateNo] = useState(null);
  const [city, setCity] = useState([])

  return (
    <div className='w-full h-screen flex flex-col gap-5 justify-center items-center bg-slate-100'>
      <Select data={data} type="state" stateNo={stateNo} setStateNo={setStateNo} />
      {stateNo !== null ? <Select data={data} type="city" stateNo={stateNo} city={city} setCity={setCity} /> : ''}
    </div>
  );
}

export default App;
