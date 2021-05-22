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

export const TotalSidebarOpened = ({ logo, showSidebar }) => {
  return (
    <div className="totalSidebarOpened">
      <div className="totalSidebarName">{logo}</div>
      <div className="totalSidebarPanelOpened">
        <div className="totalSidebarPanelArrowOpened opened">
          <img src={ArrowLeft} onClick={showSidebar} />{" "}
          <span className="description" onClick={showSidebar}>
            Свернуть
          </span>
        </div>
        <div className="totalSidebarPanelHomeOpened opened">
          <img src={Home} /> <span className="description">Колесо баланса</span>
        </div>
        <div className="totalSidebarPanelListOpened opened">
          <img src={List} /> <span className="description">Дневник</span>
        </div>
        <div className="totalSidebarPanelBagOpened opened">
          <img src={Bag} /> <span className="description">Календарь</span>
        </div>
        <div className="totalSidebarPanelCheckOpened opened">
          <img src={Check} /> <span className="description">Мои цели</span>
        </div>
        <div className="totalSidebarPanelKeylockOpened opened">
          <img src={Keylock} />{" "}
          <span className="description">Мои ценности</span>
        </div>
        <div className="totalSidebarPanelBookOpened opened">
          <img src={Book} /> <span className="description">Списки</span>
        </div>
        <div className="totalSidebarPanelStatsOpened opened">
          <img src={Stats} /> <span className="description">Итоги</span>
        </div>
        <div className="totalSidebarPanelSettingsOpened opened">
          <img src={Settings} /> <span className="description">Настройки</span>
        </div>
        <div className="totalSidebarPanelButton">
          <button className="totalSidebarPanelExit">Выйти</button>
        </div>
      </div>
    </div>
  );
};
