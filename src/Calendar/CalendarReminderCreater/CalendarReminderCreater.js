import "./CalendarReminderCreater.css";
import { useState } from 'react'
import ClosingIcon  from '../../Assets/Closer.png'
import Clock from '../../Assets/Clock.png'
import Flag from '../../Assets/Flag.png'
import People from '../../Assets/People.png'
import Location from '../../Assets/Location.png'
import Calendar from '../../Assets/Bag.svg'

export const CalendarReminderCreater = ({hideReminderCreater}) => {
  const [title, setTitle] = useState("");
  const setNameTitle = (e) => {
    setTitle(e.target.value);
  };
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
      <div className="calendarReminderCreaterData">
          <div><img src={Clock} alt="time" /><span className="calendarReminderCreaterDataText">Вторник, 4 мая  12:00-16:00</span></div>
          <div><img src={Flag} alt="tricolor" /><span className="calendarReminderCreaterDataText">3 раза в неделю</span></div>
          <div><img src={People} alt="person" /><span className="calendarReminderCreaterDataText">Ксения Донская</span></div>
          <div><img src={Location} alt="place" /><span className="calendarReminderCreaterDataText">Москва Сити</span></div>
          <div><img src={Calendar} alt="date" /><span className="calendarReminderCreaterDataText">Ксюша Донская</span></div>
          <div><div className="calendarColorBlock" /><span className="calendarReminderCreaterDataTextArea">Сфера: Благотворительность</span></div>
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
