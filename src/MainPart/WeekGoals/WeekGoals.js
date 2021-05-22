import './WeekGoals.css'
import CreateIcon from '../../Assets/CreateIcon.png'
export const WeekGoals = ({ time, showCreateForm }) => {
    return (
        <div className="weekGoals">
            <div className="weekGoalsName">
                <h2>Цели {time}</h2>
            </div>
            <div className="weekGoalsCreate">
                <img src={CreateIcon} onClick={showCreateForm}/>
            </div>
        </div>
    )
}