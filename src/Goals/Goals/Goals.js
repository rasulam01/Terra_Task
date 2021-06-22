import "./Goals.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import AddSign from "../../Assets/AddSign.png";
import axios from "axios";
import Clock from "../../Assets/Clock.png";
import { GoalCreater } from "../GoalCreater/GoalCreater";

export const Goals = ({
  sidebarStatusTrue,
  showGoalCreater,
  hideGoalCreater,
  goalCreaterVisibility,
}) => {
  const [data, setData] = useState([]);
  const [familyAndLove, setFamilyAndLove] = useState([]);
  const [personalGrowth, setPersonalGrowth] = useState([]);
  const [charity, setCharity] = useState([]);
  const [investment, setInvestment] = useState([]);
  const [environmentAndFriends, setEnvironmentAndFriends] = useState([]);
  const [brightnessOfLife, setBrightnessOfLife] = useState([]);
  const [healthAndSport, setHealthAndSport] = useState([]);
  const [businessAndCareer, setBusinessAndCareer] = useState([]);
  const [info, setInfo] = useState(
    familyAndLove,
    personalGrowth,
    charity,
    investment,
    environmentAndFriends,
    brightnessOfLife,
    healthAndSport,
    businessAndCareer
  );
  const API_URL = "http://localhost:8000";
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNjI0NDUyNzI3fQ.XtEzfl4e5rgG-xTWCP3fUnd7XwwahsqwH0Dw4UXFVwE";
  const getData = async (urll) => {
    const url = `${API_URL}/api/v1/${urll}`;
    const res = await axios({
      method: "get",
      url: url,
      // data: params,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Bearer " + token,
      },
    });
    const result = res.data;
    console.log("WRITE POINT___________________");
    console.log(result);
    console.log("WRITE POINT___________________");

    setData(result);
    return await res.data;
  };

  useEffect(() => {
    getData(`goals/`).then((value) => {
      console.log("Control___________________");
      console.log(value.brightness_of_life);
      console.log("eND___________________");
      setFamilyAndLove(value.family_and_love);
      setPersonalGrowth(value.personal_growth);
      setCharity(value.charity);
      setInvestment(value.investment);
      setEnvironmentAndFriends(value.environment_and_friends);
      setBrightnessOfLife(value.brightness_of_life);
      setHealthAndSport(value.health_and_sports);
      setBusinessAndCareer(value.business_and_career);

      // console.log(value.charity);
      console.log(familyAndLove);
      console.log(personalGrowth);
      console.log(charity);
      console.log(investment);
      console.log(environmentAndFriends);
      console.log(brightnessOfLife);
      console.log(healthAndSport);
      console.log(businessAndCareer);
      console.log(info);
      console.log(data);

      console.log(
        info.map((item) => {
          <div>{item}</div>;
        })
      );
    });
  }, []);
  console.log(familyAndLove);
  console.log(personalGrowth);
  console.log(charity);
  console.log(investment);
  console.log(environmentAndFriends);
  console.log(brightnessOfLife);
  console.log(healthAndSport);
  console.log(businessAndCareer);
  console.log(info);
  console.log(data);

  return (
    <>
      <div className={sidebarStatusTrue ? "goalsOpened" : "goals"}>
        <div className="goalsSections">
          <NavLink activeClassName="totalTimeSpansSelected" to="/goalsTime">
            <div>Время</div>
          </NavLink>
          <NavLink activeClassName="totalTimeSpansSelected" to="/goalsBalance">
            <div>Баланс</div>
          </NavLink>
        </div>
        <div className="goalsCategories">
          <div className="goalsCategory">
            <div className="goalsCategoryTitle">Яркость жизни</div>
            
            {brightnessOfLife.map((item) => (
              <>
              {/* <div className="goalsCategoryCosmetic"> */}
                <div className="goalsCategoryDataBrightness">{item.data}</div>
                <div className="goalsCategoryDateBrightness">
                  <img src={Clock} alt="time" className="goalsCategoryImg" />
                  <span className="goalsCategoryTime">
                    {item.date.slice(8, 10) + "." + item.date.slice(5, 7)}
                  </span>
                </div>
                {/* </div> */}
              </>
            ))}

            <div>
              <img src={AddSign} alt="Add" onClick={showGoalCreater} />
            </div>
          </div>
          <div className="goalsCategory love">
            <div className="goalsCategoryTitle">Семья и любовь</div>

            {familyAndLove.map((item) => (
              <>
                <div className="goalsCategoryData">{item.data}</div>
                <div className="goalsCategoryDate">
                  <img src={Clock} alt="time" className="goalsCategoryImg" />
                  <span className="goalsCategoryTime">
                    {item.date.slice(8, 10) + "." + item.date.slice(5, 7)}
                  </span>
                </div>
              </>
            ))}

            <div>
              <img src={AddSign} alt="Add" onClick={showGoalCreater} />
            </div>
          </div>
          <div className="goalsCategory environment">
            <div className="goalsCategoryTitle">Окружение и друзья</div>

            {environmentAndFriends.map((item) => (
              <>
                <div className="goalsCategoryData">{item.data}</div>
                <div className="goalsCategoryDate">
                  <img src={Clock} alt="time" className="goalsCategoryImg" />
                  <span className="goalsCategoryTime">
                    {item.date.slice(8, 10) + "." + item.date.slice(5, 7)}
                  </span>
                </div>
              </>
            ))}

            <div>
              <img src={AddSign} alt="Add" onClick={showGoalCreater} />
            </div>
          </div>
          <div className="goalsCategory investment">
            <div className="goalsCategoryTitle">Финансы и инвестиции</div>

            {investment.map((item) => (
              <>
                <div className="goalsCategoryData">{item.data}</div>
                <div className="goalsCategoryDate">
                  <img src={Clock} alt="time" className="goalsCategoryImg" />
                  <span className="goalsCategoryTime">
                    {item.date.slice(8, 10) + "." + item.date.slice(5, 7)}
                  </span>
                </div>
              </>
            ))}

            <div>
              <img src={AddSign} alt="Add" onClick={showGoalCreater} />
            </div>
          </div>
          <div className="goalsCategory growth">
            <div className="goalsCategoryTitle">Личный рост</div>

            {personalGrowth.map((item) => (
              <>
                <div className="goalsCategoryData">{item.data}</div>
                <div className="goalsCategoryDate">
                  <img src={Clock} alt="time" className="goalsCategoryImg" />
                  <span className="goalsCategoryTime">
                    {item.date.slice(8, 10) + "." + item.date.slice(5, 7)}
                  </span>
                </div>
              </>
            ))}

            <div>
              <img src={AddSign} alt="Add" onClick={showGoalCreater} />
            </div>
          </div>
          <div className="goalsCategory career">
            <div className="goalsCategoryTitle">Бизнес и карьера</div>

            {businessAndCareer.map((item) => (
              <>
                <div className="goalsCategoryData">{item.data}</div>
                <div className="goalsCategoryDate">
                  <img src={Clock} alt="time" className="goalsCategoryImg" />
                  <span className="goalsCategoryTime">
                    {item.date.slice(8, 10) + "." + item.date.slice(5, 7)}
                  </span>
                </div>
              </>
            ))}

            <div>
              <img src={AddSign} alt="Add" onClick={showGoalCreater} />
            </div>
          </div>
          <div className="goalsCategory sport">
            <div className="goalsCategoryTitle">Здоровье и спорт</div>

            {healthAndSport.map((item) => (
              <>
                <div className="goalsCategoryData">{item.data}</div>
                <div className="goalsCategoryDate">
                  <img src={Clock} alt="time" className="goalsCategoryImg" />
                  <span className="goalsCategoryTime">
                    {item.date.slice(8, 10) + "." + item.date.slice(5, 7)}
                  </span>
                </div>
              </>
            ))}

            <div>
              <img src={AddSign} alt="Add" onClick={showGoalCreater} />
            </div>
          </div>
          <div className="goalsCategory benevolence">
            <div className="goalsCategoryTitle">Благотворительность</div>

            {charity.map((item) => (
              <>
                <div className="goalsCategoryData">{item.data}</div>
                <div className="goalsCategoryDate">
                  <img src={Clock} alt="time" className="goalsCategoryImg" />
                  <span className="goalsCategoryTime">
                    {item.date.slice(8, 10) + "." + item.date.slice(5, 7)}
                  </span>
                </div>
              </>
            ))}

            <div>
              <img src={AddSign} alt="Add" onClick={showGoalCreater} />
            </div>
          </div>
        </div>
        
      </div>
      {goalCreaterVisibility ? (
          <>
            <GoalCreater hideGoalCreater={hideGoalCreater} />
            <div className="cover" onClick={hideGoalCreater} />
          </>
        ) : null}
    </>
  );
};


