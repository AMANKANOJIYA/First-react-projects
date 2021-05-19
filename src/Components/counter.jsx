import React, { Component } from "react";

// Method-1 (to export a component)
class Counter extends Component {
  // this is to add any element to the render can be stored here
  render() {
    //   React.createElement
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)} //not calling passing reference in event
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const count = this.props.counter.value;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;

// NOTES____NOTES_____NOTES_____NOTES_____NOTES_____NOTES---------------------

{
  /* <React.Fragment></React.Fragment> //if dont want a extra div we can use */
}

{
  /* <span
          style={{ fontSize: "13px", marginTop: "5px" }} //to add  style in one line jike js
          className={this.getBadgeClasses()}
        >
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button> */
}

// Method-2 (to export a component)
// export default class counter2 extends Component {
//   render() {
//     //   React.createElement
//     return <p>This is a counter component</p>;
//   }
// }

// ----------------------------Functions-----------------------
// getBadgeClasses() {
//   let classes = "badge m-2 bg-";
//   classes += this.state.count === 0 ? "warning" : "primary";
//   return classes;
// }

// formatCount() {
//   const { count } = this.state;
//   return count === 0
//     ? //   <React.Fragment>
//       //     <h3>Zero</h3> we can also add many line of code
//       //     <p>this is 0000</p>
//       //   </React.Fragment>
//       "Zero"
//     : count;
// }

// {this.state.tags.length === 0 && "Please add some tags"} true and true {string}

// renderTags() {
//   if (this.state.tags.length === 0) return <p>There are no tags</p>;
//   return (
//     <ul>
//       {this.state.tags.map((tag) => (
//         <li key={tag}>{tag}</li>
//       ))}
//     </ul>
//   );
// }

// used to construct the function and bind this to it another way
// to create the function to a arrow
// constructor() {
//   super();
//   this.handleIncrement = this.handleIncrement.bind(this);
// }

// {
//   this.props.children;
// }
