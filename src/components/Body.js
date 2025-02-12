import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { filterData } from '../utils/helper';
import { RESTAURANTS_URL } from '../constants';
import { ImSearch } from 'react-icons/im';

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(RESTAURANTS_URL);
    const json = await data.json();
    debugger;
    setAllRestaurants(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  if (!allRestaurants) return null;

  return (
    <>
      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <>
          <div className='w-full h-12 flex justify-center mt-4'>
            <div className='w-[90%] pr-4 flex items-center border-solid border-2 border-[rgba(40,44,63,.3)] rounded-md lg:w-[60%]'>
              <div data-testid='search-btn' className='flex-1 py-0 px-4'>
                <input
                  data-testid='search-input'
                  type='text'
                  className='w-full h-full outline-0 border-none overflow-hidden text-ellipsis align-middle font-mono font-medium'
                  placeholder='Search for restaurants...'
                  value={searchText}
                  onChange={(e) => {
                    if (!e.target.value) {
                      setSearchText(e.target.value);
                      setFilteredRestaurants(allRestaurants);
                      return;
                    }
                    setSearchText(e.target.value);
                    const data = filterData(searchText, allRestaurants);
                    setFilteredRestaurants(data);
                  }}
                />
              </div>
              <ImSearch fontSize='large' />
            </div>
          </div>

          {filteredRestaurants?.length > 0 ? (
            <div
              data-testid='restaurant-list'
              className='grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:md:grid-cols-1'
            >
              {filteredRestaurants.map((restaurant) => (
                <Link
                  to={`/restaurant/${restaurant.info.id}`}
                  key={restaurant.info.id}
                >
                  <RestaurantCard {...restaurant.info} />
                </Link>
              ))}
            </div>
          ) : (
            <div className='flex flex-1 justify-center items-center font-mono text-lg'>
              No restaurant found.
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Body;
