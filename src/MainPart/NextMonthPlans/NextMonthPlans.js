import './NextMonthPlans.css'
import CreateIcon from '../../Assets/CreateIcon.png'

export const NextMonthPlans = ({ time, showCreateForm}) => {
    return (
        <div className="nextWeekPlans">
            <div className="nextWeekPlansName">
                <h2>План следующего {time}</h2>
            </div>
            <div className="nextWeekPlansCreate">
                <img src={CreateIcon} onClick={showCreateForm} alt="Create"/>
            </div>
        </div>
    )
}