
export const Yeosu = (props) => {

    return (
        <div>
            <h2>Employee Name is:{props.empname},{props.age},{props.mail},{props.phno}</h2>

            <ul>
                <li>Firstname is:{props.user.fname}</li>
                <li>user lname is:{props.user.lname}</li>
            </ul>

            <ul>
                {props.users.map(function (usr) {
                    return <li>{usr}</li>
                })}
            </ul>
        </div>
    );
};
