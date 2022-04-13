import React, { Component } from "react";

import TableRow from "../TableRow/TableRow";
import ToSortHeader from "../ToSortHeader/ToSortHeader";
import "./TotalWinner.css";

const sortByMapping = [{ type: "allTime", heading: "time" }];

class TotalWinner extends Component {
  constructor() {
    super();

    this.state = {
      winnerNumber: undefined,
    };
    this.getData = this.getData.bind(this);
  }
  async getData() {
    const result = await fetch(
      "https://docs.google.com/spreadsheets/d/17JQhV5VVbawvPKZgrFozz2gs7robPFZlN3eGk3TAUw8/gviz/tq?tq=select%20J%20where%20J%20is%20not%20null%20limit%201"
    );
    const data = await result.text();
    console.log("데이터", data);
    const rows = JSON.parse(data.slice(47, -2)).table.rows;
    console.log("로우", rows[0].c[0].v);

    this.setState({
      winnerNumber: rows[0].c[0].v,
    });
  }
  componentDidMount() {
    this.getData();
    this.interval = setInterval(this.getData, 15000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div className="totalWinners">{`현재까지 AI를 이긴 사람은?  ${
        this.state.winnerNumber ? this.state.winnerNumber : ""
      } 명`}</div>
    );
  }
}

export default TotalWinner;
