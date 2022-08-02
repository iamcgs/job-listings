import { useState } from 'react';
import data from '../src/data/data.json';
import Footer from './components/Footer';
import Header from './components/Header';
import Job from './components/Job';
import Listing from './components/Listing';
import Search from './components/Search';

function App() {
  const [filters, setFilters] = useState([]);

  const filterByCategories = ({ role, level, tools, languages }) => {
    if (filters.length === 0) {
      return true;
    }

    const jobTags = [role, level];

    if (tools) {
      jobTags.push(...tools);
    }

    if (languages) {
      jobTags.push(...languages);
    }

    return jobTags.some((tag) => filters.includes(tag));
  };

  const jobsByCategory = data.filter(filterByCategories);

  const addFilter = (category) => {
    // Avoid adding duplicate categories
    if (filters.includes(category)) {
      return;
    }
    setFilters((prev) => [...prev, category]);
  };

  const deleteFilter = (category) => {
    const updatedFilter = filters.filter(
      (item) => item.toLowerCase() !== category.toLowerCase()
    );
    setFilters(updatedFilter);
  };

  const clearFilters = () => {
    setFilters([]);
  };

  return (
    <>
      <Header />
      <main className="px-4 max-w-[1110px] mx-auto">
        <Search
          filters={filters}
          deleteFilter={deleteFilter}
          clearFilters={clearFilters}
        />
        <Listing>
          {jobsByCategory.map((job) => {
            return <Job key={job.id} job={job} addFilter={addFilter} />;
          })}
        </Listing>
      </main>
      <Footer />
    </>
  );
}

export default App;
