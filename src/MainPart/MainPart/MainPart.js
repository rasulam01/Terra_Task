import './MainPart.css'
import { NextWeekGoals } from '../NextWeekGoals/NextWeekGoals'
import { NextWeekPlans } from '../NextWeekPlans/NextWeekPlans'
import { WeekPlan } from '../WeekPlan/WeekPlan'
import { WeekGoals } from '../WeekGoals/WeekGoals'
import { WeekDiary } from '../WeekDiary/WeekDiary'
import { Analytics } from '../Analytics/Analytics'

export const MainPart = ({ sidebarStatusTrue, createFormVisibility }) => {
    return (
        <div className={sidebarStatusTrue ? 'mainPart' : 'mainPartMoved'}>
            <div className="mainPartWeekPlan">
               <WeekPlan time="недели" url="https://60a7a2c88532520017ae4a3b.mockapi.io/weekplan" createFormVisibility={createFormVisibility}/> 
            </div>
            <div className="mainPartWeekGoals">
                <WeekGoals time="недели" url="https://60a7a2c88532520017ae4a3b.mockapi.io/weekgoal" createFormVisibility={createFormVisibility}/>
            </div>
            <div className="mainPartWeekDiary">
                <WeekDiary time="недели" url="https://60a7a2c88532520017ae4a3b.mockapi.io/diary" createFormVisibility={createFormVisibility}/>
            </div>
            <div className="mainPartNextWeekGoals">
                <NextWeekGoals time="недели" url="https://60a7a2c88532520017ae4a3b.mockapi.io/weekgoal" createFormVisibility={createFormVisibility}/>
            </div>
            <div className="mainPartNextWeekPlans">
                <NextWeekPlans time="недели" url="https://60a7a2c88532520017ae4a3b.mockapi.io/weekplan" createFormVisibility={createFormVisibility}/>
            </div>
            <div className="mainPartAnalytics">
                <Analytics createFormVisibility={createFormVisibility}/>
            </div>
            
            
            
            
            
            
            
        </div>
    )
}