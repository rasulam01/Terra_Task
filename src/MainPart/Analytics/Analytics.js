import './Analytics.css'
import CreateIcon from '../../Assets/CreateIcon.png'

export const Analytics = () => {
    return (
        <div className="analytics">
            <div className="analyticsName">
                <h2>Аналитика</h2>
            </div>
            <div className="analyticsCreate">
                <img src={CreateIcon} />
            </div>
        </div>
    )
}