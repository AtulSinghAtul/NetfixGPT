import { useSelector } from "react-redux";
import languages from "../utils/languageConstant";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.lang.lang);

  return (
    <div className="flex justify-center items-center">
      <div className="bg-black w-1/2 p-3 mt-[10%] grid grid-cols-12 gap-2">
        <input
          type="text"
          placeholder={languages[langKey].gptPlaceholder}
          className="col-span-9 h-12 outline-none p-2 text-[18px] text-center"
        />
        <button className="col-span-3 text-2xl font-medium text-center bg-red-700 text-white">
          {languages[langKey].search}
        </button>
      </div>
    </div>
  );
};

export default GptSearchBar;
