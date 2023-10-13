import React from 'react'

 const Venkateswara = () => {
  return (
    <div>
<table border={1}>

   <thead>
    <tr>
    <th>Build Name</th>
    <th>Table Name</th>
    <th>queries</th>
    </tr>
   </thead>
   <tbody>
    <tr>
        <td rowSpan={"4"}>Build Name</td>
        <td rowSpan={"2"}>Table 1</td>
        <td>Query 1</td>
    </tr>
    <tr>
        <td >Query 2</td>
        
    </tr>
    <tr>
    <td rowSpan={"2"}>Table 2</td>
        <td>Query 1</td>
    </tr>
    <tr>
    <td >Query 2</td>
    </tr>
   </tbody>
</table>
    </div>
  )
}
export default Venkateswara;
