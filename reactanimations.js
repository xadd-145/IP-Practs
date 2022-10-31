//REACT ANIMATIONS
//RUN NPM I REACT-SPRING

//INDEX.JS
import React, {Component} from "react";
import ReactDOM from "react-dom";
//import { Transition, animated } from "react-spring";
import { Spring } from 'react-spring';
import Component1 from "./components/Component1.";
//import Component2 from "./components/Component2";
//import Component3 from "./components/Component3";
import "./styles.css";

class App extends Component {
  /*state = {
    showComponent3: false
  };*/

  //toggle = e => this.setState({ showComponent3: !this.state.showComponent3 });

  render() {
    return (
      <div className="App">
        <Component1 />
        {/*<Component2 toggle={this.toggle} />
        <Transition
          native
          items={this.state.showComponent3}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {show =>
            show &&
            (props => (
              <animated.div style={props}>
                <Component3 />
              </animated.div>
            ))
          }
        </Transition>*/}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


//MAKE FORDER COMPONENTS & ADD 2 COMPONENTS
//COMPONENT1
import React from "react";
import { Spring } from "react-spring";

export default function Component1() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
          <div style={c1Style}>
            <h1>Component 1</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
              nobis adipisci eum minima deserunt at porro, veritatis officia
              commodi itaque voluptates vel suscipit assumenda soluta ipsa
              voluptatibus laudantium labore harum?
            </p>
            <Spring
              from={{ number: 0 }}
              to={{ number: 10 }}
              config={{ duration: 10000 }}
            >
              {props => (
                <div style={props}>
                  <h1 style={counter}>{props.number.toFixed()}</h1>
                </div>
              )}
            </Spring>
          </div>
        </div>
      )}
    </Spring>
  );
}

const c1Style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem"
};

const counter = {
  background: "#333",
  textAlign: "center",
  width: "100px",
  borderRadius: "50%",
  margin: "1rem auto"
};

//COMPONENT2
import React, { Component } from "react";
import { Spring } from "react-spring";

export class Component2 extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1000, duration: 1000 }}
      >
        {props => (
          <div style={props}>
            <div style={c2Style}>
              <h1>Component 2</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Possimus nobis adipisci eum minima deserunt at porro, veritatis
                officia commodi itaque voluptates vel suscipit assumenda soluta
                ipsa voluptatibus laudantium labore harum?
              </p>
              <button style={btn} onClick={this.props.toggle}>
                Toggle Component 3
              </button>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}

const c2Style = {
  background: "slateblue",
  color: "white",
  padding: "1.5rem"
};

const btn = {
  background: "#333",
  color: "#fff",
  padding: "1rem 2rem",
  border: "none",
  textTransform: "uppercase",
  margin: "15px 0"
};

export default Component2;

//RUN NPM START