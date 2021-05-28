import "./WeekPlan.css";
import CreateIcon from "../../Assets/CreateIcon.png";
import { useState, useEffect } from "react";
import axios from "axios";

export const WeekPlan = ({ time, showCreateForm }) => {
  const [data, setData] = useState([]);
  const [progressCount, setProgressCount] = useState(0);

  const [checked, setChecked] = useState(false);

  async function fetchData() {
    let response = await axios.get(
      "https://60a7a2c88532520017ae4a3b.mockapi.io/weekplan"
    );
    let info = await response.data;
    setData(info);
  }

  useEffect(() => {
    fetchData();
  });
  // function ifChecked() {

  //     if (checked) {

  //         setProgressCount(progressCount + 1)
  //         setPercentage((progressCount / content.length) * 100)
  //     }  else {
  //         setProgressCount(progressCount - 1)
  //         setPercentage((progressCount / content.length) * 100)
  //     }
  //     setPercentage((progressCount / content.length) * 100)
  //     if (progressCount === content.length) {
  //     setProgressCount(content.length)
  // }
  // }
  const ifChecked = () => {
    if (!checked) {
      setProgressCount(progressCount + 1);
      
    } else {
      setProgressCount(progressCount - 1);
      
      
    }
    setChecked(!checked);
    setPercentage((progressCount / content.length) * 100)
  };

  let content = data.map((data) => (
    <li key={data.id} className="weekPlanList">
      <input
        key={data.id}
        type="checkbox"
        className="checkplan"
        defaultChecked={checked}
        onChange={(e) => {
          // setChecked(!checked)
          ifChecked();
          console.log(e.target.key);
        }}
      />
      {data.description}
    </li>
  ));

  const [percentage, setPercentage] = useState(0);
  return (
    <div className="weekPlan">
      <div className="weekPlanName">
        <h2>План {time}</h2>
      </div>
      <div className="weekPlanCreate">
        <img src={CreateIcon} onClick={showCreateForm} alt="Create" />
      </div>
      <div className="weekPlanProgress">
        {progressCount}/{content.length}
        <div className="weekPlanProgressBar">
          <div
            className="weekPlanProgressBarFiller"
            style={{ width: percentage * 2.88 }}
          ></div>
        </div>
      </div>

      <div className="weekPlanData">
        <ul>
          {content}
          {console.log(content)}
        </ul>
      </div>
    </div>
  );
};
