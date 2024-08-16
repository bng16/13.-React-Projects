import { MdCancel } from "react-icons/md";

function CityComp({ city, setCity }) {

  const deleteCity = (item) => {
    // Filter out the item and update the state
    setCity(city.filter((e) => e !== item));
  };

  return (
    <div className="w-full flex flex-wrap py-4">
      {city.map((item) => (
        <span 
          key={item} 
          className=" text-lg flex items-center space-x-2 px-2 m-1 rounded border-[1px] hover:border-black gap-2"
        >
          {item}
          <MdCancel
            className="text-gray-400 hover:text-red-500 duration-300 ease-in-out cursor-pointer"
            onClick={() => deleteCity(item)}
          />
        </span>
      ))}
    </div>
  );
}

export default CityComp;
