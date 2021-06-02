import './TheFormCreaterAnalytics.css'
import axios from "axios";
import { useState } from "react";

import CloseIcon from '../Assets/close_button.png'
export const TheFormCreaterAnalytics = ({url, hideAnalyticsForm }) => {
  const [metricValue, setMetricValue] = useState("");
  const [numberValue, setNumberValue] = useState("");

  const setMetric = (e) => {
    setMetricValue(e.target.value);
  };
  const setNumber = (e) => {
      setNumberValue(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const object = {
      metric: metricValue,
      value: numberValue,
    };
    axios
      .post(url, object)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  
  

  return (
    <form className="theFormCreaterAnalytics" onSubmit={handleSubmit}>
      <span className="theFormCreaterAnalyticsName"><h2>Stats filling</h2></span>
      <img src={CloseIcon} onClick={hideAnalyticsForm} alt="Close"/>
      <div>
        <input
          type="text"
          name="text"
          placeholder="Plan description"
          onChange={setMetric}
          value={metricValue}
        />
        <input
          type="text"
          name="number"
          placeholder="Number"
          onChange={setNumber}
          value={numberValue}
        />
      </div>
      <div>
        <button type="submit" className="pushAnalyticsButton">
          Place a metric
        </button>
        
      </div>
    </form>
  );
};
