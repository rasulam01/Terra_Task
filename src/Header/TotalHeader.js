import './TotalHeader.css'
import { NavLink } from 'react-router-dom'
import  UserImage from '../Assets/image.jpg'
import  MagnifyingGlass from '../Assets/search.svg'
import  Bell from '../Assets/Bells.svg'


export const TotalHeader = ({ sidebarStatusTrue }) => {
    return (
        <div className="totalHeader">
            <div className={sidebarStatusTrue ? 'totalBlock' : 'totalBlockOpened'} >
                Итоги
            </div>
            <div className="totalTimeSpans">
                <div className="totalTimeSpansWeek">
                    <NavLink activeClassName="totalTimeSpansSelected" to="/week">Неделя</NavLink>                                        
                </div>
                <div className="totalTimeSpansMonth">
                    <NavLink activeClassName="totalTimeSpansSelected" to="/month">Месяц</NavLink>                                            
                </div>
                <div className="search">
                    <div className="searchCircle">                    
                       <img src={MagnifyingGlass} />
                    </div>                                                    
                </div>
                <div className="bell">                
                    <div className="bellNotified">                        
                        <img src={Bell} />
                    </div>
                </div>
                <div className="user">
                    <div className="userName">
                        <p>Chryssalid</p>
                    </div>
                    <div className="userImage">
                        <img src={UserImage} />
                    </div>
                </div>
            </div>
        </div>
    )
}