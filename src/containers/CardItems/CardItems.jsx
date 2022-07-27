import { Link } from 'react-router-dom';
import './Cards.css';

const CardItems = props => {
  return (
    <li key={props.id} className="cards__item">
      <Link className="cards__item__link" to={props.path}>
        <figure className="cards__item__pic-wrap" data-category={props.label}>
          <img className="cards__item__img" alt="Travel" src={props.src} />
        </figure>
        <div className="cards__item__info">
          <h5 className="cards__item__text">{props.text}</h5>
        </div>
      </Link>
    </li>
  );
};

export default CardItems;
