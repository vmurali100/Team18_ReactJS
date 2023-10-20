import React, { Component } from 'react'

export default class Busan1 extends Component {
  render() {
    return (
      <div>
        <table border="3" id="hi">
        <tbody>
            <tr>
                <td rowSpan="2">A</td>
                <td>B</td>
                <td rowSpan="3">D</td>
                <td colSpan="2">E</td>
                <td>F</td>
            </tr>
            <tr>
                <td>C</td>
                <td rowSpan="2">G</td>
                <td rowSpan="2">H</td>
                <td rowSpan="2">I</td>
            </tr>
            <tr>
                <td colSpan="2">J</td>
            </tr>
            <tr>
                <td colSpan={3}>K</td>
                <td>L</td>
                <td colSpan="2">M</td>
            </tr>
        </tbody>
    </table>
      </div>
    )
  }
}
