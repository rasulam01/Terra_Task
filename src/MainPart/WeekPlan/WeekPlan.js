import './WeekPlan.css'
import  CreateIcon  from '../../Assets/CreateIcon.png'
import { useState, useEffect } from 'react'
import axios from 'axios'

export const WeekPlan = ({ time, showCreateForm }) => {
    const [data, setData] = useState([]);
    async function fetchData() {
        let response = await axios.get(`https://60a7a2c88532520017ae4a3b.mockapi.io/weekgoal`)
        let info = await response.data
        setData(info)

    }
    useEffect(() => {
        fetchData()
    })
    return (
        <div className="weekPlan">
            <div className='weekPlanName'>
                <h2>План {time}</h2>
            </div>
            <div className="weekPlanCreate">
                <img src={CreateIcon} onClick={showCreateForm}/>
            </div>
            
            <div className="weekPlanData">
                <ul>
                  {data.map(data => <li className="weekPlanData">{data.name}</li>)}
                </ul>
            </div>
        </div>
    )
}