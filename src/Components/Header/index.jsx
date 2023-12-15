import "./Header.scss";
import LOGO from "../../assets/img/header/LOGO.png";
import Military from "../../assets/img/header/Military.png";
import Timer from "../Timer";

const Header = () => {
  const start = 9;
  const startTime = new Date().getTime() + start * 60 * 60 * 1000;

  return (
    <div className="header-container container">
      <div className="top">
        <div className="top-title">
          <div className="top-title-logo">
            <div className="top-title-logo-box">
              <img className="logo" src={LOGO} alt="Logo" />
            </div>
            <div className="top-title-logo-name">
              <span className="logo-name">Мельник Андрій Володимирович</span>
            </div>
          </div>
          <div className="top-title-name">
            <h1 className="top-heading">
              <span className="top-heading-highlight">КУРС</span> «ІНТЕНСИВ З
              ВІЙСЬКОВОГО ПРАВА»
            </h1>
            <div className="top-info">
              <p className="top-info-text">
                Допомога людям, що переживають несправедливе поводження від
                представників військової сфери.
              </p>
            </div>
          </div>
        </div>
        <div className="top-bg">
          {/* <img className="bg-military" src={Military} alt="Military" /> */}
          {/* <div className="top-bg-img"></div> */}
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-text-box">
          <div className="bottom-info">
            <div className="bottom-info-box">
              <p className="bottom-info-text">
                Приєднайся до онлайн курсу «Інтенсив з військового <br />права» за
                спеціальною акційною пропозицією всього за
              </p>
            </div>
            <div className="bottom-price">
              <div className="bottom-price-after">
                <span className="price-after">375 грн.</span>
              </div>
              <div className="bottom-price-before">
                <span className="price-before">1500 грн.</span>
              </div>
            </div>
          </div>
          <div className="bottom-timer-container">
            {/* <p className="bottom-timer">00 : 00 : 00 : 00</p> */}
            <Timer startTime={startTime} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
