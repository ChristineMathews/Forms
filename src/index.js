import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GaugeHeading from './GaugeHeading';
import Test from './test';
import reportWebVitals from './reportWebVitals';
import FeedbackBlocks from './FeedbackBlocks';
import MultiPartForm from './MultiPartForm';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <div className="app-container">
  <div className="top-row">
    {/* <MultiPartForm/> */}
    <div className="gauge-container">
      <Test rating={75} />
      <div className="gauge-heading">
        <GaugeHeading text="Gauge Heading 1" rating={75} />
      </div>
    </div>
    <div className="gauge-container">
      <Test rating={85} />
      <div className="gauge-heading">
        <GaugeHeading text="Gauge Heading 2" />
      </div>
    </div>
    <div className="gauge-container">
      <Test rating={60} />
      <div className="gauge-heading">
        <GaugeHeading text="Gauge Heading 3" />
      </div>
    </div>
  </div>
  <div className="bottom-row">
    <div className="gauge-container">
      <Test rating={40} />
      <div className="gauge-heading">
        <GaugeHeading text="Gauge Heading 4" />
      </div>
    </div>
    <div className="gauge-container">
      <Test rating={95} />
      <div className="gauge-heading">
        <GaugeHeading text="Gauge Heading 5" />
      </div>
    </div>
  </div>
  <div className='feedbackblocks'>
  <FeedbackBlocks/>
  </div>
  </div>
</div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
