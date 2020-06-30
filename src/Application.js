import React, { Component } from "react";
import Highscore from "./HighScore";

class Application extends Component {
  constructor(props) {
    super(props); // Extanciates Parent Class
    this.state = {
      count: 0,
      overTen: false,
    };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 }); //sET state on click method
  };

  resetCount = (e) => {
    console.log("event is ", e);
    this.setState({
      count: 0,
      overTen: false,
    });
  };

  //2  FUnctions called in lyfecycle of Component
  // componentWillMount(props, state) {}

  componentDidMount(props, state) {
    console.log("Mounted With ", props, state);
  }

  //Methods Called when UI updates
  // componentWillReceiveProps(props) {}
  //Called before "will mount"

  // componentWillUpdate(props, state) {}

  componentDidUpdate(props, state) {
    if (
      this.state.count > 10 && //condition for high score
      this.state.count !== state.count && //Highscore only on change of state to 11
      !this.state.overTen //Only when the Overturn is False (performance)
    ) {
      //will the code below run
      console.log("OverTen is set");
      this.setState({ overTen: true });
    }
    //where state here is old state
    // console.log("Component did update from ", state, " to ", this.state);
  } //this.state is the new state

  render() {
    let { count } = this.state;
    return (
      <div>
        <h1>
          You Clicked the Button {count} {count === 1 ? "time" : "times"}
        </h1>

        <Highscore overTen={this.state.overTen} onReset={this.resetCount} />
        {/* {this.state.overTen ? <h3>New High Score!!!</h3> : null} */}
        <span>
          <button onClick={(e) => this.handleClick()}>Add To Cart</button>
        </span>
      </div>
    );
  }
}

export default Application;
