import { CARD_ITEMS_ONE, CARD_ITEMS_TWO } from '../../helpers/card-items';
import CardItems from './CardItems';
import './Cards.css';

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {CARD_ITEMS_ONE.map((item, index) => (
              <CardItems
                id={index}
                src={item.src}
                text={item.text}
                label={item.label}
                path={item.path}
              />
            ))}
          </ul>
          <ul className="cards__items">
            {CARD_ITEMS_TWO.map((item, index) => (
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
