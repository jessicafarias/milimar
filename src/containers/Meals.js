import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Slider from '../components/Slider';
import { fetchMealsAction } from '../actions';
import FoodList from '../constants/food';
import FreeList from '../constants/freeplaces';
import TourList from '../constants/tours';
import EmergencyList from '../constants/emergency';

const Meals = ({ meals, fetch }) => {
  const { category } = useParams();

  useEffect(() => {
    if (category === 'FOOD') {
      fetch(FoodList);
    }
    if (category === 'FREE PLACES TO VISIT') {
      fetch(FreeList);
    }
    if (category === 'TOURS') {
      fetch(TourList);
    }
    if (category === 'EMERGENCY CONTACT') {
      fetch(EmergencyList);
    }
  }, []);

  return (
    <div>
      <Slider input={meals} />
    </div>
  );
};

Meals.propTypes = {
  meals: PropTypes.arrayOf(
    PropTypes.shape({
      idMeal: PropTypes.number,
      img: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      btnTag: PropTypes.string,
    }),
  ).isRequired,
  fetch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  meals: state.meals,
});

const mapDispatchToProps = dispatch => ({
  fetch: meals => {
    dispatch(fetchMealsAction(meals));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Meals);
