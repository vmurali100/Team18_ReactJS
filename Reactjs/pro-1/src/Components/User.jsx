import React from 'react'

export const User = () => {
  return (
    <div>
        <h1>M D R PC SCIENCE COLLEGE</h1>
        <h3>Time Table 2016</h3>
        <h2></h2>
<table border={1}>
    <thead>
    <tr>
<th rowSpan={2}>DAY</th>
<th colSpan={8}>Timings</th>
    </tr>
    <tr id='user'>
        <th>9.30 to 10.30</th>
        <th>10.30 to 11.20</th>
        <th>11.20 to 11.30</th>
        <th>11.30 to 12.30</th>
        <th>12.30 to 1.30</th>
        <th>1.30 to 2.30</th>
        <th>2.30 to 3.30</th>
        <th>3.30 to 4.30</th>
    </tr>
    </thead>
    <tbody>
        <tr>
  <th>Monday</th>
  <td>MATHS</td>
  <td>PHYSICS</td>
  <td rowSpan={6}>SHORT BREAK</td>
  <td>CHEMISTRY</td>
  <td>COMP SCEINCE</td>
  <td rowSpan={6}>LUNCH BREAK</td>
  <td colSpan={2}>...COMP SCIENCE....</td>
  </tr>
  <tr>
  <th>TUESday</th>
  <td>PHYSICS</td>
  <td>MATHS</td>
 
  <td>CHEMISTRY</td>
  <td>ENGLISH</td>
  <td colSpan={2}>....PHYSICS...</td>
  </tr>
  <tr>
  <th>WEDNESday</th>
  <td>COMP SCIENCE</td>
  <td>PHYSICS</td>
  <td>MATHS</td>
  <td>KANADA</td>
  <td colSpan={2}>....CHEMISTRY LAB...</td>
  </tr>
  <tr>
  <th>THURSday</th>
  <td>MATHS</td>
  <td>KANADA</td>
 
  <td>PHYSICS</td>
  <td>ENGLISH</td>
  <td colSpan={2}>...COMP SCIENCE LAB...</td>
  </tr>
  <tr>
  <th>FRIday</th>
  <td>ENGLISH</td>
  <td>MATHS</td>
 
  <td>PHYSICS</td>
  <td>ENGLISH</td>
  <td>CHEMISTRY</td>
  <td>KANADA</td>
  </tr>
  <tr>
  <th>SATURDAY</th>
  <td>CHEMISTRY</td>
  <td>COMPUTER</td>
 
  <td>MATHS</td>
  <td>ENGLISH</td>
  <td colSpan={2}>....SPECIAL CLASS...</td>
  </tr>
    </tbody>

</table>
    </div>
  )
}
export default User;
