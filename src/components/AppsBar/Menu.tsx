import NotificationIcon from "../../resources/images/components/Notificationicon";
import HomeIcon from "../../resources/images/components/HomeIcon";
import MessageIcon from "../../resources/images/components/MessageIcon";
import SearchIcon from "../../resources/images/components/SearchIcon";

const Menu = () => {
  return (
    
    <div className="items-center w-full absolute px-8 pt-2 bg-black border-[1px] border-gray-600/25">
      <div className="py-1 flex justify-between ">
      <div className="focus:outline-none px-2">
        <button className="focus:outline-none px-2">
          <HomeIcon size={21} color="#ffffff" />
        </button>
      </div>
      <div className="focus:outline-none px-2">
        <button className="focus:outline-none px-2">
          <SearchIcon size={21} color="#ffffff" />
        </button>
      </div>
      <div className="focus:outline-none px-2">
        <button className="focus:outline-none px-2">
          <NotificationIcon size={21} color="#ffffff" />
        </button>
      </div>
      <div className="focus:outline-none px-2">
        <button className="focus:outline-none px-2">
          <MessageIcon size={21} color="#ffffff" />
        </button>
      </div>
      </div>
    </div>
  );
};

export default Menu;
