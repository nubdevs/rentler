import React, { useContext } from 'react';
import CountryDropdown from './CountryDropdown';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';
import { HouseContext } from './HouseContext';
import { RiSearch2Line } from 'react-icons/ri';

const Search = () => {
  const { handleClick } = useContext(HouseContext);
  return (
    <div className='flex flex-col justify-start item-center p-2 gap-2 mt-6'>
      <CountryDropdown />
      <hr/>
      <PropertyDropdown /><hr/>
      <PriceRangeDropdown /><hr/>
      <button
        onClick={() => {
          handleClick();
        }}
        className='flex w-full flex-row justify-center items-center p-2 bg-violet-600 hover:bg-green-600 text-white'
      >Search 
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
