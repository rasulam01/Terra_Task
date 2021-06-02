import "./NextWeekPlans.css";
import CreateIcon from "../../Assets/CreateIcon.png";
import axios from "axios";
import { useState, useEffect } from "react";
import { TheFormCreater } from "../../TheFormCreater/TheFormCreater";
import DeleteIcon from "@material-ui/icons/Delete";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import EditAttributesOutlinedIcon from "@material-ui/icons/EditAttributesOutlined";

export const NextWeekPlans = ({
  time,
  showCreateForm,
  hideCreateForm,
  createFormVisibility,
  
}) => {
  const [data, setData] = useState([]);
  const [editingMode, setEditingMode] = useState(null);
  const [editContent, setEditContent] = useState("");
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
  let content = data.map((data, pos) => (
    <li key={data.id} className="nextWeekPlanList">
      {data.description}
    </li>
  ))

  return (
    <div className="nextWeekPlans">
      <div className="nextWeekPlansName">
        <h2>План следующей {time}</h2>
      </div>
      <div className="nextWeekPlansCreate">
        <img src={CreateIcon} onClick={showCreateForm} alt="Create" />
      </div>
      <div className="nextWeekPlansData">
        <ul>{content}</ul>
      </div>
      {createFormVisibility ? (
        <>
          <TheFormCreater
            hideCreateForm={hideCreateForm}
            url="https://60a7a2c88532520017ae4a3b.mockapi.io/weekplan"
          />
          <div className="cover" onClick={hideCreateForm} />
        </>
      ) : null}
    </div>
  );
};
