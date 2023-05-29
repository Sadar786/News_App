import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import News from "./component/News";
import LoadingBar from 'react-top-loading-bar'
import React, { Component } from "react";

class App extends Component {
  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <Router>
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
        />
        <Navbar />
        <Routes>
          <Route exact path="/"              element={<News setProgress={this.setProgress} key="general" cat="General" pageSize={9} category={"general"} />} />
          <Route exact path="/business"      element={<News setProgress={this.setProgress} key="business" cat="Business" pageSize={9} category={"business"} />} />
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" cat="Entertainment" pageSize={9} category={"entertainment"} />} />
          <Route exact path="/health"        element={<News setProgress={this.setProgress} key="health" cat="Health" pageSize={9} category={"health"} />} />
          <Route exact path="/science"       element={<News setProgress={this.setProgress} key="science" cat="Science" pageSize={9} category={"science"} />} />
          <Route exact path="/sports"        element={<News setProgress={this.setProgress} key="sports" cat="Sports" pageSize={9} category={"sports"} />} />
          <Route exact path="/technology"    element={<News setProgress={this.setProgress} key="technology" cat="Technology" pageSize={9} category={"technology"} />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
