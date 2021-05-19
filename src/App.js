// All Import statement
import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/navbar";
import Counters from "./Components/counters";

class App extends Component {
  // Used to store important data for this component
  state = {
    Counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  // Function to handle increase button click
  handleIncrement = (counter) => {
    const counters = [...this.state.Counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ Counters: counters });
  };

  // function to handle the reset button click
  handleReset = () => {
    const counters = this.state.Counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  // Function to handle delete button click
  handleDelete = (counterId) => {
    const counters = this.state.Counters.filter((c) => c.id !== counterId);
    this.setState({ Counters: counters });
  };

  // render th HTML form react html functions
  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.Counters.filter((c) => c.value > 0).length}
        />
        <main className="container m-2">
          <Counters
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            Counters={this.state.Counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

// export this component to this local directry
export default App;

// ----------------------NOTES-----------------------
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// just to check
// add new
