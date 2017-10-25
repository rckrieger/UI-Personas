import React, { Component } from 'react';
import Radar from 'react-d3-radar';
import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/spacelab/bootstrap.css";
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";

class Personae extends Component {
  constructor(props) {
    super(props);
    this.props = {
      person: props.person,
    };
  }

  render() {
    return (
      <div className="PersonBox">
        <Grid>
        <Row>
          <div className="Name">
            <h1>{this.props.person.name}</h1>
          </div>
        </Row>
        <Row>
          <Col md={3} sm={3}>
            <div className = "IDphoto">
              <img src= {this.props.person.photo} alt= "id pic"/>
            </div>
            <div className="Demographics" align="left">
            <h3>Demographic</h3>
              <p>Age: {this.props.person.age}</p>
              <p>Job: {this.props.person.role}</p>
              <p>Gender: {this.props.person.gender}</p>
              <p>Race: {this.props.person.race}</p>
              <p>Tech savy-ness: {this.props.person.technicalSkills}</p>
            </div>
            <div className="Day" align="left">
            <h3>Daily Schedule</h3>

              {this.props.person.schedule.map((slot, index) =>
                (<p>{slot[0]} : {slot[1]}</p>)
                )
              }
            </div>
          </Col>
          <Col md={6} sm={6}>
            <div className="Quotes">
            {this.props.person.quotes.map((quote, index) => (
              <h5>"{quote}"</h5>
            ))}
              </div>
              <div className="Bio" align="left">
                <h3>Bio</h3>
                <p>{this.props.person.bio}</p>
              </div>
              <div className="Goals" align="left">
                <h3>Goals</h3>
                <ul>
                {this.props.person.goals.map((goal, index) =>
                  (
                    <li>{goal}</li>
                  ))
                }
                </ul>
              </div>
              <div className="Frustrations" align="left">
                <h3>Frustrations</h3>
                <ul>
                {this.props.person.frustations.map((frustation, index) =>
                  (
                    <li>{frustation}</li>
                  ))
                }
                </ul>
              </div>
              <div className="FavApps" align="left">
                <h3>Favorite Apps</h3>
                <ul>
                {this.props.person.favoriteApps.map((app, index) =>
                  (
                    <li>{app}</li>
                  ))
                }
                </ul>
              </div>
          </Col>
          <Col md={3} sm={3}>
          <div className= "Chart" align="left">
            <h3>Personality</h3>
            <Radar
              width={300}
              height={300}
              padding={70}
              domainMax={1}
              highlighted={null}
              data={{
                variables: [
                  {key: 'Agreeableness', label: 'Agreeableness'},
                  {key: 'Conscientiousness', label: 'Conscientiousness'},
                  {key: 'Extraversion', label: 'Extraversion'},
                  {key: 'Openness', label: 'Openness'},
                  {key: 'Neuroticism', label: 'Neuroticism'},
                ],
                sets: [
                  {
                    key: 'me',
                    label: 'My Scores',
                    values: {
                      Agreeableness: this.props.person.canoe.agreeableness,
                      Conscientiousness: this.props.person.canoe.conscientiousness,
                      Extraversion: this.props.person.canoe.extraversion,
                      Openness: this.props.person.canoe.openness,
                      Neuroticism: this.props.person.canoe.neuroticism,
                    },
                  },
                ],
              }}
            />
        </div>
        <div className="Motivation" align="left">
          <h3>Motivation</h3>
          <ul>
          {this.props.person.motivation.map((motive, index) =>
            (
              <li>{motive}</li>
            ))
          }
          </ul>
        </div>
        <div className="Fears" align="left">
          <h3>Fears</h3>
          <ul>
          {this.props.person.fears.map((fear, index) =>
            (
              <li>{fear}</li>
            ))
          }
          </ul>
        </div>
        </Col>
        </Row>
        </Grid>
      </div>
    );
  }
}

export default Personae;
