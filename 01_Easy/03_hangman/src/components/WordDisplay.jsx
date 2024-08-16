function WordDisplay({ word, correct, wrong }) {
  return (
    <>
      {wrong.length >= 5
        ? word.map((lt, index) =>
            correct.includes(lt) ? (
              <div
                key={index}
                className="w-[5vw] h-[5vw] font-bold text-4xl text-center text-green-600"
              >
                {lt}
              </div>
            ) : (
              <div
                key={index}
                className="w-[5vw] h-[5vw] text-red-600 font-bold text-4xl text-center"
              >
                {lt}
              </div>
            )
          )
        : word.map((lt, index) =>
            correct.includes(lt) ? (
              <div
                key={index}
                className="w-[5vw] h-[5vw] font-bold text-4xl text-center"
              >
                {lt}
              </div>
            ) : (
              <div
                key={index}
                className="w-[5vw] h-[5vw] border-b-4 border-black font-bold text-4xl text-center"
              />
            )
          )}
    </>
  );
}

export default WordDisplay;
