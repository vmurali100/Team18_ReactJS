import React, { useState } from "react";
import { Child } from "./Child";
const Person = () => {
    var [myPerson, setMyPerson] = useState("welcome to react JS");
    return (
        <div>
            <h2>Thulasiram</h2>
            <Child thulasi={myPerson} />
        </div>
    )
}
export default Person