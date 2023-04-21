import React from "react";
import Styles from "./About.module.css";

export default function About() {
  return (
    <div id="about" className={Styles.Main}>
      <div className={Styles.AboutUs}>
        <div className={Styles.Video1}>
          <iframe
            width="360"
            height="515"
            src="https://www.youtube.com/embed/X_9VoqR5ojM"
            title="YouTube video player"
            // frameborder="0"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
          ></iframe>
        </div>
        <div className={Styles.ContainerHeading}>
          <h1 className={Styles.aboutHeading}>About Us</h1>
          <p>
            Through our 7-day programme we offer you some useful life questions
            to think about. We also offer you some answers on these questions
            but we encourage you to learn more about it yourself. You can read
            it all at once but we advise you to read and think about your life
            for the next 7 days. It may become the most valuable week of your
            life! It can be very valuable in your life. So take some time and
            invest one week in your life and future!
          </p>
          <button className={Styles.button}>Learn More</button>
        </div>
      </div>
   
        <div className={Styles.AboutUs}>
          <div>
            <h1 className={Styles.aboutHeading}>Why Choose Us ?</h1>
            <ul className={Styles.listContainer}>
              <li>
                <strong className={Styles.strong}>
                  Consultation with expert
                </strong>
                <p>
                  Plus Fitness franchisee Jacob Awad first started his journey
                  with the brand in 2013 after purchasing Plus Fitness Seven
                  Hills from a previous owner. In 2017 Jacob then went on to
                  purchase his second location, Plus Fitness Northmead.
                </p>
              </li>
              <li>
                <strong className={Styles.strong}> workout faculitis</strong>
                <p>
                  Plus Fitness franchisee Jacob Awad first started his journey
                  with the brand in 2013 after purchasing Plus Fitness Seven
                  Hills from a previous owner. In 2017 Jacob then went on to
                  purchase his second location, Plus Fitness Northmead.
                </p>
              </li>
            </ul>
          </div>

          <div className={Styles.Video2}>
            <iframe
              width="360"
              height="515"
              src="https://www.youtube.com/embed/Y5RtQ4cawVk"
              title="YouTube video player"
              // frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}
            ></iframe>
          </div>
        </div>
      </div>
    
    
  );
}