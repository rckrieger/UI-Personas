import React, { Component } from 'react';
import './App.css';


class Student extends Personae {
  var name = "Keesha Franklin";
  var photo = null;
  var canoe = {};
  var role = "Student";
  var schedule = {};
  var quotes = ["Oh, bad! Oh, bad! Oh, bad, bad, bad!",
    "Let's get the facts.",
    "Where does she get her clothes?",
    "I wonder...",
    "If my facts are straight..."];
  var motivation = "";
  var goals = [];
  var frustations = [];
  var keyTraits = [];
  constructor() {
    super(name, photo, canoe, role, schedule, quotes, motivation, goals, frustations, keyTraits);
    this.state = {
      activePlace: 0,
    };
  }
  render() {
    return (
      <div>
      <h1>Rendering student</h1>
      </div>
    );
  }
}

export default Student;
