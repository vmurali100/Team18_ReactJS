import React from 'react';

class ArrayIteratorComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: ['apple', 'banana', 'orange']
    };
  }

  render() {
    const { array } = this.state;
    const iterator = array.entries();

    return (
      <div>
        <h2>Array Iterator</h2>
        <ul>
          {[...iterator].map(([index, value]) => (
            <li key={index}>{`${index}: ${value}`}</li>
          ))}
        </ul><hr/>
      </div>
    );
  }
}

export default ArrayIteratorComponent;
