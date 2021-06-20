import "./Goals.css";
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from "react";
import AddSign from '../../Assets/AddSign.png'


export const Goals = ({ sidebarStatusTrue }) => {
    const [categories, setCategories] = useState(['Яркость жизни', 'Семья и любовь', 'Окружение и друзья', 'Финансы и инвестиции', 'Личностный рост', 'Бизнес и карьера', 'Здоровье и спорт', 'Благотворительность'])
  return (
    <>
      <div className={sidebarStatusTrue ? 'goalsOpened' : 'goals'}>
         <div className="goalsSections">
             <NavLink activeClassName="totalTimeSpansSelected" to="/goalsTime"><div>Время</div></NavLink>
             <NavLink activeClassName="totalTimeSpansSelected" to="/goalsBalance"><div>Баланс</div></NavLink>
         </div>
         <div className="goalsCategories">
             {categories.map((item, i) => (
                 <div className="goalsCategoryBlock">
                   <div className="goalsCategory" key={i}>{item}</div>
                   <div><img src={AddSign} /></div>
                 </div>
             ))}
             {/* <div className="goalsCategory">
                 Яркость жизни
             </div>
             <div className="goalsCategory">
                 Семья и любовь
             </div>
             <div className="goalsCategory">
                 Окружение и друзья
             </div>
             <div className="goalsCategory">
                 Финансы и инвестиции
             </div>
             <div className="goalsCategory">
                 Личностный рост
             </div>
             <div className="goalsCategory">
                 Бизнес и карьера
             </div>
             <div className="goalsCategory">
                 Здоровье и спорт
             </div>
             <div className="goalsCategory">
                 Благотворительность
             </div> */}
         </div>
      </div>
    </>
  );
};
