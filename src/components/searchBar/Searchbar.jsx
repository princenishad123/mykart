import React, { useContext, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const Searchbar = () => {
  const [query, setQuery] = useState("");

  const HandelSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="">
      <form
        onSubmit={HandelSearch}
        className="flex w-96 max-lg:w-64 max-md:w-96 px-2 rounded-md items-center bg-gray-100 border"
      >
        <input
          type="search"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for Brand product and More"
          className=" w-full py-1 outline-none bg-transparent"
        />
        <Link to={`/search?q=${query}`}>
          <button type="submit" className="text-xl text-gray-500">
            <IoIosSearch />
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Searchbar;
