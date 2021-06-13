import './AnalyticsMonth.css'
import CreateIcon from '../../Assets/CreateIcon.png'
import { useState, useEffect } from 'react'
import axios from 'axios'

export const AnalyticsMonth = () => {
    const [data, setData] = useState([]);
    async function fetchData() {
        let response = await axios.get('https://60a7a2c88532520017ae4a3b.mockapi.io/analytics')
        let info = await response.data
        setData(info)

    }
    useEffect(() => {
        fetchData()
    })
    let content = data.map((data, pos) => (
        <li key={data.id}><span className="metricName">{data.metric}</span><span className="metricValue">{data.value}</span></li>
    ))
    return (
        <div className="analytics">
            <div className="analyticsName">
                <h2>Аналитика</h2>
                
            </div>
            
            <div className="analyticsCreate">
                <img src={CreateIcon} alt="Create"/>
            </div>
            <div className="analyticsData">
                {content}
            </div>
        </div>
    )
}