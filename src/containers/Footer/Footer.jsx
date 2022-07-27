import { Link } from 'react-router-dom';
import { Button } from '../../components/Button/Button';

import {
  ABOUT_US,
  CONTACT_US,
  ICONS,
  SOCIAL_MEDIA,
  VIDEOS,
} from '../../helpers/footer-links';

import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button to="/subscribe" buttonStyle="btn--outline">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            {ABOUT_US.map((item, index) => (
              <Link id={index} to={item.to}>
                {item.title}
              </Link>
            ))}
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            {CONTACT_US.map((item, index) => (
              <Link id={index} to={item.to}>
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            {VIDEOS.map((item, index) => (
              <Link id={index} to={item.to}>
                {item.title}
              </Link>
            ))}
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            {SOCIAL_MEDIA.map((item, index) => (
              <Link id={index} to={item.to}>
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              TRVL
              <i class="fa fa-plane" />
            </Link>
          </div>
          <small className="website-rights">TRVL © 2022</small>
          <div className="social-icons">
            {ICONS.map((item, index) => (
              <Link id={index} className={item.class} to={item.to}>
                <i class={item.icon} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
