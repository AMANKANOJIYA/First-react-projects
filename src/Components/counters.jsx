import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, onIncrement, onDelete, Counters } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary sm m-2">
          Reset
        </button>
        {Counters.map((counter) => (
          <Counter
            onDelete={onDelete}
            onIncrement={onIncrement}
            key={counter.id}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

//<h4>Counter #{counter.id}</h4>
