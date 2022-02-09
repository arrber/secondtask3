import React, { useState } from 'react';


const Accordion = (props) => {
    const [active, setActive] = useState(false);
    
    const toggleHandler = (e) => {
      setActive(!active);
    };

    return (
      <div className="accordion-holder" >
        <div className="accordion-header" onClick={toggleHandler}>
            <h4 className="title">
                {props.title}
                <span className="arrow">{active ? "^" : "˅"}</span>
            </h4>
            {
                <div className="panel">
                {
                    active &&
                    <p className="content">{props.text}</p>
                }
            </div>
            }
        </div>
      </div>
    );
};

export default Accordion;