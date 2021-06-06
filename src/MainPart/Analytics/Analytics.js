import './Analytics.css'
import CreateIcon from '../../Assets/CreateIcon.png'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { TheFormCreaterAnalytics } from '../../TheFormCreaterAnalytics/TheFormCreaterAnalytics'
// import DeleteIcon from "@material-ui/icons/Delete";
// import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
// import EditAttributesOutlinedIcon from "@material-ui/icons/EditAttributesOutlined";

export const Analytics = () => {
    const [data, setData] = useState([]);
    const [analyticsFormVisibility, setAnalyticsFormVisibility] = useState(false);
    // const [editingMode, setEditingMode] = useState(null);
    // const [editContent, setEditContent] = useState("");
    const showAnalyticsForm = () => {
        setAnalyticsFormVisibility(true)
    }
    const hideAnalyticsForm = () => {
        setAnalyticsFormVisibility(false)
    }
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
                <img src={CreateIcon} onClick={showAnalyticsForm} alt="Create"/>
            </div>
            <div className="analyticsData">
                {content}
            </div>
            {analyticsFormVisibility ? (
            <>
              <TheFormCreaterAnalytics
                hideAnalyticsForm={hideAnalyticsForm}
                showAnalyticsForm={showAnalyticsForm}
                analyticsFormVisibility={analyticsFormVisibility}
                url="https://60a7a2c88532520017ae4a3b.mockapi.io/analytics"
                
              />
              <div className="cover" onClick={hideAnalyticsForm} />
            </>
            ) : null}
        </div>
    )
}