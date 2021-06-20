import './GoalsHeader.css'
import  UserImage from '../../Assets/image.jpg'
import  MagnifyingGlass from '../../Assets/search.svg'
import  Bell from '../../Assets/Bells.svg'


export const GoalsHeader = ({ sidebarStatusTrue, previousMonth, showToday, nextMonth, showAdder }) => {
    return (
        <div className="totalHeader">
            <div className={sidebarStatusTrue ? 'totalBlock' : 'totalBlockOpened'} >
                Мои цели
            </div>
            <div className="totalTimeSpans">                                
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