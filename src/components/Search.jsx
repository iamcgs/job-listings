import React from 'react';

function Search({ filters, deleteFilter, clearFilters }) {
  return (
    <>
      {filters.length ? (
        <div className="px-6 py-4 flex bg-white gap-4 -mt-8 rounded-lg h-auto md:max-w-[700px] md:mx-auto lg:max-w-none">
          <div className="flex flex-wrap gap-4">
            {filters.map((category, index) => (
              <button
                key={index}
                className="test-xl font-semibold cursor-auto drop-shadow-sm tracking-wide p-3 "
              >
                <span className="bg-filterTablets text-desaturatedDarkCyan rounded-l-md p-2">
                  {category}
                </span>
                <span
                  onClick={() => deleteFilter(category)}
                  className="bg-desaturatedDarkCyan hover:bg-veryDarkGrayishCyan transition-all duration-200 ease-in-out cursor-pointer text-white rounded-r-md p-2"
                >
                  X
                </span>
              </button>
            ))}
          </div>
          <button
            onClick={() => clearFilters()}
            className="text-darkGrayishCyan hover:text-desaturatedDarkCyan hover:underline text-xl ml-auto font-bold tracking-wide"
          >
            Clear
          </button>
        </div>
      ) : (
        ''
      )}
    </>
  );
}

export default Search;
