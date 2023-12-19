import "./Questions.scss";
import { Data } from "./Data.jsx";
import Accordion from "./Accordion.jsx";
const Questions = () => {
  return (
    <div className="questions-container container">
      <div className="title-box">
        <div className="title">
          <div className="vertical-line"></div>
          <h2>Питання-відповіді</h2>
        </div>
      </div>
      {/* <div className="accordion-box"> */}
        <Accordion sections={Data} />
      {/* </div> */}
    </div>
  )
}
export default Questions;