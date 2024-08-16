function Option({ data, type, stateNo, setStateNo, setOptionsView, city,setCity }) {
  let renderData = [];

  if (type === "state") {
    renderData = data.map((item) => item.state);
  } else if (type === "city" && stateNo !== null && stateNo !== undefined) {
    renderData = data[stateNo]?.cities || [];
  }

  return (
    <>
      {renderData.map((item, index) => (
        <div
          key={index}
          onClick={() => {
            if (type === "state") {
              setStateNo(index);
            }else if(type=== 'city'){
              setCity([...city,item])
            }
            setOptionsView(false);
          }}
          className="w-full h-10 border-b-2 py-2 border-gray-300 cursor-pointer bg-blue-100 flex items-center pl-4 hover:bg-blue-500 hover:text-white duration-300 ease-in-out"
        >
          {item}
        </div>
      ))}
    </>
  );
}

export default Option;
