import './NextWeekPlans.css'
import CreateIcon from '../../Assets/CreateIcon.png'
import axios from 'axios'
import { useState, useEffect } from 'react'

export const NextWeekPlans = ({ time, showCreateForm }) => {
    const [data, setData] = useState([]);
    async function fetchData() {
        let response = await axios.get('https://60a7a2c88532520017ae4a3b.mockapi.io/weekplan')
        let info = await response.data
        setData(info)

    }
    useEffect(() => {
        fetchData()
    })
    let content = data.map(data => <li>{data.description}</li>)
    return (
        <div className="nextWeekPlans">
            <div className="nextWeekPlansName">
                <h2>План следующей {time}</h2>
            </div>
            <div className="nextWeekPlansCreate">
                <img src={CreateIcon} onClick={showCreateForm} alt="Create"/>
            </div>
            <div className="nextWeekPlansData">
                <ul>
                  {content}
                </ul>
            </div>
        </div>
    )
}