import { Anchortag } from "./Anchortag";

export function Table(){
return <table border={2}>
    <thead>
        <tr>
            <th>Movie Name</th>
            <th>Hero</th>
            <th>Heroine</th>
            <th>Director</th>
            <th>Producer</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Pushpa</td>
            <td>Allu Arjun</td>
            <td>Rahsmika</td>
            <td>Sukumar</td>
            <td>Ravi Shankar</td>
        </tr>
        <tr>
            <td>Arya</td>
            <td>Allu Arjun</td>
            <td>Anu mehta</td>
            <td>Sukumar</td>
            <td>Dil Raj</td>
        </tr>
    </tbody>
</table>,
<Anchortag name ={"Yoga"}phno ={123435355789675}/>

}