import "./Goals.css";
import { NavLink, BrowserRouter, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import AddSign from "../../Assets/AddSign.png";
import axios from "axios";
import Clock from "../../Assets/Clock.png";
import Wheel from "../../Assets/BalanceWheel.png";
import { GoalCreater } from "../GoalCreater/GoalCreater";
import { GoalReader } from "../GoalReader/GoalReader";

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
  const [key, setKey] = useState("");
  const [readerVisibility, setReaderVisibility] = useState(false);
  const [index, setIndex] = useState("");
  const [identify, setIdentify] = useState("");
  const [adderValue, setAdderValue] = useState("");
  const [sphereValue, setSphereValue] = useState("")
  // const [info, setInfo] = useState(
  //   familyAndLove,
  //   personalGrowth,
  //   charity,
  //   investment,
  //   environmentAndFriends,
  //   brightnessOfLife,
  //   healthAndSport,
  //   businessAndCareer
  // );

  const API_URL = "http://localhost:8000";
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwIjoxNjI1ODI3MDM2fQ.Flosc9Ev9IRGQXNR-kp-O1N5qsWPrIoSJL5SQ5n_cRg";
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
    console.log(result);
    setData(result);
    return await res.data;
  };

  useEffect(() => {
    getData(`goals/`).then((value) => {
      setFamilyAndLove(value.family_and_love);
      setPersonalGrowth(value.personal_growth);
      setCharity(value.charity);
      setInvestment(value.investment);
      setEnvironmentAndFriends(value.environment_and_friends);
      setBrightnessOfLife(value.brightness_of_life);
      setHealthAndSport(value.health_and_sports);
      setBusinessAndCareer(value.business_and_career);
      setTwoMonth(value.two_mounth);
      setSixMonth(value.six_mounth);
      setOneYear(value.one_years);
      // setInfo(
      //   value.brightness_of_life,
      //   value.family_and_love,
      //   value.personal_growth,
      //   value.charity,
      //   value.investment,
      //   value.environment_and_friends,
      //   value.health_and_sports,
      //   value.business_and_career
      // );

      // console.log(value.charity);

      // console.log(
      //   info.map((item) => {
      //     <div>{item}</div>;
      //   })
      // );
    });
  }, []);

  const showReader = () => {
    setReaderVisibility(true);
  };
  const hideReader = () => {
    setReaderVisibility(false);
  };
  const getAdderValue = (e) => {
    setAdderValue(e.target.getAttribute("value"));
    console.log(e.target.getAttribute("value"));
    console.log(adderValue);
    showGoalCreater();
  };

  return (
    <BrowserRouter>
      <>
        <div className="lol">
          <NavLink activeClassName="totalTimeSpansSelected" to="/goalsTime">
            <div className="goalsSection">Время</div>
          </NavLink>
          <NavLink activeClassName="totalTimeSpansSelected" to="/goalsBalance">
            <div className="goalsSection">Баланс</div>
          </NavLink>
        </div>
        <div className={sidebarStatusTrue ? "goalsOpened" : "goals"}>
          <Switch>
            <Route exact path="/goalsTime">
              <div className="goalsCategories">
                <div className="goalsCategory">
                  <div className="goalsCategoryTitle">2 месяца</div>
                  {twoMonth.map((item, i) => {
                    let getId = () => {
                      setKey(twoMonth);
                      setIndex(i);
                      setIdentify(item.id);
                      setSphereValue(item.sphere)
                      console.log(item.id);
                      console.log(index);
                      console.log(item.data);
                      console.log(item.sphere);
                      showReader();
                    };

                    const classes = [];
                    const species = [];
                    if (item.sphere === "charity") {
                      classes.push("giveaway");
                      species.push("sweetheart");
                    }
                    if (item.sphere === "brightness_of_life") {
                      classes.push("light");
                      species.push("brightness");
                    }
                    if (item.sphere === "investment") {
                      classes.push("corporate");
                      species.push("investment");
                    }
                    if (item.sphere === "environment_and_friends") {
                      classes.push("surroundings");
                      species.push("environment");
                    }
                    if (item.sphere === "family_and_love") {
                      classes.push("attachment");
                      species.push("love");
                    }
                    if (item.sphere === "personal_growth") {
                      classes.push("development");
                      species.push("growth");
                    }
                    if (item.sphere === "business_and_career") {
                      classes.push("money");
                      species.push("career");
                    }
                    if (item.sphere === "health_and_sports") {
                      classes.push("wellness");
                      species.push("sport");
                    }

                    return (
                      <>
                        <div className={species.join(" ")} onClick={getId}>
                          {item.data}
                        </div>
                        <div className={classes.join(" ")} onClick={getId}>
                          <img
                            src={Clock}
                            alt="time"
                            className="goalsCategoryImg"
                          />
                          <span className="goalsCategoryTime">
                            {item.date.slice(8, 10) +
                              "." +
                              item.date.slice(5, 7)}
                          </span>
                        </div>
                      </>
                    );
                  })}
                  <div>
                    <img src={AddSign} alt="Add" onClick={showGoalCreater} />
                  </div>
                </div>

                <div className="goalsCategory">
                  <div className="goalsCategoryTitle">6 месяца</div>
                  {sixMonth.map((item, i) => {
                    let getId = () => {
                      setKey(sixMonth);
                      setIndex(i);
                      setIdentify(item.id);
                      setSphereValue(item.sphere)
                      console.log(index);
                      console.log(item.id);
                      showReader();
                    };
                    const classes = [];
                    const species = [];
                    if (item.sphere === "charity") {
                      classes.push("giveaway");
                      species.push("sweetheart");
                    }
                    if (item.sphere === "brightness_of_life") {
                      classes.push("light");
                      species.push("brightness");
                    }
                    if (item.sphere === "investment") {
                      classes.push("corporate");
                      species.push("investment");
                    }
                    if (item.sphere === "environment_and_friends") {
                      classes.push("surroundings");
                      species.push("environment");
                    }
                    if (item.sphere === "family_and_love") {
                      classes.push("attachment");
                      species.push("love");
                    }
                    if (item.sphere === "personal_growth") {
                      classes.push("development");
                      species.push("growth");
                    }
                    if (item.sphere === "business_and_career") {
                      classes.push("money");
                      species.push("career");
                    }
                    if (item.sphere === "health_and_sports") {
                      classes.push("wellness");
                      species.push("sport");
                    }
                    return (
                      <>
                        <div className={species.join(" ")} onClick={getId}>
                          {item.data}
                        </div>
                        <div className={classes.join(" ")} onClick={getId}>
                          <img
                            src={Clock}
                            alt="time"
                            className="goalsCategoryImg"
                          />
                          <span className="goalsCategoryTime">
                            {item.date.slice(8, 10) +
                              "." +
                              item.date.slice(5, 7)}
                          </span>
                        </div>
                      </>
                    );
                  })}
                  <div>
                    <img src={AddSign} alt="Add" onClick={showGoalCreater} />
                  </div>
                </div>
                <div className="goalsCategory">
                  <div className="goalsCategoryTitle">1 год</div>
                  {oneYear.map((item, i) => {
                    let getId = () => {
                      setKey(oneYear);
                      setIndex(i);
                      setIdentify(item.id);
                      setSphereValue(item.sphere)
                      console.log(index);
                      console.log(item.id);
                      showReader();
                    };
                    const classes = [];
                    const species = [];
                    if (item.sphere === "charity") {
                      classes.push("giveaway");
                      species.push("sweetheart");
                    }
                    if (item.sphere === "brightness_of_life") {
                      classes.push("light");
                      species.push("brightness");
                    }
                    if (item.sphere === "investment") {
                      classes.push("corporate");
                      species.push("investment");
                    }
                    if (item.sphere === "environment_and_friends") {
                      classes.push("surroundings");
                      species.push("environment");
                    }
                    if (item.sphere === "family_and_love") {
                      classes.push("attachment");
                      species.push("love");
                    }
                    if (item.sphere === "personal_growth") {
                      classes.push("development");
                      species.push("growth");
                    }
                    if (item.sphere === "business_and_career") {
                      classes.push("money");
                      species.push("career");
                    }
                    if (item.sphere === "health_and_sports") {
                      classes.push("wellness");
                      species.push("sport");
                    }
                    return (
                      <>
                        <div className={species.join(" ")} onClick={getId}>
                          {item.data}
                        </div>
                        <div className={classes.join(" ")} onClick={getId}>
                          <img
                            src={Clock}
                            alt="time"
                            className="goalsCategoryImg"
                          />
                          <span className="goalsCategoryTime">
                            {item.date.slice(8, 10) +
                              "." +
                              item.date.slice(5, 7)}
                          </span>
                        </div>
                      </>
                    );
                  })}
                  <div>
                    <img src={AddSign} alt="Add" onClick={showGoalCreater} />
                  </div>
                </div>
              </div>
            </Route>
            <Route exact path="/goalsBalance">
              <div className="goalsCategories">
                <div className="goalsCategory">
                  <div className="goalsCategoryTitle">Яркость жизни</div>

                  {brightnessOfLife.map((item, i) => {
                    let getId = () => {
                      setKey(brightnessOfLife);
                      setIndex(i);
                      setIdentify(item.id);
                      setSphereValue(item.sphere)
                      console.log(item.id);
                      console.log(index);
                      showReader();
                    };
                    return (
                      <>
                        <div
                          className="goalsCategoryDataBrightness"
                          onClick={getId}
                        >
                          {item.data}
                        </div>
                        <div
                          className="goalsCategoryDateBrightness"
                          onClick={getId}
                        >
                          <img
                            src={Clock}
                            alt="time"
                            className="goalsCategoryImg"
                          />
                          <span className="goalsCategoryTime">
                            {item.date.slice(8, 10) +
                              "." +
                              item.date.slice(5, 7)}
                          </span>
                        </div>
                      </>
                    );
                  })}

                  <div>
                    <img
                      src={AddSign}
                      alt="Add"
                      onClick={getAdderValue}
                      value="brightness_of_life"
                    />
                  </div>
                </div>
                <div className="goalsCategory">
                  <div className="goalsCategoryTitle">Семья и любовь</div>

                  {familyAndLove.map((item, i) => {
                    let getId = () => {
                      setKey(familyAndLove);
                      setIndex(i);
                      setIdentify(item.id);
                      setSphereValue(item.sphere)
                      console.log(item.id);
                      console.log(index);
                      showReader();
                    };
                    return (
                      <>
                        <div className="goalsCategoryDataLove" onClick={getId}>
                          {item.data}
                        </div>
                        <div className="goalsCategoryDateLove" onClick={getId}>
                          <img
                            src={Clock}
                            alt="time"
                            className="goalsCategoryImg"
                          />
                          <span className="goalsCategoryTime">
                            {item.date.slice(8, 10) +
                              "." +
                              item.date.slice(5, 7)}
                          </span>
                        </div>
                      </>
                    );
                  })}

                  <div>
                    <img
                      src={AddSign}
                      alt="Add"
                      onClick={getAdderValue}
                      value="family_and_love"
                    />
                  </div>
                </div>
                <div className="goalsCategory">
                  <div className="goalsCategoryTitle">Окружение и друзья</div>

                  {environmentAndFriends.map((item, i) => {
                    let getId = () => {
                      setKey(environmentAndFriends);
                      setIndex(i);
                      setIdentify(item.id);
                      setSphereValue(item.sphere)
                      console.log(item.id);
                      console.log(index);
                      showReader();
                    };
                    return (
                      <>
                        <div
                          className="goalsCategoryDataEnvironment"
                          onClick={getId}
                        >
                          {item.data}
                        </div>
                        <div
                          className="goalsCategoryDateEnvironment"
                          onClick={getId}
                        >
                          <img
                            src={Clock}
                            alt="time"
                            className="goalsCategoryImg"
                          />
                          <span className="goalsCategoryTime">
                            {item.date.slice(8, 10) +
                              "." +
                              item.date.slice(5, 7)}
                          </span>
                        </div>
                      </>
                    );
                  })}

                  <div>
                    <img
                      src={AddSign}
                      alt="Add"
                      onClick={getAdderValue}
                      value="environment_and_friends"
                    />
                  </div>
                </div>
                <div className="goalsCategory">
                  <div className="goalsCategoryTitle">Финансы и инвестиции</div>

                  {investment.map((item, i) => {
                    let getId = () => {
                      setKey(investment);
                      setIndex(i);
                      setIdentify(item.id);
                      setSphereValue(item.sphere)
                      console.log(item.id);
                      console.log(index);
                      showReader();
                    };
                    return (
                      <>
                        <div
                          className="goalsCategoryDataInvestment"
                          onClick={getId}
                        >
                          {item.data}
                        </div>
                        <div
                          className="goalsCategoryDateInvestment"
                          onClick={getId}
                        >
                          <img
                            src={Clock}
                            alt="time"
                            className="goalsCategoryImg"
                          />
                          <span className="goalsCategoryTime">
                            {item.date.slice(8, 10) +
                              "." +
                              item.date.slice(5, 7)}
                          </span>
                        </div>
                      </>
                    );
                  })}

                  <div>
                    <img
                      src={AddSign}
                      alt="Add"
                      onClick={getAdderValue}
                      value="investment"
                    />
                  </div>
                </div>
                <div className="goalsCategory">
                  <div className="goalsCategoryTitle">Личный рост</div>

                  {personalGrowth.map((item, i) => {
                    let getId = () => {
                      setKey(personalGrowth);
                      setIndex(i);
                      setIdentify(item.id);
                      setSphereValue(item.sphere)
                      console.log(item.id);
                      console.log(index);
                      showReader();
                    };
                    return (
                      <>
                        <div
                          className="goalsCategoryDataGrowth"
                          onClick={getId}
                        >
                          {item.data}
                        </div>
                        <div
                          className="goalsCategoryDateGrowth"
                          onClick={getId}
                        >
                          <img
                            src={Clock}
                            alt="time"
                            className="goalsCategoryImg"
                          />
                          <span className="goalsCategoryTime">
                            {item.date.slice(8, 10) +
                              "." +
                              item.date.slice(5, 7)}
                          </span>
                        </div>
                      </>
                    );
                  })}

                  <div>
                    <img
                      src={AddSign}
                      alt="Add"
                      onClick={getAdderValue}
                      value="personal_growth"
                    />
                  </div>
                </div>
                <div className="goalsCategory">
                  <div className="goalsCategoryTitle">Бизнес и карьера</div>

                  {businessAndCareer.map((item, i) => {
                    let getId = () => {
                      setKey(businessAndCareer);
                      setIndex(i);
                      setIdentify(item.id);
                      setSphereValue(item.sphere)
                      console.log(item.id);
                      console.log(index);
                      showReader();
                    };
                    return (
                      <>
                        <div
                          className="goalsCategoryDataCareer"
                          onClick={getId}
                        >
                          {item.data}
                        </div>
                        <div
                          className="goalsCategoryDateCareer"
                          onClick={getId}
                        >
                          <img
                            src={Clock}
                            alt="time"
                            className="goalsCategoryImg"
                          />
                          <span className="goalsCategoryTime">
                            {item.date.slice(8, 10) +
                              "." +
                              item.date.slice(5, 7)}
                          </span>
                        </div>
                      </>
                    );
                  })}

                  <div>
                    <img
                      src={AddSign}
                      alt="Add"
                      onClick={getAdderValue}
                      value="business_and_career"
                    />
                  </div>
                </div>
                <div className="goalsCategory">
                  <div className="goalsCategoryTitle">Здоровье и спорт</div>

                  {healthAndSport.map((item, i) => {
                    let getId = () => {
                      setKey(healthAndSport);
                      setIndex(i);
                      setIdentify(item.id);
                      setSphereValue(item.sphere)
                      console.log(item.id);
                      console.log(index);
                      showReader();
                    };
                    return (
                      <>
                        <div className="goalsCategoryDataSport" onClick={getId}>
                          {item.data}
                        </div>
                        <div className="goalsCategoryDateSport" onClick={getId}>
                          <img
                            src={Clock}
                            alt="time"
                            className="goalsCategoryImg"
                          />
                          <span className="goalsCategoryTime">
                            {item.date.slice(8, 10) +
                              "." +
                              item.date.slice(5, 7)}
                          </span>
                        </div>
                      </>
                    );
                  })}

                  <div>
                    <img
                      src={AddSign}
                      alt="Add"
                      onClick={getAdderValue}
                      value="health_and_sports"
                    />
                  </div>
                </div>
                <div className="goalsCategory">
                  <div className="goalsCategoryTitle">Благотворительность</div>

                  {charity.map((item, i) => {
                    let getId = () => {
                      setKey(charity);
                      setIndex(i);
                      setIdentify(item.id);
                      setSphereValue(item.sphere)
                      console.log(item.id);
                      console.log(index);
                      showReader();
                    };
                    return (
                      <>
                        <div
                          className="goalsCategoryDataCharity"
                          onClick={getId}
                        >
                          {item.data}
                        </div>
                        <div
                          className="goalsCategoryDateCharity"
                          onClick={getId}
                        >
                          <img
                            src={Clock}
                            alt="time"
                            className="goalsCategoryImg"
                          />
                          <span className="goalsCategoryTime">
                            {item.date.slice(8, 10) +
                              "." +
                              item.date.slice(5, 7)}
                          </span>
                        </div>
                      </>
                    );
                  })}

                  <div>
                    <img
                      src={AddSign}
                      alt="Add"
                      onClick={getAdderValue}
                      value="charity"
                    />
                  </div>
                </div>
              </div>
            </Route>
          </Switch>
        </div>
        <div
          className={
            sidebarStatusTrue ? "goalsBalanceWheel" : "goalsBalanceWheelOpened"
          }
        >
          <div className="goalsBalanceWheelTitle">Баланс целей</div>
          <div className="goalsBalanceWheelWheel">
            <img src={Wheel} alt="tyre" />
          </div>
        </div>
        <div
          className={sidebarStatusTrue ? "goalsMission" : "goalsMissionOpened"}
        >
          <div className="goalsMissionTitle">nnn</div>
          <div className="goalsMissionDescription">mmm</div>
        </div>
        <div
          className={
            sidebarStatusTrue
              ? "goalsGoalsAchieved"
              : "goalsGoalsAchievedOpened"
          }
        >
          <div className="goalsGoalsAchievedTitle">Целей достигнуто</div>
        </div>
        <div
          className={
            sidebarStatusTrue ? "goalsGoalsInFocus" : "goalsGoalsInFocusOpened"
          }
        >
          <div className="goalsGoalsInFocusTitle">Цели в фокусе</div>
        </div>
        <Route exact path="/goalsTime">
          {goalCreaterVisibility ? (
            <>
              <GoalCreater hideGoalCreater={hideGoalCreater} />
              <div className="cover" onClick={hideGoalCreater} />
            </>
          ) : null}
        </Route>
        <Route exact path="/goalsBalance">
          {goalCreaterVisibility ? (
            <>
              <GoalCreater
                hideGoalCreater={hideGoalCreater}
                adderValue={adderValue}
              />
              <div className="cover" onClick={hideGoalCreater} />
            </>
          ) : null}
        </Route>
        {readerVisibility ? (
          <>
            <GoalReader
              id={key[index]}
              identify={identify}
              hideReader={hideReader}
              sphere={sphereValue}
            />
            <div className="cover" onClick={hideReader} />
          </>
        ) : null}
      </>
    </BrowserRouter>
  );
};
