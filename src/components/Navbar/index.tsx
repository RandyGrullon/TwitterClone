import React from "react";
import SearchBar from "../SeachBar";
const index = () => {
  return (
    <div className="h-full w-full fixed">
      <div className="w-full bg-black  blur-xl px-4 py-5 absolute"></div>
      <SearchBar />
    </div>
  );
};

export default index;
