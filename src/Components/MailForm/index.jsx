import Timer from "../Timer";
import "./MailForm.scss";

const MailForm = () => {
  const start = 9;
  const startTime = new Date().getTime() + start * 60 * 60 * 1000;

  return (
    <div className="form-container">
      <div className="form-box">
        <div className="top-box">
          <div className="form-title">
            <p >Приєднайся до онлайн курсу</p>
            <h2>«Інтенсив з військового права»</h2>
          </div>
          <div className="text">
            <p>за спеціальною акційною пропозицією всього за</p>
          </div>
          <div className="price">
            <p>375 грн.</p>
            <p>1500 грн.</p>
          </div>
          {/* <div className="timer">
            <p>00 : 00 : 00 : 00</p>
          </div> */}
          <Timer startTime={startTime} mailTimerStyles="mail-timer" />
        </div>
        {/* <div className="bottom-box">
          <form className="form" style={{display: 'flex', flexDirection: 'column'}} action="" method="post">
            <input className="form-input" type="text" placeholder="Text" />
            <input className="form-input" type="text" placeholder="Text" />
            <input className="form-input" type="text" placeholder="Text" />
            <input className="form-input" type="text" placeholder="Text" />
            <textarea className="form-message" name="" id="" cols="30" rows="10" placeholder=""></textarea>
            <input className="form-btn" type="submit" value="Зареєструватися"></input>
          </form>
        </div> */}
        <button className="mail-btn">купити курс</button>
      </div>
    </div>
  )
}

export default MailForm;