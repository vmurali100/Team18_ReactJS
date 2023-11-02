import React, { Component } from "react";
import axios from "axios";
import StudentsTable from "./StudentsTable";
export default class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
      student: {
        university: "",
        institute: "",
        branch: "",
        degree: "",
        status: "",
        averageCPI: "",
        experience: "",
        website: "",
      },
      isEdit: false,
      allStudents: [],
    };
  }

  handleChange = (e) => {
    const newStudent = { ...this.state.student };
    newStudent[e.target.name] = e.target.value;
    this.setState({ student: newStudent });
  };
  getAllStudetnsFromServer = () => {
    axios.get("http://localhost:3000/students").then((res) => {
      console.log(res);
      this.setState({ allStudents: res.data });
    });
  };
  handleSubmit = () => {
    console.log(this.state.student);
    axios
      .post("http://localhost:3000/students/", this.state.student)
      .then(() => {
        this.getAllStudetnsFromServer();
        this.clearForm()
      });
  };

  handleEditStudent = (std) => {
    this.setState({ student: std, isEdit: true });
  };

  handleUpdate=()=>{
    axios.put("http://localhost:3000/students/"+this.state.student.id,this.state.student).then(()=>{
        this.getAllStudetnsFromServer();
        this.setState({isEdit:false})
        this.clearForm()
    })
  }

  clearForm=()=>{
    let newStudent = {
        university: "",
        institute: "",
        branch: "",
        degree: "",
        status: "",
        averageCPI: "",
        experience: "",
        website: "",
    }
    this.setState({student:newStudent})
  }

  handleDelete=(std)=>{
    axios.delete("http://localhost:3000/students/"+std.id).then(()=>{
        this.getAllStudetnsFromServer()
    })
  }

  // The Following Method will Run , when the Project Started or Component Rendering Completed 
  componentDidMount(){
    this.getAllStudetnsFromServer();
  }
  render() {
    return (
      <div>
        <form>
          <label for="university">University:</label>
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
          <label for="institute">Institute:</label>
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
          <label for="branch">Branch:</label>
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
          <label for="degree">Degree:</label>
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
          <label for="status">Status:</label>
          <input
            type="radio"
            id="persuing"
            name="status"
            value="Persuing"
            onChange={this.handleChange}
            checked={this.state.student.status == "Persuing"}
          />
          Persuing
          <input
            type="radio"
            id="completed"
            name="status"
            value="Completed"
            onChange={this.handleChange}
            checked={this.state.student.status == "Completed"}
          />
          Completed
          <br />
          <br />
          <label for="averageCPI">Average CPI:</label>
          <input
            type="number"
            id="averageCPI"
            name="averageCPI"
            step="0.01"
            required
            onChange={this.handleChange}
            value={this.state.student.averageCPI}
          />
          <br />
          <br />
          <label for="experience">Experience:</label>
          <textarea
            id="experience"
            name="experience"
            rows="4"
            cols="50"
            onChange={this.handleChange}
            value={this.state.student.experience}
          ></textarea>
          <br />
          <br />
          <label for="website">Website:</label>
          <input
            type="url"
            id="website"
            name="website"
            onChange={this.handleChange}
            value={this.state.student.website}
          />
          <br />
          <br />
          {this.state.isEdit ? (
            <input type="button" value="Update" onClick={this.handleUpdate} />
          ) : (
            <input
              type="button"
              value="Add Student"
              onClick={this.handleSubmit}
            />
          )}
        </form>
        <hr />
        <button onClick={this.getAllStudetnsFromServer}>Get Data</button>
        <StudentsTable
          students={this.state.allStudents}
          handleEditStudent={this.handleEditStudent}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
