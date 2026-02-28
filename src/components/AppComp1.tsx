import { useState } from "react";

const AppComp1 = () => {
  const [count, setCount] = useState(0);

  const inc = () => setCount((prev) => prev + 1);
  const dec = () => setCount((prev) => prev - 1);

  return (
    // Kein min-h-screen mehr! Nur noch ein kleiner, kompakter Flex-Container
    <div className="flex items-center gap-3 bg-gray-50 px-3 py-1 rounded-full shadow-inner border border-gray-200">
      <button
        onClick={dec}
        className="w-8 h-8 flex justify-center items-center rounded-full bg-amber-100 text-amber-800 text-xl font-bold hover:bg-amber-200 active:scale-90 transition-all"
      >
        -
      </button>

      {/* Die Zahl, etwas kleiner */}
      <div className="text-xl font-black w-8 text-center text-purple-600">
        {count}
      </div>

      <button
        onClick={inc}
        className="w-8 h-8 flex justify-center items-center rounded-full bg-amber-100 text-amber-800 text-xl font-bold hover:bg-amber-200 active:scale-90 transition-all"
      >
        +
      </button>
    </div>
  );
};

export default AppComp1;
