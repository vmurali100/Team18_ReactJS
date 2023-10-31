import React from 'react'
import './table.css'
export const Table = () => {
  return (
    <div id='container'>
        <table border={1}>
            <thead>
                <tr>
                    <td rowSpan={2}>A</td>
                    <td>B</td>
                    
                    <td rowSpan={3}>D</td>
                    <td colSpan={2}>E</td>
                    <td>F</td>
                    </tr>
                    <tr>
                        <td>C</td>
                        
                        <td rowSpan={2}>G</td>
                        <td rowSpan={2}>H</td>
                        <td rowSpan={2}>I</td>
                    </tr>
                    <tr>
                        <td colSpan={2}> J</td>
                    </tr>
                    <tr>
                        <td colSpan={3}>K</td>
                        <td>L</td>
                        <td colSpan={2}>M</td>
                    </tr>
            </thead>

        </table>
    </div>
  )
}