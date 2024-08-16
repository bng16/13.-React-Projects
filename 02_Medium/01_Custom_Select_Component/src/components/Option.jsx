function Option({ data, type, stateNo, setStateNo, setOptionsView, city,setCity }) {
  let renderData = [];
  let color='';

  if (type === "state") {
    renderData = data.map((item) => item.state);
    color = "blue";
  } else if (type === "city" && stateNo !== null && stateNo !== undefined) {
    renderData = data[stateNo]?.cities || [];
    color = "green";
  }

  return (
    <>
      {renderData.map((item, index) => (
        <div
          key={index}
          onClick={() => {
            if (type === "state") {
              setStateNo(index);
              setOptionsView(false);
            }else if(type=== 'city'){city.includes(item) ? '':
              setCity([...city,item])
            }
          }}
          className={`w-full h-10 border-b-2 py-2 border-gray-300 cursor-pointer bg-${color}-100 flex items-center pl-4 hover:bg-${color}-500 hover:text-white duration-300 ease-in-out`}
        >
          {item}
        </div>
      ))}
    </>
  );
}

export default Option;
