import React, { Component } from "react";

class Radio extends Component {
    
    constructor() {
       
      super();
      this.state = {
        name: "React"
      };
      
      this.onChangeValue = this.onChangeValueRadio.bind(this);
    }
//    static radioThing = {}
    
    onChangeValueRadio(event) {

        localStorage.setItem("radioVal", event.target.value);
        // setValRadio(event.target.value)
        console.log(event.target.value);
      }

  
    render() {
      return (
        <div className="inputDiv choooseCategory" onChange={this.onChangeValueRadio}>
        <h4>Choose category:</h4>
          <label className="container"><input value="Career" type="radio" name="radio"></input>Career
            <span className="checkmark"></span>
          </label>
          <label className="container"><input value="Family" type="radio" name="radio"></input>Family
            <span className="checkmark"></span>
          </label>
          <label className="container"><input value="Environment" type="radio" name="radio"></input>Environment
            <span className="checkmark"></span>
          </label>
          <label className="container"><input value="Hobbies" type="radio" name="radio"></input>Hobbies
            <span className="checkmark"></span>
          </label>
          <label className="container"><input value="Vacation" type="radio" name="radio"></input>Vacation
            <span className="checkmark"></span>
          </label>
          <label className="container"><input value="Education" type="radio" name="radio"></input>Education
            <span className="checkmark"></span>
          </label>
          <label className="container"><input  value="Healthy and sports" type="radio" name="radio"></input>Healthy and sports
            <span className="checkmark"></span>
          </label>
        </div>
      );
    }
  }
  
  export default Radio;