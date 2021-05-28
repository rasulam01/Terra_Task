import "./WeekPlan.css";
import CreateIcon from "../../Assets/CreateIcon.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { TheFormCreater } from "../../TheFormCreater/TheFormCreater";

export const WeekPlan = ({ time, showCreateForm }) => {
  const [data, setData] = useState([]);
  const [progressCount, setProgressCount] = useState(0);

  const [checked, setChecked] = useState([false, false, false, false]);

  async function fetchData() {
    let response = await axios.get(
      "https://60a7a2c88532520017ae4a3b.mockapi.io/weekplan"
    );
    let info = await response.data;
    setData(info);
  }

  useEffect(() => {
    fetchData();
  }, []);

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

  const ifChecked = (e, pos) => {
    const listChecked = [...checked];

    listChecked[pos] = e.target.checked;

    setChecked(listChecked);

    if (listChecked[pos]) {
      setProgressCount((c) => c + 1);
    } else {
      setProgressCount((c) => c - 1);
    }
  };

  let content = data.map((data, pos) => (
    <li key={data.id} className="weekPlanList">
      <input
        key={data.id}
        type="checkbox"
        className="checkplan"
        checked={checked[pos]}
        onChange={(e) => ifChecked(e, pos)}
      />
      {data.description}
    </li>
  ));

  const obj = {
    "id": content.length + 1,
    "createdAt": new Date(),
    "name": "flip-flop",
    "avatar": "https://cdn.fakercloud.com/avatars/gauchomatt_128.jpg",
    "description": "Smashing"
  }

  const temp = [...data];

  temp.push(obj)

  setData(temp)

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
            style={{
              width:
                content.length > 0 &&
                (progressCount / content.length) * 100 * 2.88,
            }}
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
