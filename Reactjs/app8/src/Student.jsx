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
            value={this.state.student.Customercare}
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
            value={this.state.student.PartName}
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
            value={this.state.student.PartprintNumber}
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
            value={this.state.student.Revision}
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
            value={this.state.student.PartNumber}
          />
         
          <label for="DateofEstimation">DateofEstimation:</label>
          <input
            type="Date"
            id="Date of  Estimation"
            name="Date of  Estimation"
            required
            onChange={this.handleChange}
            value={this.state.student.DateofEstimation}
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
            value={this.state.student.EstimatorName}
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
            value={this.state.student.BuyerName}
          ></input>
          <br />
          <br />
          
          
         
         
        </form>

        
        <div id='second'>
        <label for="Estimate base quantity">Estimatebasequantity:</label>
          
          <input
            type="number"
            id="Estimate base quantity"
            name="Estimate base quantity"
            required
            onChange={this.handleChange}
            value={this.state.student.Estimatebasequantity}
          ></input>
          <label for="Scrap percentage">Scrappercentage:</label>
          
          <input
            type="percentage"
            id="Scrap percentage"
            name="Scrap percentage"
            required
            onChange={this.handleChange}
            value={this.state.student.Scrappercentage}
          ></input><br></br>
          <br></br>
          <input type="button" value="Clearform" onClick={this.handlesubmit}/>

          
        </div>

      </div>
    );
  }
  




