import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../../components/Header/Header.component";
import { Routing } from "../../Routing";
import StateManager from "../../StateManager";
import "./App.scss";

export function App() {
  return (
    <StateManager>
      <BrowserRouter>
        <div className="app">
          <div className="app--container">
            <Header />
            <Routing />
          </div>
        </div>
      </BrowserRouter>
    </StateManager>
  );
}
