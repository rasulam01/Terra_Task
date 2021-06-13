import './NextMonthPlans.css'
import CreateIcon from '../../Assets/CreateIcon.png'
import axios from 'axios'
import { useState, useEffect } from 'react'

export const NextMonthPlans = ({ time, showCreateForm}) => {
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
        <div className="nextWeekPlans">
            <div className="nextWeekPlansName">
                <h2>План следующего {time}</h2>
            </div>
            <div className="nextWeekPlansCreate">
                <img src={CreateIcon} onClick={showCreateForm} alt="Create"/>
            </div>
            <div className="nextMonthPlansData">
                {data.map(data => <li key={data.id} className="nextWeekPlansInfo">{data.name}</li>)}
            </div>
        </div>
    )
}