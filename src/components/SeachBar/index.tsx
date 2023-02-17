import SearchIcon from "../../resources/images/components/SearchIcon";
import TapLogo from "../../resources/images/LogoTap.svg";
import ThreeDotsIcon from "../../resources/images/components/ThreeDotsIcon";
import Image from "next/image";

const SearchBar = () => {
  return (
    <div className="flex justify-between items-center absolute w-full pt-3 px-4">
      <div className="flex justify-start">
              <Image src={TapLogo} alt="Tap Logo" width={30} height={30} />
            </div>
      <div className="flex bg-white rounded-xl px-2 ">
        <button className="focus:outline-none px-2">
          <SearchIcon size={15} color="#000000" />
        </button>
        <input
          type="text"
          placeholder="Search"
          className="text-gray-700 text-md  focus:outline-none"
        />
      </div>
      <div>
        <ThreeDotsIcon width={25} height={25} color="#ffffff" />
      </div>
    </div>
  );
};

export default SearchBar;

