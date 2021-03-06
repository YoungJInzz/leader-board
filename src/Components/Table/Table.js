import React, { Component } from "react";

import TableRow from "../TableRow/TableRow";
import ToSortHeader from "../ToSortHeader/ToSortHeader";
import "./Table.css";

const sortByMapping = [{ type: "allTime", heading: "time" }];

class Table extends Component {
  constructor() {
    super();

    this.state = {
      defaultData: [],
      first: [],
      second: [],
      third: [],
      recentData: [],
      allTimeData: [],
      recentDataDesc: true,
      allTimeDataDesc: false,
    };
    this.getData = this.getData.bind(this);
  }
  async getData() {
    const result = await fetch(
      "https://docs.google.com/spreadsheets/d/17JQhV5VVbawvPKZgrFozz2gs7robPFZlN3eGk3TAUw8/gviz/tq?tq=select%20B%2CG%20where%20G%20is%20not%20null%20and%20B%20is%20not%20null%20order%20by%20G%20asc%20limit%2010"
    );
    const data = await result.text();

    const rows = JSON.parse(data.slice(47, -2)).table.rows;
    const parsingRows = rows.map((row) => {
      return { username: row.c[0].v, point: row.c[1].v };
    });
    this.setState({
      first: parsingRows.slice(0, 2),
      second: parsingRows.slice(2, 5),
      third: parsingRows.slice(5, 10),
    });
    this.setState({ defaultData: parsingRows });
  }
  componentDidMount() {
    this.getData();
    this.interval = setInterval(this.getData, 15000);
  }
  componentWillUnmount() {
    // Clear the interval right before component unmount
    clearInterval(this.interval);
  }
  render() {
    const rows = this.state.defaultData.map((rowData, i) => {
      return <TableRow key={i} id={i + 1} rowData={rowData} />;
    });

    const sorters = sortByMapping.map((toSortBy, i) => {
      return (
        <ToSortHeader
          key={i}
          sortBy={toSortBy.type}
          heading={toSortBy.heading}
          onClick={this.handleSort}
        />
      );
    });

    return (
      <table>
        <tbody>
          <tr>
            <th scope="col">#Rank</th>
            <th scope="col">Username</th>
            {sorters}
          </tr>
          {rows}
        </tbody>
      </table>
    );
  }
}

export default Table;
