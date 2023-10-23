export const Lasttable = () => {
    return (
        <table border={1}>
            <thead>
                <tr>
                    <th>Build Name</th>
                    <th>Table Name</th>
                    <th>Queries</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowSpan={4}>Build Name 1</td>
                    <td rowSpan={2}>Table Name 1</td>
                    <td>Query 1</td>
                </tr>
                <tr>
                    <td>Query 2</td>
                </tr>
                <tr>
                    <td rowSpan={2}>Table Name 2</td>
                    <td>Query 1</td>
                </tr>
                <tr>
                    <td>Query 2</td>

                </tr>
            </tbody>
        </table >
    )
}