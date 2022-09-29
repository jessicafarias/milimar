import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Category from '../components/Category';
import { changeFilterAction, fetchCategoriesAction } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

import food from '../assets/food/food.jpg';
import free from '../assets/isla/iguana.jpg';
import tours from '../assets/tours/farito2.jpg';
import police from '../assets/emergency/police.jpg';
import image from '../assets/isla/playanorte.jpg';

const Categories = ({
  fetch, categories, filtered, filter,
}) => {
  useEffect(() => {
    fetch([
      { name: 'FOOD', url: food, description: 'Recommended places to eat' },
      { name: 'FREE PLACES TO VISIT', url: free, description: 'Recommended places to visit' },
      { name: 'TOURS', url: tours, description: 'There are tours out there' },
      { name: 'EMERGENCY CONTACT', url: police, description: 'We care for you' },
    ]);
  }, []);

  const handleFilterChange = category => {
    filter(category);
  };

  const filteredCategories = categories.filter(
    category => !!(filtered === null || filtered === category.name),
  );

  return (
    <div className="Categories h-100">
      <CategoryFilter handleFilter={handleFilterChange} />
      {filteredCategories.map(obj => (
        <Category key={obj.name} name={obj.name} url={obj.url} description={obj.description} />
      ))}
      <img
        className="h-100 w-100"
        src={image}
        alt="meal"
      />
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
    }),
  ).isRequired,
  fetch: PropTypes.func.isRequired,
  filtered: PropTypes.string,
  filter: PropTypes.func.isRequired,
};

Categories.defaultProps = {
  filtered: null,
};

const mapStateToProps = state => ({
  categories: state.categories,
  filtered: state.filter,
});

const mapDispatchToProps = dispatch => ({
  fetch: categories => {
    dispatch(fetchCategoriesAction(categories));
  },
  filter: category => {
    dispatch(changeFilterAction(category));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
