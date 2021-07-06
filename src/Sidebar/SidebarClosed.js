import "./SidebarClosed.css";
import ArrowRight from "../Assets/ArrowRight.svg";
import Home from "../Assets/Home.svg";
import List from "../Assets/List.svg";
import Bag from "../Assets/Bag.svg";
import Check from "../Assets/Check.svg";
import Keylock from "../Assets/Keylock.svg";
import Book from "../Assets/Book.svg";
import Stats from "../Assets/Stats.svg";
import Settings from "../Assets/Settings.svg";
import { Link } from 'react-router-dom'

export const TotalSidebarClosed = ({ logo, showSidebar }) => {

  return (
    <div className="totalSidebar">
      <div className="totalSidebarName">{logo}</div>
      <div className="totalSidebarPanel">
        <div className="totalSidebarPanelArrow">
          <img src={ArrowRight} onClick={showSidebar} alt="Create"/>
        </div>
        <div className="totalSidebarPanelHome">
          <Link to="/week"><img src={Home} alt="Create"/></Link>
        </div>
        <div className="totalSidebarPanelList">
          <img src={List} alt="Create"/>
        </div>
        <div className="totalSidebarPanelBag">
          <Link to="/calendarMonth"><img src={Bag} alt="Create"/></Link>
        </div>
        <div className="totalSidebarPanelCheck">
          <Link to="/goalsTime"><img src={Check} alt="Create"/></Link>
        </div>
        <div className="totalSidebarPanelKeylock">
          <img src={Keylock} alt="Create"/>
        </div>
        <div className="totalSidebarPanelBook">
          <img src={Book} alt="Create"/>
        </div>
        <div className="totalSidebarPanelStats">
          <img src={Stats} alt="Create"/>
        </div>
        <div className="totalSidebarPanelSettings">
          <img src={Settings} alt="Create"/>
        </div>
      </div>
      
    </div>
  );
};
