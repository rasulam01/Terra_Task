import './NextWeekGoals.css'
import CreateIcon from '../../Assets/CreateIcon.png'
import axios from 'axios'
import { useState, useEffect } from 'react'
export const NextWeekGoals = ({ time, showCreateForm }) => {
    const [data, setData] = useState([]);
    async function fetchData() {
        let response = await axios.get('https://60a7a2c88532520017ae4a3b.mockapi.io/weekgoals')
        let info = await response.data
        setData(info)
    }
    useEffect(() => {
        fetchData()
    }, [])
    let content = data.map(data => <li key={data.id}>{data.description}</li>)
    return (
        <div className="nextWeekGoals">
            <div className="nextWeekGoalsName">
                <h2>Цели следующей {time}</h2>
            </div>
            <div className="nextWeekGoalsCreate">
                <img src={CreateIcon} onClick={showCreateForm} alt="Create"/>
            </div>
            <div className="nextWeekGoalsData">
                {content}
            </div>

        </div>
    )
}