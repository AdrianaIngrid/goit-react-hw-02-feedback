import React from "react";
import { Fragment } from "react";
import styles from "./Statistics.module.css";

function Statistics({ good, neutral, bad, total, positiveFeedbackPercentage}) {

    
    return (
      <Fragment>
        <p className={styles.paragraph}>Good: {good}</p>
        <p className={styles.paragraph}>Neutral: {neutral}</p>
        <p className={styles.paragraph}>Bad: {bad}</p>
        
          <p className={styles.paragraphTotal}>Total: {total}</p>
        
        <p className={styles.paragraphFeedback}>
          Positive feedback: {positiveFeedbackPercentage} %
        </p>
        <div className={styles.ring}>Thank you
          <span></span>
          
      </div>
      </Fragment>
    );
}
export default Statistics;
    
    
