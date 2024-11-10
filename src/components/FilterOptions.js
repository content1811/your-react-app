// src/components/FilterOptions.js
import React from 'react';
import './FilterOptions.css';

const FilterOptions = ({ filters, onFilterChange }) => {
  return (
    <div className="filter-options">
      {filters.map((filter, index) => (
        <button key={index} className="filter-btn" onClick={() => onFilterChange(filter)}>
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterOptions;
