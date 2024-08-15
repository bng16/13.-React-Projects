function Keybord({ wrong, correct }) {
  const keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  return (
    <div className="flex flex-wrap">
      {keys.map((lt) => {
        // Determine the background color based on whether the letter is in `correct` or `wrong`
        let bgColor;
        if (correct.includes(lt)) {
          bgColor = 'bg-green-300';
        } else if (wrong.includes(lt)) {
          bgColor = 'bg-red-300'; // Corrected from 'bg-green-50' to 'bg-red-50'
        } else {
          bgColor = 'bg-gray-100';
        }

        return (
          <div
            key={lt}
            className={`w-[3vw] h-[3vw] flex justify-center items-center border-2 m-3  border-black font-extrabold ${bgColor}`}
          >
            {lt}
          </div>
        );
      })}
    </div>
  );
}

export default Keybord;
