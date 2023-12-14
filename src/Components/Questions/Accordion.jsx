import { useState } from "react";
import "./../../index.scss";

const AccordionSection = ({
  section,
  isActiveSection,
  setActiveIndex,
  sectionIndex,
}) => {
  const toggleSection = () => {
    const nextIndex = isActiveSection ? -1 : sectionIndex;
    setActiveIndex(nextIndex);
  };
  return (
    <div className="accordion-box">
      <div className="question-box" onClick={toggleSection}>
        <div className="name">{section.question}</div>
        <div className="is-open">{isActiveSection ? "-" : "+"}</div>
      </div>
      {isActiveSection && (
        <div className="answer">{section.answer}</div>
        )}
        <div className="horizontal-line"></div>
    </div>
  );
};

const Accordion = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <div className="accordion-container">
      {sections.map((section, index) => (
        <AccordionSection
          section={section}
          key={index}
          isActiveSection={index === activeIndex}
          setActiveIndex={setActiveIndex}
          sectionIndex={index}
        />
      ))}
    </div>
  ); 
};

export default Accordion;