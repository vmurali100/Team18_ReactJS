import { useState } from "react";
import Abhi1 from "./Abhi1";


const Abhi= () => {
  const [message, setMessage] = useState("");
  const [emp, setemp] = useState({});
  const [stu, setstu] = useState([]);

  const hmessage = () => {
    setMessage("Hello");
  };

  const addempdetails = () => {
    setemp({
      fname: "Ramya",
      lname: "Behara",
    });
  };

  const addusers = () => {
    setstu(["kavya", "abhitha", "Karan","shobitha","alia","Myra"]);
  };
  return (
    <div>
      <button onClick={hmessage}>Change Message</button> <br />
      <button onClick={addempdetails}>Add User Details</button> <br />
      <button onClick={addusers}>Add Users</button>
      <Abhi1 message={message} user={emp} users={stu}/>
    </div>
  );
};

export default Abhi;
