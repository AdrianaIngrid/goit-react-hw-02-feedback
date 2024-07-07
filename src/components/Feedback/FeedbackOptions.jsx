import React from "react";
import styles from './FeedbackOptions.module.css'
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <div className = {styles.btnContainer}>
        {options.map(option => (
            <button className={styles.buttons}
              key={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        ))}
      </div>
    );
};
export default FeedbackOptions;