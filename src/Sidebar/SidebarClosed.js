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

export const TotalSidebarClosed = ({ logo, showSidebar }) => {

  return (
    <div className="totalSidebar">
      <div className="totalSidebarName">{logo}</div>
      <div className="totalSidebarPanel">
        <div className="totalSidebarPanelArrow">
          <img src={ArrowRight} onClick={showSidebar} />
        </div>
        <div className="totalSidebarPanelHome">
          <img src={Home} />
        </div>
        <div className="totalSidebarPanelList">
          <img src={List} />
        </div>
        <div className="totalSidebarPanelBag">
          <img src={Bag} />
        </div>
        <div className="totalSidebarPanelCheck">
          <img src={Check} />
        </div>
        <div className="totalSidebarPanelKeylock">
          <img src={Keylock} />
        </div>
        <div className="totalSidebarPanelBook">
          <img src={Book} />
        </div>
        <div className="totalSidebarPanelStats">
          <img src={Stats} />
        </div>
        <div className="totalSidebarPanelSettings">
          <img src={Settings} />
        </div>
      </div>
      
    </div>
  );
};
