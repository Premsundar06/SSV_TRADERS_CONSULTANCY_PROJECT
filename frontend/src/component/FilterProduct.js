import React from 'react';
import { LuPaintbrush } from "react-icons/lu";

const FilterProduct = ({category,onClick,isActive}) => {
  return (
    <div onClick={onClick}>
    <div className={` text-3xl p-5 rounded-full cursor-pointer ${isActive ? "bg-red-600 text-white" : "bg-yellow-500"}`}>
      <LuPaintbrush/>
    </div>
    <p className='text-center font-medium my-1 capitalize'>{category}</p>
    </div>
  );
};

export default FilterProduct