import PropTypes from 'prop-types';
import '../styles/slider.scss';
import Style from 'style-it';

import Button from 'react-bootstrap/Button';

const Item = ({
  url, title, order, description, menu, phone, btnTag,
}) => {
  let stringclass = '';

  if (order === 0) {
    stringclass = 'active';
  }
  return Style.it(`
  #uberuns:after {
    content:'';
    background: url("${url}");
    background-attachment:fixed;
    background-size:cover;
    background-position: center center;
  }`,
    <div className={`carousel-item ${stringclass}`}>

      <div className="image" style={{ backgroundImage: `url(${url})` }} />
      <div className="section" id="uberuns" data={`url(${url})`}>
        <p className="text_slider">
          {title}
        </p>
        <p className="span_title pb-2">{description}</p>
        <div className="row m-2 p-1 d-flex justify-content-around">
          <div className="col-6 d-flex justify-content-center align-items-center">
            <p className="tag_slider">
              {phone !== ''
                ? (
                  <Button variant="outline-warning" className="p-2">
                    {phone}
                  </Button>
                )
                : (
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#e9d061" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#e9d061" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#e9d061" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#e9d061" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#e9d061" className="bi bi-star-fill" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                )}

            </p>
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center">
            <a className="tag_slider" href={menu}>
              <Button variant="light" className="p-2">
                {btnTag}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>);
};

Item.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
};

Item.defaultProps = {
  url: 'https://images.pexels.com/photos/4193850/pexels-photo-4193850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  title: 'No found',
  order: 0,
  phone: '',
};

export default Item;
