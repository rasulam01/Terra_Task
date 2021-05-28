import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { TotalHeader } from "./Header/TotalHeader";
import { TotalSidebarClosed } from "./Sidebar/SidebarClosed";
import { TotalSidebarOpened } from "./Sidebar/SidebarOpened";
import { MainPartWeek } from "./MainPart/MainPartWeek/MainPartWeek";
import { MainPartMonth } from "./MainPart/MainPartMonth/MainPartMonth";
import { TheFormCreater } from "./TheFormCreater/TheFormCreater";

function App() {
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
              <TheFormCreater hideCreateForm={hideCreateForm} />
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
