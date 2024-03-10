import React, { useState } from 'react';

const CrudForm = () => {

    const [formData, setFormData] = useState({ name: '', age: '' });
    const [items, setItems] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [users, setUsers] = useState([
        { fname: "John", lname: "Doe", email: "john.doe@example.com" },
        { fname: "Jane", lname: "Doe", email: "jane.doe@example.com" },
        { fname: "Alice", lname: "Smith", email: "alice.smith@example.com" },
    ]);



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editIndex !== null) {

            const updatedItems = [...items];
            updatedItems[editIndex] = formData;
            setItems(updatedItems);
            setEditIndex(null);
        } else {

            setItems([...items, formData]);
        }
        setFormData({ name: '', age: '' });
    };


    const handleDelete = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };


    const handleEdit = (index) => {
        setFormData(items[index]);
        setEditIndex(index);
    };

    return (
        <div>
            <h2>CRUD Form</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                </label>
                <label>
                    Age:
                    <input type="number" name="age" value={formData.age} onChange={handleInputChange} />
                </label>
                <button type="submit">{editIndex !== null ? 'Update' : 'Add'}</button>
            </form>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.name} - {item.age}
                        <button onClick={() => handleEdit(index)}>Edit</button>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>

        </div>
    );
};




export default CrudForm;
