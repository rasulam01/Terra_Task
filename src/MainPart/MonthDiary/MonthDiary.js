import CreateIcon from '../../Assets/CreateIcon.png'
import { useState, useEffect } from 'react'
import axios from 'axios'

export const MonthDiary = ({ time, showCreateForm }) => {
    const [data, setData] = useState([]);
    async function fetchData() {
        let response = await axios.get(`https://60a7a2c88532520017ae4a3b.mockapi.io/diary`)
        let info = await response.data
        setData(info)

    }
    useEffect(() => {
        fetchData()
    }, [])
    let content = data.map((data, pos) => (
        <ul>
        <li key={data.id}>
          <div className="noteName">{data.name}</div>
          <div className="diaryContent">{data.description}</div>
        </li>
        </ul>
      )) 
    return (
        <div className="weekDiary">
            <div className="weekDiaryName">
                <h2>Дневник {time}</h2>
            </div>
            <div className="weekDiaryCreate">
                <img src={CreateIcon} onClick={showCreateForm} alt="Create"/>
            </div>
            <div className="weekDiaryData">
                {content}
            </div>
            

        </div>
    )
}