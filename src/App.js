import React, { useState } from 'react';
import './App.css';
import { BsPersonCircle } from 'react-icons/bs/'; 

import Accordion from './Accordion';

import { ACCORDION } from './Data';

const App = () => {

  const [open, setOpen] = useState(false);

  const openAccordion = () => {
    setOpen(!open);
  }

  return (
    <div className="app">
      <div className="top-accordion">
        <div className="top-accordion-header">
          <div className="icon">
            <BsPersonCircle color='blue' fontSize={"3em"}/>
          </div>
          <div className="info">
            <h3 className="title">
              About us
            </h3>
            <p className="p-info">4 articles in this topic</p>
          </div>
          <div onClick={openAccordion} className="arrow-holder">
            <span className="top-arrow">{open ? "^" : "˅"}</span>
          </div>
        </div>
        {
          <div className="top-panel">
            {
              open &&
              <div className="accordion">
                {
                  ACCORDION.data.map((el, index) => {
                    return(
                      <Accordion
                        title={el.title}
                        text={el.text}
                      />
                    );
                  })
                }
              </div>
            }
          </div>
        }
      </div>
    </div>
  );
};

export default App;