import './NextWeekGoals.css'
import CreateIcon from '../../Assets/CreateIcon.png'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { TheFormCreater } from '../../TheFormCreater/TheFormCreater'
import DeleteIcon from "@material-ui/icons/Delete";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import EditAttributesOutlinedIcon from "@material-ui/icons/EditAttributesOutlined";
export const NextWeekGoals = ({ time, showCreateForm, createFormVisibility, hideCreateForm }) => {
    const [data, setData] = useState([]);
    const [editingMode, setEditingMode] = useState(null);
    const [editContent, setEditContent] = useState("");
    
    async function fetchData() {
        let response = await axios.get('https://60a7a2c88532520017ae4a3b.mockapi.io/weekgoals')
        let info = await response.data
        setData(info)

    }
    useEffect(() => {
        fetchData()
    }, [])
    let content = data.map((data, pos) => (
        <li key={data.id} className="nextWeekGoalsList">{data.description}
        </li>
    ))

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
            {createFormVisibility ? (
            <>
              <TheFormCreater
                hideCreateForm={hideCreateForm}
                url='https://60a7a2c88532520017ae4a3b.mockapi.io/weekgoals'
                
              />
              <div className="cover" onClick={hideCreateForm} />
            </>
            ) : null}
            



        </div>
    )
}