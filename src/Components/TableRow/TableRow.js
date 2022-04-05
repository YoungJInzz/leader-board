import React from "react";
import PropTypes from "prop-types";

import "./TableRow.css";

const TableRow = (props) => {
  const { point, username } = props.rowData;

  return (
    <tr>
      <td>{props.id}</td>
      <td align="left">
        <span className="camper-name">{username}</span>
      </td>
      <td>{point}</td>
    </tr>
  );
};

TableRow.propTypes = {
  id: PropTypes.number,
  rowData: PropTypes.object,
};

export default TableRow;
