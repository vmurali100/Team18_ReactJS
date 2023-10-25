import React from 'react'
import "./Table2.css"

export const Table2 = () => {
  return (
    <div id='go'>
       
        <table border={1}>
            <thead>
                <tr>
                    <th>BuildName</th>
                    <th >Table name</th>
                    <th>Queries</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td rowSpan={4}>Build Name1</td>
                    <td rowSpan={2}>Tablename1</td>
                    <td >query1</td>
                </tr>
                <tr>
                    <td>query 2</td>

                </tr>
                <tr>
                    <td rowSpan={2}> table name 2</td>
                    <td> query1</td>
                </tr>
                <tr>
                    <td>query 2</td>
                </tr>
                </tbody>
            

        </table>
    </div>
  )
}
