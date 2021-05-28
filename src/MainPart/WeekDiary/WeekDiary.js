import './WeekDiary.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import CreateIcon from '../../Assets/CreateIcon.png'
export const WeekDiary = ({ time, showCreateForm }) => {
    const [data, setData] = useState([])
    async function fetchData() {
        let response = await axios.get('https://60a7a2c88532520017ae4a3b.mockapi.io/diary')
        let info = await response.data
        
        setData(info)
    }
    useEffect(() => {
        fetchData()
    }, [])
    let content = data.map(data => <li>{data.description}</li>)
    return (
        <div className="weekDiary">
            <div className="weekDiaryName">
                <h2>Дневник {time}</h2>
            </div>
            <div className="weekDiaryCreate">
                <img src={CreateIcon} onClick={showCreateForm} alt="Create"/>
            </div>
            <div className="weekDiaryData">
                <ul>
                  {content}
                </ul>
            </div>
        </div>
    )
}