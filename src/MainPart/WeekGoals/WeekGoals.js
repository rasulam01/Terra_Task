import "./WeekGoals.css";
import axios from "axios";
import { useState, useEffect } from "react";
import CreateIcon from "../../Assets/CreateIcon.png";
import { TheFormCreater } from "../../TheFormCreater/TheFormCreater";
import DeleteIcon from "@material-ui/icons/Delete";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import EditAttributesOutlinedIcon from '@material-ui/icons/EditAttributesOutlined';
export const WeekGoals = ({
  time,
  showCreateForm,
  createFormVisibility,
  hideCreateForm,
  
  
}) => {
  const [data, setData] = useState([]);
  const [progressCount, setProgressCount] = useState(0);
  const [checked, setChecked] = useState([false]);
  const [editingMode, setEditingMode] = useState(null);
  const [editContent, setEditContent] = useState("");
  async function fetchData() {
    let response = await axios.get(
        'https://60a7a2c88532520017ae4a3b.mockapi.io/weekgoals'
    );
    let info = await response.data;
    setData(info);
  }
  useEffect(() => {
    fetchData();
  }, []);
  let content = data.map((data, pos) => (
    <li key={data.id} className="weekGoalsList">
      <input
        key={data.id}
        type="checkbox"
        className="checkgoal"
        checked={checked[pos]}
        onChange={(e) => ifChecked(e, pos)}
      />

      <div className="dataLine" style={{ backgroundColor: data.background }}>

        {data.description}
      </div>
      </li>
  ))
      

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
  return (
    <div className="weekGoals">
      <div className="weekGoalsName">
        <h2>Цели {time}</h2>
      </div>
      <div className="weekGoalsCreate">
        <img src={CreateIcon} onClick={showCreateForm} alt="Create" />
      </div>
      <div className="weekGoalsProgress">
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
      <div className="weekGoalsData">
        <ul>{content}</ul>
      </div>
      {createFormVisibility ? (
        <>
          <TheFormCreater
            hideCreateForm={hideCreateForm}
            url="https://60a7a2c88532520017ae4a3b.mockapi.io/weekgoals"
          />
          <div className="cover" onClick={hideCreateForm} />
        </>
      ) : null}
    </div>
  );
};
