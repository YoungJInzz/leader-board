import React, { Component } from "react";
import logo from "../../logo.png";
import "./App.css";

import Table from "../Table/Table";
import SideDescription from "../SideDescription/SideDescription";
import TotalWinner from "../TotalWinner/TotalWinner";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          <TotalWinner />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-10">
              <div className="row">
                <div className="col-lg-12">
                  <div className="main-header">Leaderboard</div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="overflow-table">
                    <Table />
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <SideDescription />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
