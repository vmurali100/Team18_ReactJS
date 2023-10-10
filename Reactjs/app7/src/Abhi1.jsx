const Abhi1 = (props) => {
    return (
      <div>
        <h2>{props.message}</h2>
  
        <ul>
          <li>First Name :{props.user.fname}</li>
          <li>Last Name :{props.user.lname}</li>
        </ul>
  
        <ul>
          {props.users.map(function (usr){
              return <li>{ usr}</li>
          })}
        </ul>
      </div>
    );
  };
  export default Abhi1;
  