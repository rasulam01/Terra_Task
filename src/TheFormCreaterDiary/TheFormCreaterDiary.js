import './TheFormCreaterDiary.css'
import axios from "axios";
import { useState } from "react";

import CloseIcon from '../Assets/close_button.png'
export const TheFormCreaterDiary = ({url, hideDiaryForm }) => {
  const [title, setTitle] = useState("")
  const [value, setValue] = useState("");
  
  
  const setTitleValue = (e) => {
      setTitle(e.target.value)
  }
  const setInputValue = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const object = {
      name: title,
      description: value,
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
    <form className="theFormCreaterDiary" onSubmit={handleSubmit}>
      <h2 className="theFormCreaterDiaryName">A piece of yourself</h2>
      <img src={CloseIcon} onClick={hideDiaryForm} alt="Close"/>
      <div>
        <input
          type="text"
          name="text"
          placeholder="Note name"
          onChange={setTitleValue}
          value={title}
        />
        <input
          type="text"
          name="info"
          placeholder="Diary piece"
          onChange={setInputValue}
          value={value}
          />
      </div>
      <div>
        <button type="submit" className="pushDiaryButton">
          Update the diary
        </button>
        
      </div>
    </form>
  );
};
