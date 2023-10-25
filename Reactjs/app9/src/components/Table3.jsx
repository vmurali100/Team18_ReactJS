import React from 'react'

export const Table3 = () => {
  return (
    <div>
        <h1>Table in HTML</h1>
        <table border={1}>
            <thead>
            <tr>
                <td rowSpan={2}>A</td>
                <td>B</td>
                <td rowSpan={3}>D</td>
                <td colSpan={2}>E</td>
                <td>F</td>
            </tr>
            </thead>
        </table>
    </div>
  )
}

