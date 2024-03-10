import React, { useState } from 'react';

const CrudApp = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, { id: Date.now(), value: inputValue }]);
      setInputValue('');
    }
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      <h2>CRUD Application</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter item"
      />
      <button onClick={addItem}>Add</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Item</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.value}</td>
              <td>
                <button onClick={() => removeItem(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrudApp;
