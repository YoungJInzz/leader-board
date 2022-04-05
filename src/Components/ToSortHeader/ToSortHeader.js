import React from "react";
import PropTypes from "prop-types";

const ToSortHeader = (props) => {
  return <th scope="col">{props.heading}</th>;
};

ToSortHeader.propTypes = {
  onClick: PropTypes.func.isRequired,
  sortBy: PropTypes.string,
  header: PropTypes.string,
};

export default ToSortHeader;
