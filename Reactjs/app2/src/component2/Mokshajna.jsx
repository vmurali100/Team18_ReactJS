export const Mokshajna =(props)=>{
    return  <div>
        <h3>This is child component</h3>
     <h4>{props.name}</h4>
     <h5>{props.email}</h5>
     <h6>Phone Number:{props.phone}</h6>
      <h2>lname:{props.reddy}</h2> 
    </div>
}