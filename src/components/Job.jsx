import React from 'react';
import { BsDot } from 'react-icons/bs';

function Job({ job, addFilter }) {
  let categoriesArr = [job.role, job.level];

  job.languages.forEach((lang) => {
    if (!lang) {
      return;
    } else {
      return categoriesArr.push(lang);
    }
  });

  job.tools.forEach((tool) => {
    if (!tool) {
      return;
    } else {
      return categoriesArr.push(tool);
    }
  });

  return (
    <>
      <div className="relative flex px-8 rounded-lg bg-lightGrayishCyan pt-8 md:pt-12 pb-6 flex-col gap-2 lg:flex-row lg:items-center">
        <div className="absolute lg:hidden -top-[25px] md:-top-[35px]">
          <img
            src={job.logo}
            alt={job.company}
            className="w-[50px] md:w-[70px] lg:w-[90px]"
          />
        </div>
        {job.featured && (
          <div className="absolute w-2 h-full bg-desaturatedDarkCyan top-0 left-0 rounded-l-lg"></div>
        )}
        <div className="lg:flex items-center gap-6">
          <div className="hidden lg:block">
            <img src={job.logo} alt={job.company} className=" lg:w-[90px]" />
          </div>
          <div className="lg:flex flex-col items-start gap-2">
            <div className="flex items-center gap-2 pb-2 lg:pb-0 flex-1">
              <h2 className="font-semibold md:text-2xl lg:text-lg tracking-wide mr-2 text-desaturatedDarkCyan">
                {job.company}
              </h2>
              {job.new ? (
                <span className="text-white bg-desaturatedDarkCyan tracking-widest pt-2 pb-1 px-3 lg:p-2 lg:pb-1 rounded-full uppercase lg:text-sm md:text-lg">
                  New!
                </span>
              ) : (
                ''
              )}
              {job.featured ? (
                <span className="text-white bg-veryDarkGrayishCyan tracking-widest pt-2 pb-1 px-3 lg:p-2 lg:pb-1 rounded-full uppercase lg:text-sm md:text-lg">
                  Featured
                </span>
              ) : (
                ''
              )}
            </div>
            <h3 className="tracking-wide lg:tracking-normal font-bold text-veryDarkGrayishCyan lg:text-2xl text-lg md:text-3xl">
              {job.position}
            </h3>
            <div className="flex items-center md:text-lg lg:text-base tracking-wider gap-1 text-darkGrayishCyan">
              <span>{job.postedAt}</span>
              <BsDot />
              <span>{job.contract}</span>
              <BsDot />
              <span>{job.location}</span>
            </div>
          </div>
        </div>
        <hr className="h-[2px] w-full bg-darkGrayishCyan/50 lg:hidden" />
        <div className="flex flex-wrap gap-3 py-2 md:text-xl lg:text-base lg:justify-end lg:ml-auto  text-desaturatedDarkCyan font-semibold tracking-wide">
          {categoriesArr.map((category, index) => (
            <span
              key={index}
              className="bg-filterTablets py-1 drop-shadow-sm px-3 rounded-md cursor-pointer"
              onClick={() => {
                addFilter(category);
              }}
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default Job;
