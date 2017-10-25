import React, { Component } from 'react';
import './App.css';
import Personae from './Personae';
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";

var keesha = {
    name: "Keesha Franklin",
    photo: "https://vignette.wikia.nocookie.net/magicschoolbus/images/a/a6/MSB_S1_E4_072.jpg/revision/latest/scale-to-width-down/260?cb=20170703233927",
    canoe: {
      agreeableness: .25,
      conscientiousness: .75,
      extraversion: .9,
      openness: 1.0,
      neuroticism: .8
    },
    role: "Student",
    schedule: [
      ["7:00 AM" , "Wake up"],
      ["8:00 AM" , "Go to school"],
      ["12:00 PM" , "Eat lunch"],
      ["1:00 PM" , "More school"],
      ["3:00 PM" , "Go home"],
      ["4:00 PM" , "Homework"],
      ["6:00 PM" , "Dinner"],
      ["8:00 PM" , "Sleep"]
    ],
    quotes: ["Oh, bad! Oh, bad! Oh, bad, bad, bad!",
      "Let's get the facts.",
      "I wonder...",
      "If my facts are straight..."],
    motivation: ["Growth", "Being right"],
    goals: ["Get where I am going fast", "Experience the most I can on fieldtrips"],
    frustations: ["Waiting for others"],
    fears: ["Being wrong", "Getting left out"],
    keyTraits: ["Curious", "Ambition", "Analytical"],
    age: 8,
    bio: "Hi, I'm Keesha. I'm a stickler for the rules but I hate when things go slowly. I love Ms. Frizzle's Feildtrips but waiting for the chaperones to do role call takes forever. I also really value correct information. I hate when people promote things that are incorrect. Lastly, I wish there was a way could get more out of my experiences on feildtrips.",
    gender: "Female",
    race: "Black",
    favoriteApps: ["Snapchat", "Instagram", "BrainPop"],
    technicalSkills: "High"

};
var frizzle = {
    name: "Ms. Frizzle",
    photo: "https://vignette.wikia.nocookie.net/magicschoolbus/images/b/b9/TheFriz.jpg.jpg/revision/latest/zoom-crop/width/240/height/240?cb=20140319212502",
    canoe: {
      agreeableness: .6,
      conscientiousness: .2,
      extraversion: 1.0,
      openness: 1.0,
      neuroticism: .1
    },
    role: "Teacher",
    schedule: [
      ["6:00 AM" , "Wake up"],
      ["7:00 AM" , "Go to school"],
      ["8:00 AM" , "Start Teaching"],
      ["12:00 PM" , "Eat lunch"],
      ["1:00 PM" , "More school"],
      ["4:00 PM" , "Go home"],
      ["5:00 PM" , "Grade Papers"],
      ["7:00 PM" , "Dinner"],
      ["9:00 PM" , "Sleep"]
    ],
    quotes: ["Take chances, make mistakes, and get messy!",
      "Get out there and explore!",
      "Never say never!",
      "Two by two, please."],
    motivation: ["Growth", "Learning", "Mentoring"],
    goals: ["Make sure my students have the best experience", "Not loose any students"],
    frustations: ["Loosing students", "Communicating with parents"],
    fears: ["Being wrong", "Being a bad teacher"],
    keyTraits: ["Mentor", "Curious", "Learner"],
    age: 40,
    bio: "I love taking my students on fieldtrips. I feel field trips are the best way to learn.I am not too organized though. I wish there were a better way for me to plan my fieldtrips. I also wish there were a better way to communicate with chaperones. I also need a better way to tell all the parents when our trips are running late.",
    gender: "Female",
    race: "White",
    favoriteApps: ["Google", "Evernote", "Calander"],
    technicalSkills: "Medium"
};
var timothy = {
    name: "Timothy Peterson",
    photo: "https://vignette.wikia.nocookie.net/magicschoolbus/images/9/9e/The-producer-the-magic-school-bus-7.7.jpg/revision/latest?cb=20170730163739",
    canoe: {
      agreeableness: .3,
      conscientiousness: .9,
      extraversion: .6,
      openness: .4,
      neuroticism: .7
    },
    role: "Chaperone/Parent",
    schedule: [
      ["6:00 AM" , "Wake up"],
      ["8:00 AM" , "Drop son at school"],
      ["9:00 AM" , "Go to work"],
      ["12:00 PM" , "Eat lunch"],
      ["1:00 PM" , "Return to work"],
      ["3:30 PM" , "Check if son is back home"],
      ["5:00 PM" , "Go home"],
      ["6:00 PM" , "Dinner"],
      ["10:00 PM" , "Sleep"]
    ],
    quotes: ["Thanks for calling"],
    motivation: ["Being a good parent", "Pride"],
    goals: ["Use time well", "Not loose my son"],
    frustations: ["Surprises", "Lack of order", "Wasting time"],
    fears: ["Loosing son"],
    keyTraits: ["Organized", "Proactive", "Paternal"],
    age: 30,
    bio: "I am a producer at a major network. I head up educational programming. I sometimes chaperone to make memories with my son. All the trips I have chaperoned for so far were porly organized though. I would volunteer more if they were better organized.",
    gender: "Male",
    race: "Black",
    favoriteApps: ["Mail", "Phone", "Reminders"],
    technicalSkills: "Low"
};

const PEOPLE = [keesha,frizzle, timothy];
class App extends Component {
  constructor()
  {
    super();
    this.state = {
      activePlace: 0,
    };
  }
  render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="App">
        <Nav
          bsStyle="tabs"
          activeKey={activePlace}
          onSelect={index => {
            this.setState({ activePlace: index });
          }}
        >
        {PEOPLE.map((person, index) => (
          <NavItem key={index} eventKey={index}>{person.name}</NavItem>
        ))}
      </Nav>
      <Personae person={PEOPLE[activePlace]}/>
      </div>
    );
  }
}





export default App;
