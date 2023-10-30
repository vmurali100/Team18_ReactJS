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
            id="Customer care"
            name="Customer care"
            required
            onChange={this.handleChange}
            value={this.state.student.university}
          />
          <br />
          <br />
          <label for="Part Name">Part Name:</label>
          <input
            type="text"
            id="Part Name"
            name="Part Name"
            required
            onChange={this.handleChange}
            value={this.state.student.institute}
          />
          <br />
          <br />
          <label for="Partprint Number">Partprint Number:</label>
          <input
            type="text"
            id="Partprint Number"
            name="Partprint Number"
            required
            onChange={this.handleChange}
            value={this.state.student.branch}
          />
          <br />
          <br />
          <label for="Revision">Revision:</label>
          <input
            type="text"
            id="Revision"
            name="Revision"
            required
            onChange={this.handleChange}
            value={this.state.student.degree}
          />
          <br />
          <br />
          <label for="Part Number">Part Number:</label>
          <input
            type="text"
            id="Part Number"
            name="Part Number"
            required
            onChange={this.handleChange}
            value={this.state.student.degree}
          />
         
          <label for="Date of  Estimation">Date of  Estimation:</label>
          <input
            type="Date"
            id="Date of  Estimation"
            name="Date of  Estimation"
            required
            onChange={this.handleChange}
            value={this.state.student.degree}
          />
         
          <br />
          <br />
          <label for="Estimator Name">Estimator Name:</label>
          <input
            type="Date"
            id="Estimator Name"
            name="Estimator Name"
            required
            onChange={this.handleChange}
            value={this.state.student.degree}
          />
          <br />
          <br />
          <label for="Buyer Name">Buyer Name:</label>
          <input
            type="text"
            id="Buyer Name"
            name="Buyer Name"
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
        <label for="Estimate base quantity">Estimate base quantity:</label>
          
          <input
            type="number"
            id="Estimate base quantity"
            name="Estimate base quantity"
            required
            onChange={this.handleChange}
            value={this.state.student.degree}
          ></input>
          <label for="Scrap percentage">Scrap percentage:</label>
          
          <input
            type="percentage"
            id="Scrap percentage"
            name="Scrap percentage"
            required
            onChange={this.handleChange}
            value={this.state.student.degree}
          ></input><br></br>
          <br></br>
          
        </div>
      </div>
      
     
    );
  }
}


