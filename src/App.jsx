import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      hasLoaded: false,
      title: "React App",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleLoadedChange = this.handleLoadedChange.bind(this);
    this.displayLoading = this.displayLoading.bind(this);
  }

  handleInput() {
    this.setState({
      title: document.getElementById("title").value,
    });
  }

  handleLoadedChange() {
    this.setState({
      hasLoaded: this.state.hasLoaded ? false : true,
    });
  }

  displayLoading() {
    if (this.state.hasLoaded) {
      return ( 
        <div>
          <input 
          type="text" 
          name="title" 
          id="title" 
          placeholder="Enter"
          />
          <button onClick={this.handleInput}>Change Title</button>
        </div>
      );
    } else {
    return <h3>Loading...</h3>;
    }
  }

  componentDidMount() {
    this.setState({
      hasLoaded: true,
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.handleLoadedChange}>Toggle Loaded Change</button>
        <hr />     
      {this.displayLoading()}
      </div>
    );
  }
}

export default App;
