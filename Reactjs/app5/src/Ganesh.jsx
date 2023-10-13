const Ganesh = (props) => {
    return (
        <div>
            <h2>{props.msg}</h2>
            <ul>
                <li>{props.emp.fname}</li>
                <li>{props.emp.lname}</li>
            </ul>
            <ul>
                    {props.stu.map(function (val) {
                        return <li>{val}</li>
                    })}
            </ul>
        </div>
    );
};
export default Ganesh;