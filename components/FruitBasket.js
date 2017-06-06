import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

function FruitBasket (props) {
  return (
    <div className="fruit-basket">
      <Filter handleChange={props.handleFilterChange} />
      <FilteredFruitList
        filter={props.selectedFilter} />
    </div>
  )
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: null
}

export default FruitBasket;
