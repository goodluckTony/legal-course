import React from 'react'
import "./Target.scss";

const Target = () => {
  return (
    <div className='target-container container'>
      <div className='target-box'>
        <div className='target-title'>
          <h2>Курс «Інтенсив з військовогo права» <br /><span>Кому підходить:</span></h2>
        </div>
        <div className='target-list-box'>
          <div className='scales-item'>
            <div className='scales-svg-box'>
              <div className='scales-svg'></div>
            </div>
            <div className='scales-text'>
              <h3>Чоловікам</h3>
              <p>Чоловікам, які хочуть знати свої права та вміти захиститися від незаконних дій працівників ТЦК та СП.</p>
            </div>
          </div>
          <div className='gavel-item'>
            <div className='gavel-svg-box'>
              <div className='gavel-svg'></div>
            </div>
            <div className='gavel-text'>
              <h3>Студентам юридичних факультетів</h3>
              <p>Студентам юридичних факультетів, юристам, адвокатам, які хочуть більше дізнатися про актуальні питання військового права.</p>
            </div>
          </div>
          <div className='military-item'>
            <div className='military-svg-box'>
              <div className='military-svg'></div>
            </div>
            <div className='military-text'>
              <h3>Військовослужбовцям</h3>
              <p>Військовослужбовцям, які хочуть і мають право на звільнення з військової служби, визнання обмежено придатним або непридатним, на переведення до іншої вч і тд; хочуть отримати виплати у зв’язку з пораненням.</p>
            </div>
          </div>
          <div className='family-item'>
            <div className='family-svg-box'>
              <div className='family-svg'></div>
            </div>
            <div className='family-text'>
              <h3>Членам сімей та родичам військовослужбовців</h3>
              <p>Членам сімей та родичам військовослужбовців, які знаходяться у полоні, безвісно відсутніх.</p>
            </div>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Target;