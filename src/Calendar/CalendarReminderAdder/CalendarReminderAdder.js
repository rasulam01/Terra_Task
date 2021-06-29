import "./CalendarReminderAdder.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ClosingIcon from "../../Assets/Closer.png";
import Clock from "../../Assets/Clock.png";
import Flag from "../../Assets/Flag.png";
import People from "../../Assets/People.png";
import Location from "../../Assets/Location.png";
import Calendar from "../../Assets/Bag.svg";

export const CalendarReminderAdder = ({ hideAdder }) => {
  const [backendData, setBackendData] = useState([])
  const [title, setTitle] = useState("");
  const [dateValue, setDateValue] = useState('')
  const [startTimeValue, setStartTimeValue] = useState("");
  const [endTimeValue, setEndTimeValue] = useState("");
  const [author, setAuthor] = useState("");
  
  const [locationValue, setLocationValue] = useState("");
  const [personValue, setPersonValue] = useState("");
  const [events, setEvents] = useState(['Мероприятие', 'Задача', 'Напоминание'])
  
  const [eventSlug, setEventSlug] = useState('')
  const [eventId, setEventId] = useState("")
  const [eventName, setEventName] = useState("")
  const [sphereId, setSphereId] = useState("")
  const [sphereTitle, setSphereTitle] = useState("")
  const setNameTitle = (e) => {
    setTitle(e.target.value);
  };
  const setDate = (e) => {
      setDateValue(e.target.value)
  }
  const setStartTime = (e) => {
    setStartTimeValue(e.target.value);
  };
  const setEndTime = (e) => {
    setEndTimeValue(e.target.value);
  };
  const setAuthorName = (e) => {
    setAuthor(e.target.value);
  };
  const setLocation = (e) => {
    setLocationValue(e.target.value);
  };
  const setPerson = (e) => {
    setPersonValue(e.target.value);
  };
  const eventKey = (e) => {
      console.log(e.target.id);
      setEventId(e.target.id)
      setEventName(e.target.textContent)
      setEventSlug(e.target.getAttribute('value'));
      console.log(eventId);
      console.log(e.target.textContent);
      console.log(events);
      console.log(e.target.getAttribute('id'));

      
  }
  const sphereKey = (e) => {
      console.log(selector.current.selectedIndex);
      
      console.log(selector.options[selector.selectedIndex].getAttribute('data-key'));
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
    setBackendData(result);
    console.log(res.data);
    
    return await res.data;
  };

  useEffect(() => {
      getData('calendar/month/')
  }, [])

let selector = React.createRef()
let saveItem = (e) => {
    const object = {
        title: title,
        start_date: dateValue + " " + startTimeValue + ":00",
        end_date: dateValue + " " + endTimeValue + ":00",
        event: eventSlug,        
        place: locationValue,
        sphere: selector.current.value,        
        description: "",
    }
    console.log('-----------------------------------------------------');
    console.log(object);
    console.log('-----------------------------------------------------');
    setSphereId(selector.current.selectedIndex + 1)
    setSphereTitle(selector.current[selector.current.selectedIndex].text)
    console.log(selector.current.value);
    
    // console.log(selector.options[selector.current.selectedIndex]);
    console.log(selector.current.selectedIndex.textContent);
    console.log(selector.current.selectedIndex);
    console.log(selector.current[selector.current.selectedIndex].text)
    
    
    console.log(dateValue + " " + startTimeValue);
    console.log(endTimeValue);
    console.log(dateValue + " " + endTimeValue );
    console.log(object);
    postData(object, `calendar/month/`)
    
    
}


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
          <div id="1" value="event" onClick={eventKey}>Мероприятие</div>
          <div id="2" value="task" onClick={eventKey}>Задача</div>
          <div id="3" value="reminder" onClick={eventKey}>Напоминание</div>
        </div>
        <img
          src={ClosingIcon}
          className="calendarReminderCreaterCloser"
          onClick={hideAdder}
          alt="shut"
        />

        <div className="calendarReminderCreaterData">
          <div>
            <img src={Clock} alt="time" />
          </div>
          <span className="calendarReminderCreaterDataText">
            <input
              type="date"
              name="text"
              placeholder="Время"
              value={dateValue}
              onChange={setDate}
            />
            <input
              type="time"
              name="text"
              placeholder="Время"
              value={startTimeValue}
              onChange={setStartTime}
            />
            {"-"}
            <input
            type="time"
            name="text"
            placeholder="Время"
            vale={endTimeValue}
            onChange={setEndTime}
            />
          </span>
          <div>
            <img src={Flag} alt="tricolor" />
          </div>
          <span className="calendarReminderCreaterDataText">
            <input
              type="text"
              name="text"
              placeholder="Частота"
              value={endTimeValue}
              onChange={setEndTime}
            />
          </span>
          <div>
            <img src={People} alt="person" />
          </div>
          <span className="calendarReminderCreaterDataText">
            <input
              type="text"
              name="text"
              placeholder="Создатель"
              value={author}
              onChange={setAuthorName}
            />
          </span>
          <div>
            <img src={Location} alt="place" />
          </div>
          <span className="calendarReminderCreaterDataText">
            <input
              type="text"
              name="text"
              placeholder="Место"
              value={locationValue}
              onChange={setLocation}
            />
          </span>
          <div>
            <img src={Calendar} alt="date" />
          </div>
          <span className="calendarReminderCreaterDataText">
            <input
              type="text"
              name="text"
              placeholder="Человек"
              value={personValue}
              onChange={setPerson}
            />
          </span>
          <div className="calendarColorBlock" />
          <span className="calendarColorText">Сфера: <select ref={selector}>
             <option value="health_and_sport" data-key='1' onClick={sphereKey}>Здоровье и спорт</option> 
             <option value="business_and_career" data-key="2" onClick={sphereKey}>Бизнес и карьера</option>
             <option value="family_and_love" data-key="3" onClick={sphereKey}>Семья и любовь</option>
             <option value="personal_growth" data-key="4" onClick={sphereKey}>Личностный рост</option>
             <option value="investment" data-key="5" onClick={sphereKey}>Инвестиции</option>
             <option value="environment_and_friends" data-key="6" onClick={sphereKey}>Окружение и друзья</option>
             <option value="brightness_of_life" data-key="7" onClick={sphereKey}>Яркость жизни</option>
             <option value="charity" data-key="8" onClick={sphereKey}>Благотворительность</option></select></span>
        </div>

        <div className="calendarReminderCreaterButtons">
          <button
            className="calendarReminderCreaterDelayButton"
            onClick={hideAdder}
          >
            Отложить
          </button>
          <button
            className="calendarReminderCreaterDoneButton"
            onClick={hideAdder}
            onClick={saveItem}
            
          >
            Сделано
          </button>
        </div>
      </div>
      <div className="cover"></div>
    </>
  );
};
