export const Table=()=>{
    return <div>
        <table border={2}>
    <thead>
        <tr>
            <th>Build Name</th>
            <th>Table name</th>
            <th>Queries</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowSpan={4}>Build Name 1</td>
            <td rowSpan={2}>Table name 1</td>
            <td>query 1</td>
        </tr> 
        <tr>
           <td>query 2</td>
        </tr> 
        <tr>
            <td  rowSpan={2}>Table name 2</td>
            <td>query 1</td>
        </tr>
        <tr>
            <td>query 2</td>
        </tr>
    </tbody>
        </table>
        <hr />
    </div>
}
