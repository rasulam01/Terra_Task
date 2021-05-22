import './MonthDiary.css'
import CreateIcon from '../../Assets/CreateIcon.png'
export const MonthDiary = ({ time, showCreateForm }) => {
    return (
        <div className="weekDiary">
            <div className="weekDiaryName">
                <h2>Дневник {time}</h2>
            </div>
            <div className="weekDiaryCreate">
                <img src={CreateIcon} onClick={showCreateForm}/>
            </div>
        </div>
    )
}