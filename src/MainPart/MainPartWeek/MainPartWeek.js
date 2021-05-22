import './MainPartWeek.css'
import { NextWeekGoals } from '../NextWeekGoals/NextWeekGoals'
import { NextWeekPlans } from '../NextWeekPlans/NextWeekPlans'
import { WeekPlan } from '../WeekPlan/WeekPlan'
import { WeekGoals } from '../WeekGoals/WeekGoals'
import { WeekDiary } from '../WeekDiary/WeekDiary'
import { Analytics } from '../Analytics/Analytics'

export const MainPartWeek = ({ sidebarStatusTrue, showCreateForm, hideCreateForm }) => {
    return (
        <div className={sidebarStatusTrue ? 'mainPart' : 'mainPartMoved'}>
            <div className="mainPartWeekPlan">
               <WeekPlan time="недели" showCreateForm={showCreateForm} hideCreateForm={hideCreateForm}/> 
            </div>
            <div className="mainPartWeekGoals">
                <WeekGoals time="недели" showCreateForm={showCreateForm} hideCreateForm={hideCreateForm}/>
            </div>
            <div className="mainPartWeekDiary">
                <WeekDiary time="недели" showCreateForm={showCreateForm} hideCreateForm={hideCreateForm}/>
            </div>
            <div className="mainPartNextWeekGoals">
                <NextWeekGoals time="недели" showCreateForm={showCreateForm} hideCreateForm={hideCreateForm}/>
            </div>
            <div className="mainPartNextWeekPlans">
                <NextWeekPlans time="недели" showCreateForm={showCreateForm} hideCreateForm={hideCreateForm}/>
            </div>
            <div className="mainPartAnalytics">
                <Analytics />
            </div>
            
            
            
            
            
            
            
        </div>
    )
}