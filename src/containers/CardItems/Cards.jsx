import { CARD_ITEMS } from '../../helpers/card-items';
import CardItems from './CardItems';
import './Cards.css';

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {CARD_ITEMS.map((item, index) => (
              <CardItems
                id={index}
                src={item.src}
                text={item.text}
                label={item.label}
                path={item.path}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
