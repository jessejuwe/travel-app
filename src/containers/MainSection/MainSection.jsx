import { useState } from 'react';
import { Button } from '../../components/Button/Button';
import BackgroundVideo from '../../assets/videos/video-1.mp4';

import Backdrop from '../../components/UI/Backdrop';
import Login from '../../components/Login/Login';
import './MainSection.css';

const MainSection = () => {
  const [showModal, setShowModal] = useState(false);

  const loginHandler = () => setShowModal(true);

  const closeHandler = event => {
    event.preventDefault();
    setShowModal(false);
  };

  return (
    <div className="hero-container">
      {showModal && <Login onClose={closeHandler} />}
      {showModal && <Backdrop show closed={closeHandler} />}
      <video src={BackgroundVideo} autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>See the world today!</p>
      <div className="hero-btns">
        <button className="btns btn--outline btn--large" onClick={loginHandler}>
          GET STARTED
        </button>
        <Button
          to="/trailers"
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
};

export default MainSection;
