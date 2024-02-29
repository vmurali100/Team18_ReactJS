import React, { Component } from 'react'

export default class Student8 extends Component {
    constructor() {
        super();
        this.state = {
            person: {
                name: "Shirt",
                Price: 25.99
            }

        }
    }
    render() {
        return (
            <div>
                <ul>
                    {Object.values(this.state.person).map((val) => {
                        return <li>{val}</li>
                    })}
                </ul><hr />


            </div>
        )
    }
}
