import React, { useState } from 'react';
import './App.css';
import { BsPersonCircle } from 'react-icons/bs/'; 

import Accordion from './Accordion';

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
                <Accordion
                  title="How does parkname seperate itself from other domain name parking companies?"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                />
                <Accordion
                  title="Is Parkname Parking actually free?"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                />
                <Accordion
                  title="What you do?"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                />
                <Accordion
                  title="When was Parkname first founded?"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                />
              </div>
            }
          </div>
        }
      </div>
    </div>
  );
};

export default App;