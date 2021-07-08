import "./CalendarReminderCreater.css";
import { useState, useEffect } from 'react'
import axios from 'axios'
import ClosingIcon  from '../../Assets/Closer.png'
import Clock from '../../Assets/Clock.png'
import Flag from '../../Assets/Flag.png'
import People from '../../Assets/People.png'
import Location from '../../Assets/Location.png'
import Calendar from '../../Assets/Bag.svg'


export const CalendarReminderCreater = ({hideReminderCreater, id}) => {
  const [title, setTitle] = useState("");
  const [back, setBack] = useState([]);
  
  const setNameTitle = (e) => {
    setTitle(e.target.value);
  };
  const API_URL = 'http://localhost:8000';
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNjI1ODI3MDM2fQ.Flosc9Ev9IRGQXNR-kp-O1N5qsWPrIoSJL5SQ5n_cRg'
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
    getBackend()
    
    
  }, [])
  
  
 
  return (
      <>
    <div className="calendarReminderCreater">
      <div className="calendarReminderCreaterVisit">
        <input
          type="text"
          name="text"
          placeholder="Цель заметки"
          value={id.title}
          onChange={setNameTitle}
        />
      </div>
      
      <div className="calendarReminderCreaterTypes">
          <div className={id.event.title === 'Мероприятие' ? 'totalTimeSpansSelected' : ''}>Мероприятие</div>
          <div className={id.event.title === 'Задача' ? 'totalTimeSpansSelected' : ''}>Задача</div>
          <div className={id.event.title === 'Напоминание' ? 'totalTimeSpansSelected' : ''}>Напоминание</div>
      </div>
      <img src={ClosingIcon} className="calendarReminderCreaterCloser" onClick={hideReminderCreater} alt="shut" />
      
      
      
        <div className="calendarReminderCreaterData" >
          <div><img src={Clock} alt="time" /></div><span className="calendarReminderCreaterDataText">{id.id}</span>
          <div><img src={Flag} alt="tricolor" /></div><span className="calendarReminderCreaterDataText">{id.start_date} - {id.end_date}</span>
          <div><img src={People} alt="person" /></div><span className="calendarReminderCreaterDataText">{id.author}</span>
          <div><img src={Location} alt="place" /></div><span className="calendarReminderCreaterDataText">{id.place}</span>
          <div><img src={Calendar} alt="date" /></div><span className="calendarReminderCreaterDataText">{id.author}</span>
          <div className="calendarColorBlock" /><span className="calendarColorText">Сфера: {id.sphere.title}</span>
      </div>
      
      
      
      <div className="calendarReminderCreaterButtons">          
          <button className="calendarReminderCreaterDoneButton" onClick={hideReminderCreater}>Понял</button>
      </div>
    </div>
    <div className="cover"></div>
    </>
  );
};
