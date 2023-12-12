import "./Author.scss";

const Author = () => {
  return (
    <div className="author-container container">
      <div className="box">
        <div className="title">
          <div className="title-box">
            <div className="vertical-line"></div>
            <div className="text-box">
              <h2>Про автора</h2>
              <h3>Адвокат</h3>
              <h4>Мельник Андрій <br />Володимирович</h4>
            </div>
          </div>
          <div className="info">
            <p>Кандидат юридичних наук. Є доцентом кафедри цивільного права та процесу ЛНУ ім. Івана Франка. Автор численних наукових праць та статей. З початку масштабного вторгнення рф надав професійну юридичну допомогу понад ста клієнтам з питань військової справи. На даний час успішно допомагає сім'ям безвісти зниклих та полонених військовослужбовців. Має посвідчення адвоката, а також атестат кандидата наук.</p>
          </div>
        </div>
        <div className="img-box">
          <div className="img"></div>
        </div>
      </div>
    </div>
  )
}

export default Author;