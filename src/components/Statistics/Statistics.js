import React from "react";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, Percentage }) => {
  <>
    <ul class="statList">
      <li>Good:{good}</li>
      <li>Neutral:{neutral}</li>
      <li>Bad:{bad}</li>
      <li></li>
    </ul>
  </>;
};
export default Statistics;
