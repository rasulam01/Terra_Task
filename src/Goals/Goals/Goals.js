import "./Goals.css";
import { NavLink, BrowserRouter, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import AddSign from "../../Assets/AddSign.png";
import axios from "axios";
import Clock from "../../Assets/Clock.png";
import Wheel from '../../Assets/BalanceWheel.png'
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
  const [twoMonth, setTwoMonth] = useState([]);
  const [sixMonth, setSixMonth] = useState([]);
  const [oneYear, setOneYear] = useState([]);  
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
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNjI0OTYzMzc1fQ.dtKdkrqFfPEjPZgA-NfzpIIQsE2wkV45bDCWAGAH-0w";
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
      console.log(value);
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
      setTwoMonth(value.two_mounth)
      setSixMonth(value.six_mounth)
      setOneYear(value.one_years)
      setInfo(
        value.brightness_of_life,
        value.family_and_love,
        value.personal_growth,
        value.charity,
        value.investment,
        value.environment_and_friends,
        value.health_and_sports,
        value.business_and_career
      );

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
      console.log(oneYear);

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
  console.log(data.health_and_sports);
  
  return (
    <BrowserRouter>
      <>
        <div className={sidebarStatusTrue ? "goalsOpened" : "goals"}>
          <div className="goalsSections">
            <NavLink activeClassName="totalTimeSpansSelected" to="/goalsTime">
              <div>Время</div>
            </NavLink>
            <NavLink
              activeClassName="totalTimeSpansSelected"
              to="/goalsBalance"
            >
              <div>Баланс</div>
            </NavLink>
          </div>          
          <Switch>
            <Route exact path="/goalsTime">
              <div className="goalsCategories">
                <div className="goalsCategory">
                  <div className="goalsCategoryTitle">2 месяца</div>
                  {twoMonth.map((item, i) => {
                    console.log(item);
                    console.log(item.sphere);
                    const classes = []
                    const species = []
                    if (item.sphere === 'charity') {
                      classes.push('giveaway')
                      species.push('sweetheart')
                    } if (item.sphere === 'brightness_of_life') {
                      classes.push('light')
                      species.push('brightness')
                    } if (item.sphere === 'investment') {
                      classes.push('corporate')
                      species.push('investment')
                    } if (item.sphere === 'environment_and_friends') {
                    classes.push('surroundings')
                    species.push('environment')
                    } if (item.sphere === 'family_and_love') {
                      classes.push('attachment')
                      species.push('love')
                    } if (item.sphere === 'charity') {
                      classes.push('benevolence')
                      species.push('sweetheart')
                    } if (item.sphere === 'business_and_career') {
                      classes.push('money')
                      species.push('career')
                    } if (item.sphere === 'health_and_sport') {
                      classes.push('wellness')
                      species.push('sport')
                    }
                    
                      
                    
                    
                    
                   
                  return (
                    <>           
                    {console.log(classes)}         
                    {console.log(species)}
                            
                      <div className={species.join(" ")}>{item.data}</div>
                      <div className={classes.join(" ")}><img src={Clock} alt="time" className="goalsCategoryImg"/>
                      <span className="goalsCategoryTime">{item.date.slice(8, 10) + "." + item.date.slice(5, 7)}</span>
                      </div>
                    </>
                  )})}
                </div>
                <div className="goalsCategory">
                  <div className="goalsCategoryTitle">6 месяца</div>
                  {sixMonth.map((item) => {
                    const classes = []
                    const species = []
                    if (item.sphere === 'charity') {
                      classes.push('giveaway')
                      species.push('sweetheart')
                    } if (item.sphere === 'brightness_of_life') {
                      classes.push('light')
                      species.push('brightness')
                    } if (item.sphere === 'investment') {
                      classes.push('corporate')
                      species.push('investment')
                    } if (item.sphere === 'environment_and_friends') {
                    classes.push('surroundings')
                    species.push('environment')
                    } if (item.sphere === 'family_and_love') {
                      classes.push('attachment')
                      species.push('love')
                    } if (item.sphere === 'charity') {
                      classes.push('benevolence')
                      species.push('sweetheart')
                    } if (item.sphere === 'business_and_career') {
                      classes.push('money')
                      species.push('career')
                    } if (item.sphere === 'health_and_sport') {
                      classes.push('wellness')
                      species.push('sport')
                    }
                    return (
                    <>
                    {console.log(sixMonth)}
                      <div className={species.join(" ")}>{item.data}</div>
                      <div className={classes.join(" ")}><img src={Clock} alt="time" className="goalsCategoryImg"/>
                      <span className="goalsCategoryTime">{item.date.slice(8, 10) + "." + item.date.slice(5, 7)}</span>
                      </div>
                    </>
                  )})}
                </div>
                <div className="goalsCategory">
                  <div className="goalsCategoryTitle">1 год</div>
                  {oneYear.map((item, i) => {
                    const classes = []
                    const species = []
                    if (item.sphere === 'charity') {
                      classes.push('giveaway')
                      species.push('sweetheart')
                    } if (item.sphere === 'brightness_of_life') {
                      classes.push('light')
                      species.push('brightness')
                    } if (item.sphere === 'investment') {
                      classes.push('corporate')
                      species.push('investment')
                    } if (item.sphere === 'environment_and_friends') {
                    classes.push('surroundings')
                    species.push('environment')
                    } if (item.sphere === 'family_and_love') {
                      classes.push('attachment')
                      species.push('love')
                    } if (item.sphere === 'charity') {
                      classes.push('benevolence')
                      species.push('sweetheart')
                    } if (item.sphere === 'business_and_career') {
                      classes.push('money')
                      species.push('career')
                    } if (item.sphere === 'health_and_sport') {
                      classes.push('wellness')
                      species.push('sport')
                    }
                    return (
                    <>
                      
                      <div className={species.join(" ")}>{item.data}</div>
                      <div className={classes.join(" ")}><img src={Clock} alt="time" className="goalsCategoryImg"/>
                      <span className="goalsCategoryTime">{item.date.slice(8, 10) + "." + item.date.slice(5, 7)}</span>
                      </div>
                    </>
                  )})}
                </div>
              </div>
            </Route>
            <Route exact path="/goalsBalance">
              <div className="goalsCategories">
                <div className="goalsCategory">
                  <div className="goalsCategoryTitle">Яркость жизни</div>

                  {brightnessOfLife.map((item) => (
                    <>
                      
                      <div className="goalsCategoryDataBrightness">
                        {item.data}
                      </div>
                      <div className="goalsCategoryDateBrightness">
                        <img
                          src={Clock}
                          alt="time"
                          className="goalsCategoryImg"
                        />
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
                <div className="goalsCategory">
                  <div className="goalsCategoryTitle">Семья и любовь</div>

                  {familyAndLove.map((item) => (
                    <>
                      <div className="goalsCategoryDataLove">{item.data}</div>
                      <div className="goalsCategoryDateLove">
                        <img
                          src={Clock}
                          alt="time"
                          className="goalsCategoryImg"
                        />
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
                <div className="goalsCategory">
                  <div className="goalsCategoryTitle">Окружение и друзья</div>

                  {environmentAndFriends.map((item) => (
                    <>
                      <div className="goalsCategoryDataEnvironment">
                        {item.data}
                      </div>
                      <div className="goalsCategoryDateEnvironment">
                        <img
                          src={Clock}
                          alt="time"
                          className="goalsCategoryImg"
                        />
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
                <div className="goalsCategory">
                  <div className="goalsCategoryTitle">Финансы и инвестиции</div>

                  {investment.map((item) => (
                    <>
                      <div className="goalsCategoryDataInvestment">
                        {item.data}
                      </div>
                      <div className="goalsCategoryDateInvestment">
                        <img
                          src={Clock}
                          alt="time"
                          className="goalsCategoryImg"
                        />
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
                <div className="goalsCategory">
                  <div className="goalsCategoryTitle">Личный рост</div>

                  {personalGrowth.map((item) => (
                    <>
                      <div className="goalsCategoryDataGrowth">{item.data}</div>
                      <div className="goalsCategoryDateGrowth">
                        <img
                          src={Clock}
                          alt="time"
                          className="goalsCategoryImg"
                        />
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
                <div className="goalsCategory">
                  <div className="goalsCategoryTitle">Бизнес и карьера</div>

                  {businessAndCareer.map((item) => (
                    <>
                      <div className="goalsCategoryDataCareer">{item.data}</div>
                      <div className="goalsCategoryDateCareer">
                        <img
                          src={Clock}
                          alt="time"
                          className="goalsCategoryImg"
                        />
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
                <div className="goalsCategory">
                  <div className="goalsCategoryTitle">Здоровье и спорт</div>

                  {healthAndSport.map((item) => (
                    <>
                      <div className="goalsCategoryDataSport">{item.data}</div>
                      <div className="goalsCategoryDateSport">
                        <img
                          src={Clock}
                          alt="time"
                          className="goalsCategoryImg"
                        />
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
                <div className="goalsCategory">
                  <div className="goalsCategoryTitle">Благотворительность</div>

                  {charity.map((item) => (
                    <>
                      <div className="goalsCategoryDataCharity">
                        {item.data}
                      </div>
                      <div className="goalsCategoryDateCharity">
                        <img
                          src={Clock}
                          alt="time"
                          className="goalsCategoryImg"
                        />
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
            </Route>
          </Switch>
        </div>
        <div className={sidebarStatusTrue ? 'goalsBalanceWheel' : 'goalsBalanceWheelOpened'}>
            <div className="goalsBalanceWheelTitle">
              Баланс целей
            </div>
            <div className="goalsBalanceWheelWheel">
              <img src={Wheel} alt="tyre" />
            </div>
        </div>

        {goalCreaterVisibility ? (
          <>
            <GoalCreater hideGoalCreater={hideGoalCreater} />
            <div className="cover" onClick={hideGoalCreater} />
          </>
        ) : null}
      </>
    </BrowserRouter>
  );
};
