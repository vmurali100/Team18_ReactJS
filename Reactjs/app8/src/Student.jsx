import React, { Component } from 'react'

export default class Student extends Component {
    constructor(props){
        super(props);
        this.state = {
            Student:{
                Customercare:"",
                PartName:"",
                PartprintNumber:"",
                Revision:"",
                PartNumber:"",
                DateofEstimation:"",
                EstimatorName:"",
                BuyerName:"",
                Estimatebasequantity:"",
                Scrappercentage:"",
            },
            allStudents:[]
        };

        }
        handleChange = (e) => {
            const newStudent = {...this.state.student};
            newStudent[e.target.name] = e.target.value;
            this.setState({student:newStudent});
        };
        
    }
  render() {
    return (
      <div>
        <form >
          <label for="Customercare">Customercare:</label>
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
          <label for="PartName">PartName:</label>
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
          <label for="PartprintNumber">PartprintNumber:</label>
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
          <label for="PartNumber">PartNumber:</label>
          <input
            type="text"
            id="Part Number"
            name="Part Number"
            required
            onChange={this.handleChange}
            value={this.state.student.degree}
          />
         
          <label for="DateofEstimation">DateofEstimation:</label>
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
          <label for="EstimatorName">EstimatorName:</label>
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
          <label for="BuyerName">BuyerName:</label>
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
        <label for="Estimate base quantity">Estimatebasequantity:</label>
          
          <input
            type="number"
            id="Estimate base quantity"
            name="Estimate base quantity"
            required
            onChange={this.handleChange}
            value={this.state.student.degree}
          ></input>
          <label for="Scrap percentage">Scrappercentage:</label>
          
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



