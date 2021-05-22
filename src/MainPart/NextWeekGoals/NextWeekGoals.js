import './NextWeekGoals.css'
import CreateIcon from '../../Assets/CreateIcon.png'
export const NextWeekGoals = ({ time, showCreateForm }) => {
    return (
        <div className="nextWeekGoals">
            <div className="nextWeekGoalsName">
                <h2>Цели следующей {time}</h2>
            </div>
            <div className="nextWeekGoalsCreate">
                <img src={CreateIcon} onClick={showCreateForm}/>
            </div>



        </div>
    )
}