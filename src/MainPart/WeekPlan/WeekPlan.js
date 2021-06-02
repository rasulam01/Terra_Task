import "./WeekPlan.css";
import CreateIcon from "../../Assets/CreateIcon.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { TheFormCreater } from "../../TheFormCreater/TheFormCreater";
import DeleteIcon from "@material-ui/icons/Delete";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import EditAttributesOutlinedIcon from '@material-ui/icons/EditAttributesOutlined';


export const WeekPlan = ({
  time,
  showCreateForm,
  createFormVisibility,
  hideCreateForm,
  
  src
}) => {
  const [data, setData] = useState([]);
  const [progressCount, setProgressCount] = useState(0);

  const [checked, setChecked] = useState([false]);
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

      <div className="dataLine" style={{ backgroundColor: data.background }}>
        {editingMode === data.id ? (<input
        type="text"
        onChange={(e) => setEditContent(e.target.value)}
        value={editContent} />) :
        (<>{data.description}</>)}
        <span className="deleteIcon">
          <DeleteIcon onClick={() => deletePlan(pos)} />
        </span>
        <span className="editIcon">
          {editingMode === null ? <EditOutlinedIcon onClick={() => setEditingMode(data.id)} /> : <EditAttributesOutlinedIcon onClick={() => editPlan(data.id)} />}
        </span>
      </div>
    </li>
  ));

  let editPlan = (id) => {
    const temp = [...data].map(data => {
      if (data.id === id) {
        data.description = editContent
      }
      return data
    })
    const object = {
      description: editContent
    }

    axios.put(`https://60a7a2c88532520017ae4a3b.mockapi.io/weekplan/${id}`, object)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
    
    setData(temp)
    setEditContent("")
    setEditingMode(null)
  }

  let deletePlan = (id) => {
    const temp = [...data];
    axios
      .delete(`https://60a7a2c88532520017ae4a3b.mockapi.io/weekplan/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
    const updated = temp.filter((item) => item.id !== id);
    setData(updated);
  };

  // const obj = {
  //   "id": content.length + 1,
  //   "createdAt": new Date(),
  //   "name": "flip-flop",
  //   "avatar": "https://cdn.fakercloud.com/avatars/gauchomatt_128.jpg",
  //   "description": "Smashing"
  // }

  // const temp = [...data];

  // temp.push(obj)

  // setData(temp)

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
