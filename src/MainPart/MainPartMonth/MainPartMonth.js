import './MainPartMonth.css'
import { MonthPlan } from '../MonthPlan/MonthPlan'
import { MonthGoals } from '../MonthGoals/MonthGoals'
import { NextMonthPlans } from '../NextMonthPlans/NextMonthPlans'
import { NextMonthGoals } from '../NextMonthGoals/NextMonthGoals'
import { MonthDiary } from '../MonthDiary/MonthDiary' 
import { AnalyticsMonth } from '../AnalyticsMonth/AnalyticsMonth'

export const MainPartMonth = ({ showCreateForm, hideCreateForm }) => {
    return (
        <div className='mainPartMonth'>
          <div className="mainPartMonthPlan">
            <MonthPlan time="месяца"/>
          </div>
          <div className="mainPartMonthGoals">
            <MonthGoals time="месяца" />
          </div>
          <div className="mainPartMonthNextPlans">
            <NextMonthPlans time="месяца" />
          </div>
          <div className="mainPartMonthNextGoals">
            <NextMonthGoals time="месяца" />
          </div>
          <div className="mainPartMonthDiary">
            <MonthDiary time="месяца" />
          </div>
          <div className="analytics">
            <AnalyticsMonth />
            
          </div>
        </div>
    )
}