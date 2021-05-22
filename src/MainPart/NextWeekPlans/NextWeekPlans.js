import './NextWeekPlans.css'
import CreateIcon from '../../Assets/CreateIcon.png'

export const NextWeekPlans = ({ time, showCreateForm }) => {
    return (
        <div className="nextWeekPlans">
            <div className="nextWeekPlansName">
                <h2>План следующей {time}</h2>
            </div>
            <div className="nextWeekPlansCreate">
                <img src={CreateIcon} onClick={showCreateForm}/>
            </div>
        </div>
    )
}