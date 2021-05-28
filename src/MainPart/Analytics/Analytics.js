import './Analytics.css'
import CreateIcon from '../../Assets/CreateIcon.png'
import axios from 'axios'
import { useState, useEffect } from 'react'

export const Analytics = ({ showCreateForm }) => {
    const [data, setData] = useState([]);
    async function fetchData() {
        let response = await axios.get('https://60a7a2c88532520017ae4a3b.mockapi.io/analytics')
        let info = await response.data
        setData(info)

    }
    useEffect(() => {
        fetchData()
    })
    let content = data.map(data => <li>{data.description}</li>)
    return (
        <div className="analytics">
            <div className="analyticsName">
                <h2>Аналитика</h2>
            </div>
            <div className="analyticsCreate">
                <img src={CreateIcon} onClick={showCreateForm} alt="Create"/>
            </div>
            <div className="analyticsData">
                {content}
            </div>
        </div>
    )
}