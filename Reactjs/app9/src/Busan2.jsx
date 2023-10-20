import React, { Component } from 'react'

export default class Busan2 extends Component {
  render() {
    return (
      <div>
         <table border="3">
                <thead>
                    <tr>
                        <th rowSpan={2}>Day</th>
                        <th colSpan={8}>TIMINGS</th>
                    </tr>
                <tr id="user">
                        <th>9:30 to 10:30</th>
                        <th>10:30 to 11:20</th>
                        <th>11:20 t0 11:30</th>
                        <th>11:30 to 12:30</th>
                        <th>12:30 to 1:30</th>
                        <th>1:30 to 2:30</th>
                        <th>2:30 to 3:30</th>
                        <th>3:30 to 4:30</th>
                        </tr>   
                </thead>
                <tbody>
                    <tr>
                        <th>MONDAY</th>
                        <td>MATHS</td>
                        <td>PHYSICS</td>
                        <td rowSpan={6}>SHORT BREAK</td>
                        <td>CHEMISTRY</td>
                        <td>COMP SCI</td>
                        <td rowSpan={6}>LUNCH BREAK</td>
                        <td colSpan={2}>..... COMP SCI LAB.....</td>
                    </tr>
                    <tr>
                        <th>TUESDAY</th>
                        <td>PHYSICS</td>
                        <td>MATHS</td>
                        <td>CHEMISTRY</td>
                        <td>ENGLISH</td>
                        <td colSpan={2}>.....PHYSICS LAB.....</td>
                    </tr>
                    <tr>
                        <th>WEDNESDAY</th>
                        <td>COMP SCI</td>
                        <td>PHYSICS</td>
                        <td>MATHS</td>
                        <td>KANNADA</td>
                        <td colSpan={2}>.....CHEMISTRY LAB.....</td>
                    </tr>
                    <tr>
                        <th>THURSDAY</th>
                        <td>MATHS</td>
                        <td>KANNADA</td>
                        <td>PHYSICS</td>
                        <td>ENGLISH</td>
                        <td colSpan={2}>.....COMP SCI LAB.....</td>
                    </tr>
                    <tr>
                        <th>FRIDAY</th>
                        <td>ENGLISH</td>
                        <td>MATHS</td>
                        <td>PHYSICS</td>
                        <td>COMP SCI</td>
                        <td>CHEMISTRY</td>
                        <td>KANNADA</td>
                    </tr>
                    <tr>
                        <th>SATURDAY</th>
                        <td>MATHS</td>
                        <td>ENGLISH</td>
                        <td>CHEMISTRY</td>
                        <td>COMP SCI</td>
                        <td colSpan={2}>.....SPECIAL CLASS.....</td>
                    </tr>
                </tbody>
            </table>
            <br />
      </div>
    )
  }
}
