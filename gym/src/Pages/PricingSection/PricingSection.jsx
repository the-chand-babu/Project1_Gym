import React from "react";
import styles from "./PricingSection.module.css"
// import {CgArrowLongRight} from "react-icons/cg";

const showAlert = () =>{
  alert("Thankyou for choosing us");
}
 
function PricingSection() {
  return (
    <>
      <div className={styles.wholePage}>
        <div className={styles.container}>
          <div className={styles.monthlyPlans} id="monthly">
            <div className={styles.header}>
              <h3>Months to Month</h3>
              <span>
                <h1>$90</h1>
              </span>
              <h3>/month</h3>
            </div>
            <div className={styles.featuresPlans} id="features">
              <ul className={styles.greenarrowbullet}>
                <li>$99 joining fee</li>
                <br></br>
                <li>no contract</li>
                <br></br>
                <li>free gym access</li>
                <br></br>
                <li>1 group class included</li>
                <br></br>
                <li>24 hour accces</li>
                <br></br>
              </ul>
            </div>
            <div>
            <button className={styles.btn}>Get Started</button>
            </div>
          </div>

          <div className={styles.dailyPlans} id="daily">
            <div className={styles.header}>
              <h3>day pass</h3>
        
                <h1>$20</h1>
            
              <h4>/pass</h4>
            </div>
            <div className={styles.featuresPlans} id="features">
              <ul className={styles.greenarrowbullet}>
                <li>1 day pass</li>
                <br></br>
                <li>free gym access</li>
                <br></br>
                <li>24 hour accces</li>
              </ul>
            </div>
            <button className={styles.btn} onClick={showAlert}>Get Started</button>
          </div>

          <div className={styles.heading} id="heading">
            <h4>
              <u>Membership</u>
            </h4>
            <h2>From punch pass to monthly or annual</h2>
            <p>
              At gym base ,we offer a wide range of membership with options to
              suit every budget. Everything from One Day Pass, Punch Pass to
              moonthly pass or annual prepaid memverships. What's more, we won't
              tie you in a long term conatract, giving you a greater flexibilty.{" "}
            </p>

            <h2>Each plan included</h2>
            <ul>
              <li>The best equipments global brands </li>
              <br></br>
              <li>The gym is open 24hours a day a week</li>
              <br></br>
              <li>Two safe payment method</li>
              <br></br>
              <li>Group fitness classes in the price of subscription </li>
              <br></br>
              <li>no long-term contract,period</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default PricingSection;