import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Video from "./components/Video";

import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Card,
  Icon
} from "semantic-ui-react";

const FixedMenuLayout = () => (
  <div>
    <Container text>
      <div className="App-header">
        <div className="title">
          <h1 className="title">Digital Foundations</h1>
        </div>
        <p>
          <i>
            A course that supplements a student's design studio without
            overshadowing it.
          </i>
        </p>
        <div className="video" style={{ marginTop: "2em" }}>
          <Video />
        </div>
      </div>
    </Container>

    <Container text style={{ marginTop: "2em" }}>
      <Header as="h2" style={{ marginTop: "2em" }}>
        The final product for the course will be a 3D interactive maze.
      </Header>

      <p className="class-style">
        Students enrolled in the Digital Foundations course will leverage a
        digital toolset to create an interactive virtual maze. This project will
        allow students to follow a logical progression that leads each newly
        acquired skill into the next. Students will have a clear and achievable
        goal to work towards while allowing a wide range of creative liberties
        to be taken by those who choose to do so.
      </p>

      <Header as="h2" style={{ marginTop: "2em" }}>
        {/* Process */}
      </Header>
      <div className="App-header-2">
        <p>Conceptualization</p>
        <p>
          <b>(Lecture, references, inspiration)</b>
        </p>
        <p>|</p>
        <p>2D Digital: Vector</p>
        <p>
          <b>(AutoCAD / Rhino)</b>
        </p>
        <p>|</p>
        <p>3D Digital: Polygon Modeling / Rendering</p>
        <p>
          <b>(Rhino / Blender)</b>
        </p>
        <p>|</p>
        <p>3D Experiential: Animation / Logic</p>
        <p>
          <b>(Unity / C#)</b>
        </p>
      </div>
      <Header as="h2" style={{ marginTop: "2em" }}>
        Maze Criteria
      </Header>

      <p>The maze will be navigated in a first person view.</p>
      <p>
        The maze should take at least 1 minute to complete, but no more than 5.
      </p>
      <p>The maze may be thought of horizontally or vertically.</p>
      <p>
        Standard W,A,S,D Shift Space controls will be used to navigate the maze.
      </p>
      <Image
        className="photo"
        src="https://image.flaticon.com/icons/svg/1687/1687629.svg"
        size="small"
      />
      <h3>The maze will consist of:</h3>
      <i>
        <p>Starting point</p>
        <p>3 secondary spaces</p>
        <p>3 progress barriers</p>
        <p>Datum</p>
        <p>Ending point</p>

        <p className="pad">
          <b>
            Students are strongly encouraged to experiment and take creative
            liberties as long as the maze runs and is completable.
          </b>
        </p>
      </i>
      <div className="pad">
        <p className="class-style">
          Students WILL NOT be graded on design of the maze, only functionality
          and ability to complete and submit assignments by their respective
          deadlines. This class is not intended to conflict with studio, only
          supplement it. The course load will be light enough to allow students
          to focus on studio but frequent enough to encourage development and
          retention of newly acquired skills.{" "}
        </p>

        <p className="class-style">
          Students will be graded on individual work throughout the semester.
          Most of a student’s grade will be determined from their individual
          submissions. Once final production of the maze begins, students can
          work in groups ranging from one to three individuals. Submission of a
          final maze is required to meet goals of the studio, however the
          quality of the final maze will only affect students grades positively.
        </p>

        <p className="class-style">
          The final mazes will be demoed by me in class live to the other
          students. Students will present their project, struggles that they
          faced along the way, and what they feel like they learned from the
          project. After the demos, students will vote on their top 3 favorite
          mazes. The top 3 will be put on display in the school for guests to
          experience.
        </p>
      </div>
      <div className="App-header-2">
        <Image
          className="photo"
          src="https://i.imgur.com/eJVjsJP.jpg"
          size="medium"
        />
        <b>
          <p>Christian Gentry</p>
          <p>Availability: Monday - Thursday 6pm-9pm</p>
        </b>
        <p className="bio">
          <b> Post-graduation plans:</b> After finishing UTA’s grad program I
          will be working at Zeal IT Consultants in Dallas as a software
          developer. I am going to be working professionally in the tech field
          to leverage my design thinking and technical skillset in a new
          context. At Zeal I have been able to have discussions with HKS
          architects about how we can enhance their use of AR and VR
          technologies. I am also working with WRA architects to bring
          photogrammetry to their firm via laser scanning and drones.
        </p>

        <p className="bio">
          <b> Past Experience:</b> I have previously worked at Huckabee
          architects in Fort Worth for over two years and Toll Architecture in
          Grapevine for a year before that. In these roles I performed
          traditional architectural tasks as well as tasks that have lead me to
          the path I am on now. At Huckabee my role expanded to include software
          development, workflow optimization, and photogrammetry for the firm.
        </p>

        <p className="bio">
          <b> Teaching Goals:</b> I do not feel like my knowledge base and skill
          set are best put to use instructing a studio at the moment. My desire
          would be to teach a standalone class that enhances students abilities
          to leverage a digital toolset while expanding their abilities to think
          and communicate using technology. I want students to take the skills
          and concepts gained in my class to enhance the other aspects of their
          education.
        </p>
      </div>
    </Container>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <FixedMenuLayout />
      </div>
    );
  }
}

export default App;
