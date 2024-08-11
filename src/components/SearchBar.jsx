import React, { useState } from "react";
import SearchLogo from "../assets/images/search-logo.png";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="flex gap-2.5 self-start p-2.5 ml-12 text-xl tracking-normal text-gray-400 whitespace-nowrap rounded-xl bg-slate-50 max-md:ml-2.5 w-96">
      <img
        loading="lazy"
        src={SearchLogo}
        alt=""
        className="object-contain shrink-0 w-7 aspect-square"
      />
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Buscar"
        className="bg-transparent border-none outline-none"
      />
    </div>
  );
}

export default SearchBar;
