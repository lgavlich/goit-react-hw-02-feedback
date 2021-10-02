import React from "react";
import PropTypes from "prop-types";

const FeedbackOptions = ({ feedback, onGiveFeedback }) => {
  return (
    <button type="button" dataFeedback={feedback} onClick={onGiveFeedback}>
      {feedback}
    </button>
  );
};

const LeaveFeeddack = ({ options, onGiveFeedback }) => {
  return (
    <div>
      {options.map((option) => (
        <FeedbackOptions
          feedback={option}
          onGiveFeedback={onGiveFeedback}
          key={option.toString()}
        />
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onGiveFeedback: PropTypes.func.isRequired,
};

export default LeaveFeeddack;
