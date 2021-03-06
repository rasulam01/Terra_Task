import "../GoalCreater/GoalCreater.css";
import axios from 'axios'
import FavouriteIcon from "../../Assets/Chosen.png";
import Deleter from "../../Assets/Delete.png";
import Closer from "../../Assets/Closer.png";
import Options from "../../Assets/Options.png";
import Paperclip from "../../Assets/Paperclip.png";
import Adder from "../../Assets/CalendarAdd.png";
import Clock from "../../Assets/Clock.png";
import Checked from "../../Assets/Checked.png";
import React, { useState, useEffect } from "react";

export const GoalReader = ({ hideReader, id, identify, sphere }) => {
    const [goalName, setGoalName] = useState("");
    const [colorBlockClass, setColorBlockClass] = useState("")
    
    const [data, setData] = useState([])
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
    const getCurrentValue = () => {
      console.log(selector.current.value);
      console.log(colorBlockClass);
      if (selector.current.value === 'brightness_of_life') {
        setColorBlockClass('bright')
      } else if (selector.current.value === 'family_and_love') {
        setColorBlockClass('gathering')
      } else if (selector.current.value === 'personal_growth') {
        setColorBlockClass('self')
      } else if (selector.current.value === 'investment') {
        setColorBlockClass('longterm')
      } else if (selector.current.value === 'environment_and_friends') {
      setColorBlockClass('nature')
      } else if (selector.current.value === 'business_and_career') {
        setColorBlockClass('deal') 
      } else if (selector.current.value === 'health_and_sports') {
        setColorBlockClass('extreme')
      } else if (selector.current.value === 'charity') {
        setColorBlockClass('gratitude')
      }
    }
  
    const getData = async (urll) => {
    const url = `${API_URL}/api/v1/${urll}`;
    const res = await axios({
      method: "get",
      url: url,
      // data: params,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + token,
      },
    });
    const result = res.data;    
    console.log(result);    
    setData(result);
    return await res.data;
  };
    
    
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNjI1OTEzOTM5fQ.DdPSnvQR85W2m_GtTCv59jHS5Zy-ZTtAcxTTSo-q6O8"
    const API_URL = "http://localhost:8000";
//     const postData = async(data2, urll) => {
//       const formData = new FormData();
//       formData.append("title", "test_title");
//       formData.append("date", "2020-01-01");
  
//       const data = {
//           title: "test-title",
//           date: "2020-10-10"
//       };    
//       const url = `${API_URL}/api/v1/${urll}`;
      
//       console.log(url, data, JSON.stringify(data), token)
      
//       fetch(url, {
//               method: 'POST',
//               headers: {
//                       'Content-Type': 'application/json',
//                       'Authorization': 'Bearer ' + token
//               },
//           body: JSON.stringify(data2),
//           })
//           .then(response => response.json())
//   }
//   const createGoal = () => {
//       const object = {
//           text: goalName,
//           description: descriptionContent,
//           date: dateValue,
//           comment: commentaryContent,
//           sphere: selector.current.value,
//           // image: image,
//           done: isDone,
//           favorite: isFavourite
          
//       }
//       console.log(selector.current.value);
//       console.log(object);
//       postData(object, 'goals/goals/')
//   }
  
  useEffect(() => {
    //   getData('goals/')
      getData(`goals/goals/${identify}`)
      console.log(data);
      
  }, [])
  const selector = React.createRef()
  // if (selector.current.value === 'brightness_of_life') {
  //     setColorBlockClass("bright")
  //   } else if (selector.current.value === 'business_and_career') {
  //     setColorBlockClass('deal')
  //   } else if (selector.current.value === 'environment_and_friends') {
  //     setColorBlockClass('nature')
  //   } else if (selector.current.value === 'investment') {
  //     setColorBlockClass('longterm')
  //   } else if (selector.current.value === 'family_and_love') {
  //     setColorBlockClass('gathering')
  //   } else if (selector.current.value === 'health_and_sports') {
  //     setColorBlockClass('extreme') 
  //   } else if (selector.current.value === 'personal_growth') {
  //     setColorBlockClass('self')
  //   } else if (selector.current.value === 'charity') {
  //     setColorBlockClass('gratitude')
  //   } else if (selector.current.value === null) {
  //     setColorBlockClass("")
  //   }
    
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
              <img src={Closer} alt="closed" onClick={hideReader} />
            </div>
          </div>
          <div className="goalCreaterInput">
            <input
              type="text"
              placeholder="???????????????? ????????"
              value={data.text}
              onChange={setGoal}
            />
            
            
          </div>
          <div className="goalCreaterTextArea">
            <img src={Options} alt="options" />
            <textarea
              type="text"
              placeholder="???????????????? ????????????????"
              value={data.description}
              onChange={setDescription}
            />
          </div>
          <div className="goalCreaterAddAttachment">
            <div>
              <img src={Paperclip} alt="attachment" />
            </div>
            <div>???????????????? ????????????????</div>
            <div>
              <img src={Adder} alt="add" />
            </div>
          </div>
          <div className="goalCreaterAddTime">
            <div>
              <img src={Clock} alt="time" />
            </div>
            <div><input type="date" value={id.date} onChange={setDate}/></div>
          </div>
          <div className="goalCreaterAddCheckList">
            <div>
              <img src={Checked} alt="done" />
            </div>
            <div>???????????????? ??????-????????</div>
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
              placeholder="???????????????? ??????????????????????"
              value={data.comment}
              onChange={setCommentary}
            />
          </div>
          <div className="goalCreaterSphere">
            <div className={colorBlockClass} />
            <span className="goalColorText" >??????????: </span>
              
              <select className="goalColorSelect" ref={selector} onChange={getCurrentValue} value={sphere}>
                <option value="" selected disabled hidden>
                  ?????????????? ??????????
                </option>
                <option value="health_and_sports">
                  ???????????????? ?? ??????????
                </option>
                <option
                  value="business_and_career"                
                >
                  ???????????? ?? ??????????????
                </option>
                <option value="family_and_love">
                  ?????????? ?? ????????????
                </option>
                <option value="personal_growth">
                  ???????????????????? ????????
                </option>
                <option value="investment">
                  ????????????????????
                </option>
                <option
                  value="environment_and_friends"                
                >
                  ?????????????????? ?? ????????????
                </option>
                <option
                  value="brightness_of_life"                
                >
                  ?????????????? ??????????
                </option>
                <option value="charity">
                  ??????????????????????????????????????
                </option>
              </select>
            
          </div>
          <div className="goalCreaterSave">
              <button className="saveButton" onClick={hideReader}>??????????</button>
          </div>
        </div>
      </>
    );
  };
  