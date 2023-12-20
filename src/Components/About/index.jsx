import "./About.scss"; 
import MailForm from "../MailForm";

const About = () => {
  return (
    <div className="about-container container">
      <div className="about-info">
        <div className="info-title-box">
          <div className="info-vertical-line"></div>
          <h2 className="info-title">Про курс</h2>
        </div>
        <div className="info-top-box">
          <p className="info-top">Курс складається з 
            <span className="info-top-highlight-one"> 10</span>-ти занять по 
            <span className="info-top-highlight-two"> 20-30</span> хв. Після оплати ми надсилаємо Вам посилання на запис занять.</p>
        </div>
        <div className="info-bottom-box">
          <p className="info-bottom">Чек листи та шаблони заяв та скарг у подарунок. <br />
          Знижка 50 % на консультацію адвоката.</p>
        </div>
      </div>
      <MailForm />
      {/* <div className="about-form-box">
      </div> */}

      {/* <div className="about-form-container">
        <div className="about-form-title">
          <div className="about-title">
            <p >Приєднайся до онлайн курсу</p>
            <h2>«Інтенсив з військового права»</h2>
          </div>
          <div className="about-text">
            <p>за спеціальною акційною пропозицією всього за</p>
          </div>
          <div className="about-price">
            <p>375 грн.</p>
            <p>1500 грн.</p>
          </div>
          <div className="about-timer">
            <p>00 : 00 : 00 : 00</p>
          </div>
        </div>
        <div className="about-form-box">
          <form className="about-form" style={{display: 'flex', flexDirection: 'column'}} action="" method="post">
            <input className="form-input" type="text" placeholder="Text" />
            <input className="form-input" type="text" placeholder="Text" />
            <input className="form-input" type="text" placeholder="Text" />
            <input className="form-input" type="text" placeholder="Text" />
            <textarea className="form-message" name="" id="" cols="30" rows="10" placeholder=""></textarea>
            <input className="form-btn" type="submit" value="Зареєструватися"></input>
          </form>
        </div>
      </div> */}
    </div>
  )
}

export default About;