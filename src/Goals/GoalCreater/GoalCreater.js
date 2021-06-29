import "./GoalCreater.css";
import FavouriteIcon from "../../Assets/Chosen.png";
import Deleter from "../../Assets/Delete.png";
import Closer from "../../Assets/Closer.png";
import Options from "../../Assets/Options.png";
import Paperclip from "../../Assets/Paperclip.png";
import Adder from "../../Assets/CalendarAdd.png";
import Clock from "../../Assets/Clock.png";
import Checked from "../../Assets/Checked.png";
import React, { useState } from "react";

export const GoalCreater = ({ hideGoalCreater }) => {
  const [goalName, setGoalName] = useState("");
  

  const [descriptionContent, setDescriptionContent] = useState("");
  const [commentaryContent, setCommentaryContent] = useState("");
  const [dateValue, setDateValue] = useState("")
  const [isDone, setIsDone] = useState(false)
  const [isFavourite, setIsFavourite] = useState(false)
  const [image, setImage] = useState(null)
  const setGoal = (e) => {
    setGoalName(e.target.value);
  };
  const setDescription = (e) => {
    setDescriptionContent(e.target.value);
  };
  const setCommentary = (e) => {
    setCommentaryContent(e.target.value);
  };
  const setDate = (e) => {
      setDateValue(e.target.value);
      console.log(dateValue);
  }
  const setDone = (e) => {
      setIsDone(!isDone)
  }
  const setFavourite = (e) => {
      setIsFavourite(!isFavourite)
  }
  
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNjI0OTYzMzc1fQ.dtKdkrqFfPEjPZgA-NfzpIIQsE2wkV45bDCWAGAH-0w"
  const API_URL = "http://localhost:8000";
  const postData = async(data2, urll) => {
    const formData = new FormData();
    formData.append("title", "test_title");
    formData.append("date", "2020-01-01");

    const data = {
        title: "test-title",
        date: "2020-10-10"
    };    
    const url = `${API_URL}/api/v1/${urll}`;
    
    console.log(url, data, JSON.stringify(data), token)
    
    fetch(url, {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
            },
        body: JSON.stringify(data2),
        })
        .then(response => response.json())
}
const createGoal = () => {
    const object = {
        text: goalName,
        description: descriptionContent,
        date: dateValue,
        comment: commentaryContent,
        sphere: {slug: selector.current.value},
        // image: image,
        done: isDone,
        favorite: isFavourite
        
    }
    console.log(selector.current.value);
    console.log(object);
    postData(object, 'goals/goals/')
}
const selector = React.createRef()

  return (
    <>
      <div className="goalCreater">
        <div className="goalCreaterBadges">
          <div>
            <img src={FavouriteIcon} alt="liked" onClick={setFavourite}/>
          </div>
          <div>
            <img src={Deleter} alt="deleted" onClick={setDone}/>
          </div>
          <div>
            <img src={Closer} alt="closed" onClick={hideGoalCreater} />
          </div>
        </div>
        <div className="goalCreaterInput">
          <input
            type="text"
            placeholder="Добавьте цель"
            value={goalName}
            onChange={setGoal}
          />
        </div>
        <div className="goalCreaterTextArea">
          <img src={Options} alt="options" />
          <textarea
            type="text"
            placeholder="Добавьте описание"
            value={descriptionContent}
            onChange={setDescription}
          />
        </div>
        <div className="goalCreaterAddAttachment">
          <div>
            <img src={Paperclip} alt="attachment" />
          </div>
          <div>Добавить вложение</div>
          <div>
            <img src={Adder} alt="add" />
          </div>
        </div>
        <div className="goalCreaterAddTime">
          <div>
            <img src={Clock} alt="time" />
          </div>
          <div><input type="date" value={dateValue} onChange={setDate}/></div>
        </div>
        <div className="goalCreaterAddCheckList">
          <div>
            <img src={Checked} alt="done" />
          </div>
          <div>Добавить чек-лист</div>
          <div>
            <img src={Adder} alt="add" />
          </div>
        </div>
        <div className="goalCreaterProgressBar">
          <div className="goalCreaterProgressBarFiller" />
        </div>
        <div className="goalCreaterCommentary">
          <textarea
            type="text"
            placeholder="Напишите комментарий"
            value={commentaryContent}
            onChange={setCommentary}
          />
        </div>
        <div className="goalCreaterSphere">
          <div className="goalColorBlock" />
          <span className="goalColorText">Сфера:</span>
            
            <select className="goalColorSelect" ref={selector}>
              <option value="health_and_sport" >
                Здоровье и спорт
              </option>
              <option
                value="business_and_career"                
              >
                Бизнес и карьера
              </option>
              <option value="family_and_love">
                Семья и любовь
              </option>
              <option value="personal_growth">
                Личностный рост
              </option>
              <option value="investment">
                Инвестиции
              </option>
              <option
                value="environment_and_friends"                
              >
                Окружение и друзья
              </option>
              <option
                value="brightness_of_life"                
              >
                Яркость жизни
              </option>
              <option value="charity">
                Благотворительность
              </option>
            </select>
          
        </div>
        <div className="goalCreaterSave">
            <button className="saveButton" onClick={createGoal}>Сохранить</button>
        </div>
      </div>
    </>
  );
};
