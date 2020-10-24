import React, { Component } from 'react';
import './App.css';
import {Preview} from './components/preview/preview.component'

class App extends Component{
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      from: '',
      thanks: '',
    }
  }

  handleChange = (e) => {
    console.log(e.target.name)
    if (e.target.name === "thanks") {
      this.setState({[e.target.name]: parseInt(e.target.value, 10)})
    }
    this.setState({[e.target.name]: e.target.value})
  }
 
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <body>
          <h1>Insufficient Gratitude<br></br>Compensator Generator</h1>
          <form>
            <p>
            <label>
              Recepient's Name:<br></br>
              <input type="text" name="name" minLength="1" maxLength="48" required onChange={this.handleChange} />
            </label><br></br>
            </p>

            <p>
            <label>
              Email Address:<br></br>
              <input type="email" name="email" required onChange={this.handleChange} />
            </label><br></br>
            </p>

            <p>
            <label>
              Your Name:<br></br>
              <input type="text" name="from" minLength="1" maxLength="48" required onChange={this.handleChange} />
            </label><br></br>
            </p>

            <p>
            <label>
              Number of Thank Yous:<br></br>
              <input type="number" name="thanks" min="1" max="365" step="1" required onChange={this.handleChange} />
            </label><br></br>

            <input type="submit" value="Submit" />
            </p>
          </form>
          <Preview name={this.state.name} from={this.state.from} numberOfThanks={this.state.thanks} changeHandler={this.handleChange}/>
        </body>
      </div>
    );
  }
}

export default App;
