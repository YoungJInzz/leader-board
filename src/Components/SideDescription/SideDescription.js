import React, { Component } from "react";

import "./SideDescription.css";

class SideDescription extends Component {
  render() {
    return (
      <div className="sideWrapper">
        <ul>
          <li>
            <div className="rowBox">
              <div className="firstbox"></div>
              1등
            </div>
            <div className="smallDescription">(5만원 스벅 기프티콘)</div>
          </li>
          <li>
            <div className="rowBox">
              <div className="secondbox"></div>
              2등
            </div>
            <div className="smallDescription">(3만원 스벅 기프티콘)</div>
          </li>
          <li>
            <div className="rowBox">
              <div className="thirdbox"></div>
              3등
            </div>
            <div className="smallDescription">(1만원 스벅 기프티콘)</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideDescription;
