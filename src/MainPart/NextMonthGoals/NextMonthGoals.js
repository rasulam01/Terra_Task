import './NextMonthGoals.css'
import CreateIcon from '../../Assets/CreateIcon.png'
import { useState, useEffect } from 'react'
import axios from 'axios'

export const NextMonthGoals = ({ time, showCreateForm }) => {
    const [data, setData] = useState([]);
    async function fetchData() {
        let response = await axios.get(`https://60a7a2c88532520017ae4a3b.mockapi.io/weekplan`)
        let info = await response.data
        setData(info)

    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className="nextWeekGoals">
            <div className="nextWeekGoalsName">
                <h2>Цели следующего {time}</h2>
            </div>
            <div className="nextWeekGoalsCreate">
                <img src={CreateIcon} onClick={showCreateForm} alt="Create"/>
            </div>
            <div className="nextWeekGoalsData">
                {data.map(data => <li key={data.id}>{data.id}</li>)}
            </div>




        </div>
    )
}