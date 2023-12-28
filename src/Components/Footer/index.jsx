import { NavLink } from "react-router-dom";
import "./Footer.scss";
import MailForm from "./../MailForm";

// import SafetyDataTrans from "../../pages/safety-data-trans";
// import MoneyBack from "../../pages/money-back";
// import Privacy from "../../pages/privacy";
// import PublicContract from "../../pages/public-contract";

// const LazySafetyDataTrans = lazy(() => import("../../pages/safety-data-trans"));
// const LazyMoneyBack = lazy(() => import("../../pages/money-back"));
// const LazyPrivacy = lazy(() => import("../../pages/privacy"));
// const LazyPublicContract = lazy(() => import("../../pages/public-contract"));

const Footer = () => {
  // const [content, setContent] = useState(null);

  // const handleNavLinkClick = (component) => {
  //   setContent(component);
  // };

  return (
    <div className="footer-container container">
      <div className="top-container">
        <MailForm />
        <div className="title-box">
          <h2>Lorem ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="bottom-container">
        <div className="bottom-box">
          <div className="left-box">
            <NavLink to="/legal-course/safety-data-transfer">
              Політика безпеки
            </NavLink>
            <NavLink to="/legal-course/money-back">
              Політика повернення платежів
            </NavLink>
            <NavLink to="/legal-course/privacy">
              Політика конфіденційності
            </NavLink>
            <NavLink to="/legal-course/public-contract">
              Публічний договір
            </NavLink>
          </div>
          {/* <div className="rendered-component">{content}</div> */}
          {/* <Suspense>
            <Routes>
              <Route path="/legal-course/safety-data-transfer" element={LazySafetyDataTrans}/>
              <Route path="/legal-course/money-back" element={LazyMoneyBack}/>
              <Route path="/legal-course/privacy" element={LazyPrivacy}/>
              <Route path="/legal-course/public-contract" element={LazyPublicContract}/>
            </Routes>
          </Suspense> */}
          <div className="right-box">
            <a className="mail" href="mailto:mlobacov@gmail.com">
              Loremail@gmail.com
            </a>
            <div className="svg-box">
              <div className="telegram-svg"></div>
              <div className="viber-svg"></div>
              <div className="fb-svg"></div>
            </div>
          <div className="middle-box">
            <p>Copyright 2023</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
