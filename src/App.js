import React, {Component} from 'react';
import './App.css';
import SignInForm from './SignInForm';

class App extends Component {
  handleSubmit = (values) => {
    alert("Submitted");
    console.log(values);
  }


  render() {
    return (
      <div className="App">
          <div className="container">
            <span className="App-intro">
              <h2>Contact Form</h2>
            </span>
            <SignInForm onSubmit={this.handleSubmit}/>
          </div>
        </div>
    );
  }
}

export default App;
