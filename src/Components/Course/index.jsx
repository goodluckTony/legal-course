import "./Course.scss";

const Course = () => {
  return (
    <div className="course-container container">
      <div className="box">
        <div className="title">
          <div className="vertical-line"></div>
          <div className="text-box">
            <h2>Програма курсу</h2>
            <p>7 занять</p>
          </div>
        </div>
        <div className="list">
          <div className="item-box">
            <div className="counting-box">
              <div className="count">1</div>
            </div>
            <div className="text">
              <h3>Мобілізація:</h3>
              <p>вручення повістки, форма повістки, хто має право вручати повістку, відповідальність за нез'явлення за повсткою; мобілізація жінок.</p>
            </div>
          </div>
          <div className="item-box">
            <div className="counting-box">
              <div className="count">2</div>
            </div>
            <div className="text">
              <h3>Конктракт із ЗСУ:</h3>
              <p>переведення, призупинення, звільнення.</p>
            </div>
          </div>
          <div className="item-box">
            <div className="counting-box">
              <div className="count">3</div>
            </div>
            <div className="text">
              <h3>Відстрочка, бронювання:</h3>
              <p>підстави, документи, порядок отримання.</p>
            </div>
          </div>
          <div className="item-box">
            <div className="counting-box">
              <div className="count">4</div>
            </div>
            <div className="text">
              <h3>Проходження ВЛК, оскарження висновку ВЛК.</h3>
            </div>
          </div>
          <div className="item-box">
            <div className="counting-box">
              <div className="count">5</div>
            </div>
            <div className="text">
              <h3>Статус УБД, особи з інвалідністю внаслідок війни, особи зникої безвісти, порядок визнання особи померлою.</h3>
            </div>
          </div>
          <div className="item-box">
            <div className="counting-box">
              <div className="count">6</div>
            </div>
            <div className="text">
              <h3>Соціальні гарантії та пенсійне забезпечення війьковослужбовців та членів їх сімей.</h3>
            </div>
          </div>
          <div className="item-box">
            <div className="counting-box">
              <div className="count">7</div>
            </div>
            <div className="text">
              <h3>Виїзд за кордон військовозобов’язаних:</h3>
              <p>перелік осіб, які мають право на перетин кордону, доументи необхідні для перетину кордону, проблемні аспекти.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
