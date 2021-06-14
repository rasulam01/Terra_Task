import "./CalendarReminderCreater.css";
import { useState, useEffect } from 'react'
import axios from 'axios'
import ClosingIcon  from '../../Assets/Closer.png'
import Clock from '../../Assets/Clock.png'
import Flag from '../../Assets/Flag.png'
import People from '../../Assets/People.png'
import Location from '../../Assets/Location.png'
import Calendar from '../../Assets/Bag.svg'
import { ContactSupportOutlined } from "@material-ui/icons";

export const CalendarReminderCreater = ({hideReminderCreater}) => {
  const [title, setTitle] = useState("");
  const [back, setBack] = useState([]);
  const setNameTitle = (e) => {
    setTitle(e.target.value);
  };
  const API_URL = 'http://localhost:8000';
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNjIzNzYyNDk0fQ.giBCkhT-hPwlD6mKNZPiERD_r0zmROs8GJX0xyg3Qm0'
  const getBackend = async(id) => {
    const url = `${API_URL}/api/v1/calendar/month/${id}`;
    const res = await axios({
      method: 'get',
      url: url,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + token
      }
    })
    const result = res.data
    setBack(result)
    console.log(res.data);
    console.log(back);
    return await res.data
  }
  useEffect(() => {
    getBackend(1)
  }, [])
  
 
  return (
      <>
    <div className="calendarReminderCreater">
      <div className="calendarReminderCreaterVisit">
        <input
          type="text"
          name="text"
          placeholder="Цель заметки"
          value={title}
          onChange={setNameTitle}
        />
      </div>
      <div className="calendarReminderCreaterTypes">
          <div>Мероприятие</div>
          <div>Задача</div>
          <div>Напоминание</div>
      </div>
      <img src={ClosingIcon} className="calendarReminderCreaterCloser" onClick={hideReminderCreater} alt="shut" />
      
      
      
        <div className="calendarReminderCreaterData" >
          <div><img src={Clock} alt="time" /><span className="calendarReminderCreaterDataText">время</span></div>
          <div><img src={Flag} alt="tricolor" /><span className="calendarReminderCreaterDataText">3 раза в неделю</span></div>
          <div><img src={People} alt="person" /><span className="calendarReminderCreaterDataText">человек</span></div>
          <div><img src={Location} alt="place" /><span className="calendarReminderCreaterDataText">место</span></div>
          <div><img src={Calendar} alt="date" /><span className="calendarReminderCreaterDataText">автор</span></div>
          <div><div className="calendarColorBlock" /><div className="calendarColorText"></div>сфера</div>
      </div>
      
      
      
      <div className="calendarReminderCreaterButtons">
          <button className="calendarReminderCreaterDelayButton" onClick={hideReminderCreater}>Отложить</button>
          <button className="calendarReminderCreaterDoneButton" onClick={hideReminderCreater}>Сделано</button>
      </div>
    </div>
    <div className="cover"></div>
    </>
  );
};
