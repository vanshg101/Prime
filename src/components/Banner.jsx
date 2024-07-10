import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/Context";

function Banner({ id, img, title, description }) {
  const [isHovered, setIsHovered] = useState(false);
  const { savedList, handleAddToMyStuff } = useContext(GlobalContext);

  return (
    <div
      className="relative m-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative h-40 w-72 rounded-md bg-cover bg-center overflow-hidden transform transition-transform duration-300 hover:scale-110"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="absolute inset-0 bg-black opacity-0"></div>
        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100 bg-black bg-opacity-50 z-10">
          <div className="text-center text-white p-2">
            <h1 className="text-sm font-bold mb-2">{title}</h1>
          </div>
        </div>
      </div>
      {isHovered && (
        <div className="absolute  top-full left-0 w-72 bg-white shadow-lg rounded-md p-2 transition-opacity duration-300 z-100 mt-2">
          <p>Included with Prime</p>
          <button className="bg-blue-500 px-2 py-1 text-xs rounded hover:bg-blue-700 transition">
            Watch Now
          </button>
          <button
            onClick={() =>
              handleAddToMyStuff({ id, img, title, description })
            }
            className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white"
          >
            {savedList.some((item) => item.id === id)
              ? "Remove from My Stuff"
              : "Add to My Stuff"}
          </button>
          <p>Amazon Original</p>
          <p>New Episode</p>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
}

export default Banner;
