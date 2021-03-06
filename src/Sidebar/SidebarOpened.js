import "./SidebarOpened.css";
import ArrowLeft from "../Assets/ArrowLeft.svg";
import Home from "../Assets/Home.svg";
import List from "../Assets/List.svg";
import Bag from "../Assets/Bag.svg";
import Check from "../Assets/Check.svg";
import Keylock from "../Assets/Keylock.svg";
import Book from "../Assets/Book.svg";
import Stats from "../Assets/Stats.svg";
import Settings from "../Assets/Settings.svg";
import { Link } from 'react-router-dom'

export const TotalSidebarOpened = ({ logo, showSidebar }) => {
  return (
    <div className="totalSidebarOpened">
      <div className="totalSidebarName">{logo}</div>
      <div className="totalSidebarPanelOpened">
        <div className="totalSidebarPanelArrowOpened opened">
          <img src={ArrowLeft} onClick={showSidebar} alt="Create"/>{" "}
          <span className="description" onClick={showSidebar}>
            Свернуть
          </span>
        </div>
        <div className="totalSidebarPanelHomeOpened opened">
          <Link to="/week"><img src={Home} alt="Create"/> <span className="description">Колесо баланса</span></Link>
        </div>
        <div className="totalSidebarPanelListOpened opened">
          <img src={List} alt="Create"/> <span className="description">Дневник</span>
        </div>
        <div className="totalSidebarPanelBagOpened opened">
          <Link to="/calendarMonth"><img src={Bag} alt="Create"/> <span className="description">Календарь</span></Link>
        </div>
        <div className="totalSidebarPanelCheckOpened opened">
          <Link to ="/goalsTime"><img src={Check} alt="Create"/> <span className="description">Мои цели</span></Link>
        </div>
        <div className="totalSidebarPanelKeylockOpened opened">
          <img src={Keylock} alt="Create"/>{" "}
          <span className="description">Мои ценности</span>
        </div>
        <div className="totalSidebarPanelBookOpened opened">
          <img src={Book} alt="Create"/> <span className="description">Списки</span>
        </div>
        <div className="totalSidebarPanelStatsOpened opened">
          <img src={Stats} alt="Create"/> <span className="description">Итоги</span>
        </div>
        <div className="totalSidebarPanelSettingsOpened opened">
          <img src={Settings} alt="Create"/> <span className="description">Настройки</span>
        </div>
        <div className="totalSidebarPanelButton">
          <button className="totalSidebarPanelExit">Выйти</button>
        </div>
      </div>
    </div>
  );
};
