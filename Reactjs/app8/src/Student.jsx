import React, { Component } from 'react'

export default class 
 extends Component {
  render() {
    return (
      <div>
        <form >
          <label for="Customer care">Customer care:</label>
          <input
            type="text"
            id="university"
            name="university"
            required
            onChange={this.handleChange}
            value={this.state.student.university}
          />
          <br />
          <br />
          <label for="Part Name">Institute:</label>
          <input
            type="text"
            id="institute"
            name="institute"
            required
            onChange={this.handleChange}
            value={this.state.student.institute}
          />
          <br />
          <br />
          <label for="Partprint Number">Branch:</label>
          <input
            type="text"
            id="branch"
            name="branch"
            required
            onChange={this.handleChange}
            value={this.state.student.branch}
          />
          <br />
          <br />
          <label for="Revision">Degree:</label>
          <input
            type="text"
            id="degree"
            name="degree"
            required
            onChange={this.handleChange}
            value={this.state.student.degree}
          />
          <br />
          <br />
          <label for="Part Number">Status:</label>
          <input
            type="text"
            id="degree"
            name="degree"
            required
            onChange={this.handleChange}
            value={this.state.student.degree}
          />
         
          <label for="Date of  Estimation">Status:</label>
          <input
            type="Date"
            id="degree"
            name="degree"
            required
            onChange={this.handleChange}
            value={this.state.student.degree}
          />
         
          <br />
          <br />
          <label for="Estimator Name">Status:</label>
          <input
            type="Date"
            id="degree"
            name="degree"
            required
            onChange={this.handleChange}
            value={this.state.student.degree}
          />
          <br />
          <br />
          <label for="Buyer Name">Experience:</label>
          <label for="Date of  Estimation">Status:</label>
          <input
            type="Date"
            id="degree"
            name="degree"
            required
            onChange={this.handleChange}
            value={this.state.student.degree}
          ></input>
          <br />
          <br />
          
          
         
          <input type="button" value="Submit"  onClick={this.handleSubmit}/>
        </form>

        <hr />
        <StudentsTable students={this.state.allStudents}/>
        <div id='second'>
        <label for="Estimate base quantity">Experience:</label>
          
          <input
            type="number"
            id="Quantity"
            name="degree"
            required
            onChange={this.handleChange}
            value={this.state.student.degree}
          ></input>
          <label for="Scrap percentage">Experience:</label>
          
          <input
            type="percentage"
            id="Quantity"
            name="degree"
            required
            onChange={this.handleChange}
            value={this.state.student.degree}
          ></input>
          
        </div>
      </div>
     
    );
  }
}


