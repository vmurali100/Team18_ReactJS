const Child = (props) => {
  return (
    <div>
      <h2>Message from Parent Component is : {props.message}</h2>

      <ul>
        <li>User First Name is :{props.user.fname}</li>
        <li>User Last Name is :{props.user.lname}</li>
      </ul>

      <ul>
        {props.users.map(function (usr){
            return <li>{ usr}</li>
        })}
      </ul>
    </div>
  );
};
export default Child;

// 1. How To Declare an Emppty String and send to Child 
// 2. When we click on a  Button , change the value in String .

// 1. How To Declare an Emppty Object and send to Child 
// 2. When we click on a  Button , change the value in Object .

// 1. How To Declare an Emppty Array and send to Child 
// 2. When we click on a  Button , change the value in Array .