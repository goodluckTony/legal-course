import "./News.scss";
// import { redirect } from "react-router-dom";


const News = () => {
  const handleRedirectToFacebook = () => {
    const path = `https://www.facebook.com/`;
    // redirect(path, { target: "_blank" })
    window.open(path, '_blank');
  };

  // const navigate = useNavigate();
  // const handleRedirectToFacebook = () => {
  //   const path = `https://www.facebook.com/`;
  //   navigate(path, { target: "_blank" })
  // };

  return (
    <div className='news-container container'>
      <div className="box">
        <div className="img-box"></div>
        <div className="info-box">
          <div className="wrapper">
            <div className="quote-top"></div>
            <div className="post-box">
              <p className="text">Сьогодні мали теплу зустріч з представником Уповноваженого Верховної ради України з прав людини у Львівській області паном Тарасом Подвірним. Тарас Подвірний , робить надзвичайно велику роботу для наших родин, де є наші Захисники у полоні або безвісти зниклі. Така праця важлива і клопітка, адже потребує великих зусиль і часу. Маємо надію, що нам вдася знайти наших близьких людей. Дякую пану Андрію Andriy Melnyk , що разом робимо велику справу.</p>
              <button className="news-btn" onClick={handleRedirectToFacebook}>
                <div className="fb-svg"></div>
                Facebook
              </button>
            </div>
            <div className="quote-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News;