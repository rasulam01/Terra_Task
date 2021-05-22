import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { TotalHeader } from "./Header/TotalHeader";
import { TotalSidebarClosed } from "./Sidebar/SidebarClosed";
import { TotalSidebarOpened } from "./Sidebar/SidebarOpened";
import { MainPartWeek } from "./MainPart/MainPartWeek/MainPartWeek";
import { MainPartMonth } from "./MainPart/MainPartMonth/MainPartMonth";
import { TheFormCreater } from "./TheFormCreater/TheFormCreater";

function App() {
  const [array, setArray] = useState([]);
  const [cloneArray, setCloneArray] = useState([...array]);
  const [sidebarStatusTrue, setSidebarStatus] = useState(true);
  const [createFormVisibility, setCreateFormVisibility] = useState(false);

  const showCreateForm = () => {
    setCreateFormVisibility(true);
  };
  const hideCreateForm = () => {
    setCreateFormVisibility(false);
  };

  const showSidebar = () => {
    setSidebarStatus(!sidebarStatusTrue);
  };

  const deletePlan = async (pos) => {
    if (
      window.confirm(
        `Do you wish to delete the plan ${cloneArray.description}?`
      )
    ) {
      const clonedCloneArray = [...cloneArray];
      clonedCloneArray.splice(pos, 1);
      await axios.delete(
        `https://60a7a2c88532520017ae4a3b.mockapi.io/weekplan/${pos}`
      );
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <TotalHeader sidebarStatusTrue={sidebarStatusTrue} />
        </header>
        <main>
          {sidebarStatusTrue ? (
            <TotalSidebarClosed logo="S" showSidebar={showSidebar} />
          ) : (
            <TotalSidebarOpened logo="Samo" showSidebar={showSidebar} />
          )}

          {createFormVisibility ? (
            <>
              <TheFormCreater
                hideCreateForm={hideCreateForm}
                cloneArray={cloneArray}
                setCloneArray={setCloneArray}
                deletePlan={() => deletePlan()}
              />
              <div className="cover" onClick={hideCreateForm} />
            </>
          ) : null}

          <Switch>
            <Route exact path="/week">
              <MainPartWeek
                showCreateForm={showCreateForm}
                hideCreateForm={hideCreateForm}
              />
            </Route>
            <Route exact path="/month">
              <MainPartMonth
                showCreateForm={showCreateForm}
                hideCreateForm={hideCreateForm}
              />
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
