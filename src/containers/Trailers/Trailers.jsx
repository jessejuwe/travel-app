import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HOLIDAYS } from '../../helpers/holidays';

import './Trailers.css';

const Trailers = () => {
  const [currVideo, setCurrVideo] = useState();

  const navigate = useNavigate();

  const playHandler = useCallback(place => {
    let container = document.getElementById('trailer-container');
    container.style.background = 'none';
    setCurrVideo(place);
  }, []);

  const gobackHandler = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <div className="trailer-container" id="trailer-container">
      <video src={currVideo} autoPlay loop muted />
      <div className="hero-btns">
        {HOLIDAYS.map((holiday, index) => (
          <li key={index}>
            <button
              className="trailer-btn trailer-btn--outline trailer-btn--large"
              onClick={() => playHandler(holiday.link)}
            >
              {holiday.place} <i className={holiday.icon} />
            </button>
          </li>
        ))}
        <button
          className="trailer-btn trailer-btn--medium"
          onClick={gobackHandler}
        >
          GO BACK
        </button>
      </div>
    </div>
  );
};

export default Trailers;
