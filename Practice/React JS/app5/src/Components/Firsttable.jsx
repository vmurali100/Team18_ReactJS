export const Firsttable = () => {
    const First = {
        width: '80%',
        height: '300px',
    };
    return (
        <div className="First">

            <table border={5}>
                <thead>
                    <tr>
                        <th rowSpan={2}>Day</th>
                        <th colSpan={8}>Timings</th>
                    </tr>
                    <tr>
                        <th>9.30to10.30</th>
                        <th>10.30to11.20</th>
                        <th>11.20to11.30</th>
                        <th>11.30to12.30</th>
                        <th>12.30to1.30</th>
                        <th>1.30to2.30</th>
                        <th>2.30to3.15</th>
                        <th>3.15to4.00</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>MONDAY</td>
                        <td>MATHS</td>
                        <td>PHYSICS</td>
                        <td rowSpan={6}>SHORT BREAK</td>
                        <td>CHEMISTRY</td>
                        <td>COMPUTER</td>
                        <td rowSpan={6}>LUNCH BREAK</td>
                        <td colSpan={2}>....COMPUTERLAB.....</td>
                    </tr>
                    <tr>
                        <td>TUESDAY</td>
                        <td>PHYSICS</td>
                        <td>MATHS</td>
                        <td>CHEMISTRY</td>
                        <td>ENGLISH</td>
                        <td colSpan={2}>....PHYSICSLAB....</td>
                    </tr>
                    <tr>
                        <td>WEDNESDAY</td>
                        <td>COMPUTER</td>
                        <td>PHYSICS</td>
                        <td>MATHS</td>
                        <td>KANNADA</td>
                        <td colSpan={2}>....CHEMISTRYLAB....</td>
                    </tr>
                    <tr>
                        <td>THRUSDAY</td>
                        <td>MATHS</td>
                        <td>KANNADA</td>
                        <td>PHYSICS</td>
                        <td>ENGLISH</td>
                        <td colSpan={2}>....COMPUTERLAB....</td>
                    </tr>
                    <tr>
                        <td>FRIDAY</td>
                        <td>ENGLISH</td>
                        <td>MATHS</td>
                        <td>PHYSICS</td>
                        <td>COMPUTER</td>
                        <td>CHEMISTRY</td>
                        <td>KANNADA</td>
                    </tr>
                    <tr>
                        <td>SATURDAY</td>
                        <td>MATHS</td>
                        <td>ENGLISH</td>
                        <td>CHEMISTRY</td>
                        <td>COMPUTER</td>
                        <td colSpan={2}>....SPECIALCLASS....</td>
                    </tr>
                </tbody>
            </table>
        </div >
    );
};