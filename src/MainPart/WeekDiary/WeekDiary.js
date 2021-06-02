import "./WeekDiary.css";
import { useState, useEffect } from "react";
import axios from "axios";
import CreateIcon from "../../Assets/CreateIcon.png";
import { TheFormCreaterDiary } from "../../TheFormCreaterDiary/TheFormCreaterDiary";
import DeleteIcon from "@material-ui/icons/Delete";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import EditAttributesOutlinedIcon from "@material-ui/icons/EditAttributesOutlined";
export const WeekDiary = ({ time }) => {
  const [data, setData] = useState([]);
  const [createDiaryFormVisibility, setCreateFormVisibility] = useState(false);
  const [editingMode, setEditingMode] = useState(null);
  const [editContent, setEditContent] = useState("");
  const showDiaryForm = () => {
    setCreateFormVisibility(true);
  };
  const hideDiaryForm = () => {
    setCreateFormVisibility(false);
  };
  async function fetchData() {
    let response = await axios.get(
      "https://60a7a2c88532520017ae4a3b.mockapi.io/diary"
    );
    let info = await response.data;

    setData(info);
  }
  useEffect(() => {
    fetchData();
  }, []);
  let content = data.map((data, pos) => (
    <li key={data.id}>
      <div className="noteName">{data.name}</div>
      <div className="diaryContent">{data.description}</div>
    </li>
  )) 
     
  return (
    <div className="weekDiary">
      <div className="weekDiaryName">
        <h2>Дневник {time}</h2>
      </div>
      <div className="weekDiaryCreate">
        <img src={CreateIcon} onClick={showDiaryForm} alt="Create" />
      </div>
      <div className="weekDiaryData">
        <ul>{content}</ul>
      </div>
      {createDiaryFormVisibility ? (
        <>
          <TheFormCreaterDiary
            hideDiaryForm={hideDiaryForm}
            showDiaryForm={showDiaryForm}
            url="https://60a7a2c88532520017ae4a3b.mockapi.io/diary"
          />
          <div className="cover" onClick={hideDiaryForm} />
        </>
      ) : null}
    </div>
  );
};
