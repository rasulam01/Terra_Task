import "./CalendarReminderAdder.css";
import React, { useState, useEffect } from "react";
import { NavLink, Link } from 'react-router-dom'
import axios from "axios";
import ClosingIcon from "../../Assets/Closer.png";
import Clock from "../../Assets/Clock.png";
import Flag from "../../Assets/Flag.png";
import People from "../../Assets/People.png";
import Location from "../../Assets/Location.png";
import Calendar from "../../Assets/Bag.svg";


export const CalendarReminderAdder = ({ hideAdder, hyper }) => {
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
  const [titleIsValid, setTitleIsValid] = useState(false)
  const [startDateIsValid, setStartDateIsValid] = useState(false)
  const [endDateIsValid, setEndDateIsValid] = useState(false)
  const [eventIsValid, setEventIsValid] = useState(false)
  const [placeIsValid, setPlaceIsValid] = useState(false)
  const [valid, setValid] = useState(false)
  const [colorBlockClass, setColorBlockClass] = useState("")
  let validOverall = false
  let validTitle = false
  let validDate = false
    let validStart = false
    let validEnd = false
    let validEvent = false
    let validPlace = false

  
  const setNameTitle = (e) => {
    setTitle(e.target.value);
    // if (title.length === 0) {
    //   validTitle = false
    // } else {
    //   validTitle = true
    // }
  };
  const setDate = (e) => {
      setDateValue(e.target.value)
  }
  const setStartTime = (e) => {
    setStartTimeValue(e.target.value);
    // if (startTimeValue === null || startTimeValue === undefined) {
    //   validStart = false
    // } else {
    //   validStart = true
    // }
  };
  const setEndTime = (e) => {
    setEndTimeValue(e.target.value);
    // if (endTimeValue === null || endTimeValue === undefined) {
    //   validEnd = false
    // } else {
    //   validEnd = true
    // }
  };
  const setAuthorName = (e) => {
    setAuthor(e.target.value);
  };
  const setLocation = (e) => {
    setLocationValue(e.target.value);
    // if (locationValue.length === 0) {
    //   validPlace = false
    // } else {
    //   validPlace = true
    // }
  };
  if (title.length === 0) {
    validTitle = false
  } else {
    validTitle = true
  }
  if (dateValue === null || dateValue === undefined || dateValue.length === 0) {
    validDate = false
  } else {
    validDate = true
  }
  if (startTimeValue === null || startTimeValue === undefined || startTimeValue.length === 0) {
    validStart = false
  } else {
    validStart = true
  }
  if (endTimeValue === null || endTimeValue === undefined || endTimeValue.length === 0) {
    validEnd = false
  } else {
    validEnd = true
  }
  if (eventName === undefined || eventName === null || eventName.length === 0) {
        validEvent = false
      } else {
        validEvent = true
      }
  if (locationValue.length === 0) {
    validPlace = false
  } else {
    validPlace = true
  }
  
  if (validTitle && validStart && validEnd && validEvent && validPlace) {
    validOverall = true
  } else {
    validOverall = false
  }
  const validation = () => {
    console.log(validTitle, validDate, validStart, validEnd, validEvent, validPlace, validOverall);
    // if (validTitle && validStart && validEnd && validEvent && validPlace) {
    //   validOverall = true
    // } else {
    //   validOverall = false
    // }
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
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNjI1ODI3MDM2fQ.Flosc9Ev9IRGQXNR-kp-O1N5qsWPrIoSJL5SQ5n_cRg"
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
        .then(() => {
          const tempo = [...backendData]
          tempo.push(data2)
          setBackendData(tempo)
          
          console.log(backendData);
          console.log(tempo);
          
        })
        getData('calendar/month/')
        
    
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
    
        
    return await res.data;
  };

  useEffect(() => {
      getData('calendar/month/')
      
      
      
  }, [valid])

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
    // let validTitle = false
    // let validStart = false
    // let validEnd = false
    // let validEvent = false
    // let validPlace = false
    // let validOverall = false
    if (object.title.length === 0) {
      validTitle = false

    } else {
      validTitle = true
    }

    if (object.start_date === undefined || object.start_date === null || object.start_date === ' :00' || object.start_date.length < 17) {
      validStart = false
    } else {
      validStart = true
    }

    if (object.end_date === undefined || object.end_date === null || object.end_date === ' :00' || object.end_date.length < 17) {
      validEnd = false
    } else {
      validEnd = true
    }

    if (object.event === undefined || object.event === null || object.event.length === 0) {
      validEvent = false
    } else {
      validEvent = true
    }

    if (object.place.length === 0 || object.place === undefined || object.place === null && placeIsValid) {
      validPlace = false
    } else {
      validPlace = true
    }
    
    if (validTitle && validStart && validEnd && validEvent && validPlace) {
      validOverall = true
    } else {
      validOverall = false
    }
    console.log(validTitle, validStart, validEnd, validEvent, validPlace, validOverall);

    

    console.log('1:', titleIsValid,'2:', startDateIsValid,'3:', endDateIsValid,'4:', eventIsValid,'5:', placeIsValid,'6:', valid);
    console.log(typeof(titleIsValid, startDateIsValid, endDateIsValid, eventIsValid, placeIsValid));

    

    
    console.log('-----------------------------------------------------');
    console.log(object);
    console.log('-----------------------------------------------------');
    setSphereId(selector.current.selectedIndex)
    setSphereTitle(selector.current[selector.current.selectedIndex].text)
    console.log(selector.current.value);
    
    
  
    
    console.log(selector.current.selectedIndex.textContent);
    console.log(selector.current.selectedIndex);
    console.log(selector.current[selector.current.selectedIndex].text)
    
    
    
    console.log(dateValue + " " + startTimeValue);
    console.log(endTimeValue);
    console.log(dateValue + " " + endTimeValue );
    console.log(object);
    
    
    
    
      
    if (validOverall) {
      postData(object, `calendar/month/`)
      console.log(object.start_date);
      getData('calendar/month/')
      
      
      
      
      
      
    } else {
      e.preventDefault()
      alert('The form is not fully complete!')
    }
    
    
    
    
    getData('calendar/month/')
}


  return (
    <>
      <div className="calendarReminderCreater" style={{ border: validOverall ? '2px solid green' : '2px solid red'}} onChange={validation}>
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
          <div id="1" value="event" onClick={eventKey} className={eventId === '1' ? 'totalTimeSpansSelected' : ''}>Мероприятие</div>
          <div id="2" value="task" onClick={eventKey} className={eventId === '2' ? 'totalTimeSpansSelected' : ''}>Задача</div>
          <div id="3" value="reminder" onClick={eventKey} className={eventId === '3' ? 'totalTimeSpansSelected' : ''}>Напоминание</div>
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
            {" "}
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
          <div className={colorBlockClass} />
          <span className="calendarColorText">Сфера: <select ref={selector} onChange={getCurrentValue}>
             <option value="" selected disabled hidden>Выбрать опцию</option>                        
             <option value="health_and_sports" onClick={sphereKey}>Здоровье и спорт</option> 
             <option value="business_and_career" onClick={sphereKey}>Бизнес и карьера</option>
             <option value="family_and_love" onClick={sphereKey}>Семья и любовь</option>
             <option value="personal_growth" onClick={sphereKey}>Личностный рост</option>
             <option value="investment" onClick={sphereKey}>Инвестиции</option>
             <option value="environment_and_friends" onClick={sphereKey}>Окружение и друзья</option>
             <option value="brightness_of_life" onClick={sphereKey}>Яркость жизни</option>
             <option value="charity" onClick={sphereKey}>Благотворительность</option></select></span>
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
