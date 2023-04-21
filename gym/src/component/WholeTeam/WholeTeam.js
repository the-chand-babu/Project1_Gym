import React from 'react';
import Trainer from './Trainer';
import styles from './WholeTeam.module.css'
import { useNavigate } from 'react-router-dom';

const data = [
  {
    title: 'Jordan Musk',
    description: "Fitness Coach",
    image: 'https://media.istockphoto.com/id/1369509413/photo/shot-of-a-handsome-young-man-taking-a-break-during-his-workout.jpg?b=1&s=170667a&w=0&k=20&c=MC2um7AEeVfi6Omt4i4ygVzO42upQt4jvI32tHgt0OE=',
  },
  {
    title: "Evia Freg",
    description: 'Yoga coach',
    image: 'https://www.arhantayoga.org/wp-content/uploads/2023/04/50-hour-Yin-Yoga-Teacher-Training.jpg',
  },
  {
    title: "Mark Anthony",
    description: 'Crossfit Coach',
    image: 'https://images.squarespace-cdn.com/content/v1/56e029a8a3360cb7acc01a85/1559597683736-X5P01AERY92IBMVIRFEA/OwnerCoachBenTyler.jpg?format=1000w',
  },
  {
    title: "Rini Dichard",
    description: 'Zumba Coach',
    image: 'https://img.freepik.com/premium-photo/fitness-sport-dance-lifestyle-concept-group-smiling-people-with-coach-dancing-zumba-gym-studio_380164-95204.jpg?w=1060',
  },
  {
    title: 'Jorg Kelvin',
    description: 'Aerobic',
    image: 'https://img.freepik.com/premium-photo/smiling-slim-woman-pink-tracksuit-looks-aside-copy-space-poses-with-rolled-mat-does-yoga-pilates-fitness-isolated-blue-background-advertisement-concepts_750854-1071.jpg?w=1060',
  },
  {
    title: 'Henrry Duike',
    description: 'Bodybuilding',
    image: 'https://img.freepik.com/free-photo/strong-man-without-t-shirt_158538-8390.jpg?w=1060&t=st=1681950065~exp=1681950665~hmac=6f29b029eda45cd576342d02652ba50e51c6dbb20f21559d5a634e42b3e7d9db',
  },
  {
    title: 'Zinzo Relga',
    description: 'Weight Liffting',
    image: 'https://img.freepik.com/free-photo/athletic-young-man-doing-workouts-home-man-doing-training-warm-up-before-weight-exercise_1328-4324.jpg?w=360&t=st=1681949956~exp=1681950556~hmac=619fb5d2cb19b171097a1267ecd4fb581fe4c2ac2079e038358576faefe5f9ee',
  },
  {
    title: "joey Gerg",
    description: 'Martial arts',
    image: 'https://img.freepik.com/premium-photo/martial-arts-fighter-white-kimono-black-belt_266732-11454.jpg?w=1060',
  },
  {
    title: 'kazama Toru',
    description: 'Cardio',
    image: 'https://media.istockphoto.com/id/1324042769/photo/confident-gym-owner.jpg?b=1&s=170667a&w=0&k=20&c=iuz1kcCB1w8CBf44nub1mYr-F--88dLRjJvM-5uPahY='
  },
  {
    title: 'Richard Smith',
    description: 'Running',
    image: 'https://img.freepik.com/free-photo/handsome-guy-gray-sport-suit-is-running-workout-morning-stadium-he-is-listening-music-through-headphones-looking-side_197531-1154.jpg?w=1060&t=st=1681949842~exp=1681950442~hmac=6ce9142e6c6294c84789706ee27e2bf5e995d697ef39d5d0359e4d93873090cc',
  },
  {
    title: 'Ncko Revs',
    description: 'Asthetic',
    image: 'https://img.freepik.com/free-photo/young-sports-man-training-gym_1303-20718.jpg?w=1060&t=st=1681949641~exp=1681950241~hmac=95ada3449c4a47034d0ea1f531c7b1921cc0d48276078d73458d232ed003fd5f',
  },
  {
    title: 'Athelete',
    description: 'Ben zuka',
    image: 'https://img.freepik.com/free-photo/portrait-smiling-afro-american-sports-man-with-arms-folded-looking-camera_171337-8263.jpg?w=1060&t=st=1681949769~exp=1681950369~hmac=86473892a316f3a92a926aa56eef338b1b194078e51af01250442c0a816f6c26',
  }
];

const WholeTeam = () => {
    const navigate = useNavigate()
  return (
    <div className={styles.WholeTeamMain}>
    <div className={styles.cardist}>
      {data.map((card, index) => (
        <Trainer key={index} title={card.title} description={card.description} image={card.image} />
      ))}
    </div>
    <button className={styles.cardbtn} onClick={()=>navigate("/#Trainer")} >Go Back Home</button>
    </div>
  );
};

export default WholeTeam;