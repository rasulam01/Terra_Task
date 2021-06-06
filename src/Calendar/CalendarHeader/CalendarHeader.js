import './CalendarHeader.css'
import  UserImage from '../../Assets/image.jpg'
import  MagnifyingGlass from '../../Assets/search.svg'
import  Bell from '../../Assets/Bells.svg'
import { NavLink } from 'react-router-dom'
import CalendarAdd from '../../Assets/CalendarAdd.png'
// import calendarLeftArrow from '../../Assets/CalendarArrowLeft.png'
// import calendarCenter from '../../Assets/CalendarCenter.png'
// import calendarRightArrow from '../../Assets/CalendarArrowRight.png'
import calendarDateSwitch from '../../Assets/CalendarSwitchDate.png'

export const CalendarHeader = ({ sidebarStatusTrue }) => {
    return (
        <div className="totalHeader">
            <div className={sidebarStatusTrue ? 'totalBlock' : 'totalBlockOpened'} >
                Календарь
            </div>
            <div className="totalTimeSpans">
                <div className="calendarFeatures">
                    <div className="calendarAdd">
                        <img src={CalendarAdd} alt="Add" />
                    </div>
                    <div className="calendarSwitchDate">
                        <button>{'<'}</button>
                        <button>Сегодня</button>
                        <button>{'>'}</button>
                    </div>
                </div>
                <div className="calendarTimeSpansDay">
                    <NavLink activeClassName="totalTimeSpansSelected" to="/calendarDay">День</NavLink>
                </div>
                <div className="calendarTimeSpansWeek">
                    <NavLink activeClassName="totalTimeSpansSelected" to="/calendarWeek">Неделя</NavLink>                                        
                </div>
                <div className="calendarTimeSpansMonth">
                    <NavLink activeClassName="totalTimeSpansSelected" to="/calendarMonth">Месяц</NavLink>                                            
                </div>
                <div className="search">
                    <div className="searchCircle">                    
                       <img src={MagnifyingGlass} alt="Create"/>
                    </div>                                                    
                </div>
                <div className="bell">                
                    <div className="bellNotified">                        
                        <img src={Bell} alt="Create"/>
                    </div>
                </div>
                <div className="user">
                    <div className="userName">
                        <p>Chryssalid</p>
                    </div>
                    <div className="userImage">
                        <img src={UserImage} alt="Create"/>
                    </div>
                </div>
            </div>
        </div>
    )
}