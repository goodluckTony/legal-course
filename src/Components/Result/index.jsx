import "./Result.scss";

const Result = () => {
  return (
    <div className="result-container container">
      <div className="title-container">
        <div className="title">
          <div className="vertical-line"></div>
          <h2>Результати після <br />проходження курсу</h2>
        </div>
        <div className="list">
          <div className="box">
            <div className="item">
              <div className="check-svg"></div>
              <div className="info-box">
                <p>Отримаєте базові знання з військового права.</p>
              </div>
            </div>
            <div className="item">
              <div className="check-svg"></div>
              <div className="info-box">
                <p>Будете впевнено себе почувати у розмові з працівниками ТЦК та СП, зати свої права, а значить спокійніше спати.</p>
              </div>
            </div>
            <div className="item">
              <div className="check-svg"></div>
              <div className="info-box">
                <p>Будете впевнено себе почувати у розмові з працівниками ТЦК та СП, зати свої права, а значить спокійніше спати.</p>
              </div>
            </div>
            <div className="item">
              <div className="check-svg"></div>
              <div className="info-box">
                <p>Учасникам курсу знижка <span>50 %</span> на консультацію адвоката з військових справ.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Result;