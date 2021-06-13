import './MonthGoals.css'
import CreateIcon from '../../Assets/CreateIcon.png'
import axios from 'axios'
import { useState, useEffect } from 'react'

export const MonthGoals = ({ time, showCreateForm }) => {
    const [data, setData] = useState([]);
    async function fetchData() {
        let response = await axios.get(`https://60a7a2c88532520017ae4a3b.mockapi.io/weekgoals`)
        let info = await response.data
        setData(info)

    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className="weekGoals">
            <div className="weekGoalsName">
                <h2>Цели {time}</h2>
            </div>
            <div className="weekGoalsCreate">
                <img src={CreateIcon} onClick={showCreateForm} alt="Create"/>
            </div>
            <div className="weekGoalsLi">
                {data.map(data => <li key={data.id} className="weekGoalsInfo">{data.name}</li>)}
            </div>
        </div>
    )
}