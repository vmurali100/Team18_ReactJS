const Child = (props) => {

    console.log(props)
  return (
    <div>
      <h2>Welcome to Child Component !!</h2>
      <p>Messge : {props.parentMessage}</p>

      <ul>
      <li>{props.studentDetails.fname}</li>
      <li>{props.studentDetails.email}</li>
      </ul>

      <ul>
        {props.allStudentDetails.map((std)=>{
            return <li>{std}</li>
        })}
      </ul>
    </div>
  );
};

export default Child;
