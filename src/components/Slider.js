import PropTypes from 'prop-types';
import Item from './Item';
import ListItem from './listItem';
import '../styles/slider.scss';

const Slider = ({ input }) => (
  <div className="m-0 p-0">
    <div className="">
      <div id={`slide_in${input[0].idMeal}`} className="carousel slide m-0" data-ride="carousel" data-bs-interval="false" data-interval="false">
        <ol className="carousel-indicators">
          {input.map((obj, index) => (
            <ListItem
              key={obj.idMeal}
              id={index}
              order={index}
            />
          ))}
        </ol>
        <div className="carousel-inner">
          {input.map((obj, index) => (
            <Item
              key={obj.idMeal}
              url={obj.img}
              title={obj.name}
              order={index}
              description={obj.description}
              phone={obj.phone}
              menu={obj.menu}
              btnTag={obj.btnTag}
            />
          ))}
        </div>
        <a className="carousel-control-prev" href={`#slide_in${input[0].idMeal}`} role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="false" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href={`#slide_in${input[0].idMeal}`} role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="false" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
);

Slider.propTypes = {
  input: PropTypes.arrayOf(PropTypes.shape({
    idMeal: PropTypes.number,
    img: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
    menu: PropTypes.string,
    phone: PropTypes.string,
  })),
};

Slider.defaultProps = {
  input: [
    {
      idMeal: 1,
      img: 'https://images.pexels.com/photos/923182/pexels-photo-923182.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      description: 'No found',
      name: 'No name found',
    }],
};

export default Slider;
