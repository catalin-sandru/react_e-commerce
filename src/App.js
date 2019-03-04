import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">column 1</div>
          <div className="col-6">column 2
            {/* font awesome */}
            <i className="fas fa-home"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
