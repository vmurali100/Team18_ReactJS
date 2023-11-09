import React, { useState } from "react";

export const Usualform = () => {
  const [userdetails, setUserdetails] = useState({
    nick: "",
    ecommerce: "",
    client: "",
    pickup: "",
    solutions: "",
  });
  const handleChangeevent=(e)=>{
var inputname=e.target.name
var newuserdetails={...userdetails}
newuserdetails[inputname]=e.target.value
setUserdetails(newuserdetails)
}
 const handlesubmit=()=>{
    console.log(userdetails)

}
const handlechange=()=>{

    console.log(userdetails)
}
  return (
    <div>
      <h1>Add your carrier accounts</h1>
      <p>
        Connect your shipping accounts to compare different rates for each
        shipment
      </p>
      <br />
      <br />
      <h2>Connect your DHL eCommerce Solutions account</h2>
      <label htmlFor="">Status</label><br />
      <button type="button">Active</button>
      <button type="button">inactive</button><br />
      <label htmlFor="nick">Nickname</label><br />
      <input type="text" name="nick" value={userdetails.nick}  onChange={handleChangeevent}/><br />
      <p>This nickname will be used to reference this account</p>
      <label htmlFor="">DHL eCommerce Solutions client ID</label><br />
      <input type="text" name="ecommerce" id="" value={userdetails.ecommerce} onChange={handleChangeevent} />
      <br />
      <label htmlFor="">DHL eCommerce Solutions client secret</label><br />
      <input type="text" name="client" value={userdetails.client} onChange={handleChangeevent} /><br />
      <label htmlFor="">DHL eCommerce solutions pickup ID</label><br />
      <input type="text" name="pickup" value={userdetails.pickup} onChange={handleChangeevent} /><br />
      <label htmlFor="">DHL eCommerce solutions distribution center</label><br />
      <input type="text" name="solutions" value={userdetails.solutions} onChange={handleChangeevent} /><br /><br />
      <button type="button" onClick={handlesubmit}>Previous</button>
      <button type="button" onClick={handlechange}>Connect Account</button>
    </div>
  );
};
