import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    };

    this.fetchFilters = this.fetchFilters.bind(this);
    this.updateFilter = this.updateFilter.bind(this);
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFruit() {
    fetch('/api/fruit')
      .then(res => res.json())
      .then(fruit => this.setState({ items: fruit}));
  }

  fetchFilters() {
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filters => this.setState({filters: filters}));
  }

   updateFilter(ev) {
    console.log('update filter to: ', ev.target.value);
    this.setState({ currentFilter: ev.target.value });
  }

  render() {
    return (
      <FruitBasket
        fruit={this.state.fruit}
        filters={this.state.filters}
        currentFilter={this.state.currentFilter}
        updateFilterCallback={this.updateFilter} />
    );
  }    
}

export default App;
