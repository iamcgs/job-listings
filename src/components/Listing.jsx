import React from 'react';

function Listing({ children }) {
  return (
    <section className="mt-24 flex flex-col gap-6 md:max-w-[700px] md:mx-auto lg:max-w-none">
      {children}
    </section>
  );
}

export default Listing;
