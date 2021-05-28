import './NextMonthGoals.css'
import CreateIcon from '../../Assets/CreateIcon.png'
export const NextMonthGoals = ({ time, showCreateForm }) => {
    return (
        <div className="nextWeekGoals">
            <div className="nextWeekGoalsName">
                <h2>Цели следующего {time}</h2>
            </div>
            <div className="nextWeekGoalsCreate">
                <img src={CreateIcon} onClick={showCreateForm} alt="Create"/>
            </div>



        </div>
    )
}