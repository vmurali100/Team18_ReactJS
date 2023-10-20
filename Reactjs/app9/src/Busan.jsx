import React, { Component } from 'react'

export default class Busan extends Component {
  render() {
    return (
      <div>
        <br />
      <table border="3">
                <thead>
                    <tr>
                        <th>Build Name</th>
                        <th>Table Name</th>
                        <th>Queries</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowSpan="4">Build Name1</td>
                        <td rowSpan="2">Table name1</td>
                        <td>query 1</td>
                    </tr>
                    <tr>
                    <td>query 2</td>
                    </tr>
                    <tr>
                        <td rowSpan="2">Table name2</td>
                        <td>query 1</td>
                    </tr>
                    <tr>
                    <td>query 2</td>
                    </tr>
                </tbody>
            </table>
      </div>
    )
  }
}
