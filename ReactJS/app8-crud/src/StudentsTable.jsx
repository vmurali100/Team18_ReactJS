import React from 'react'

const StudentsTable = ({students,handleEditStudent,handleDelete}) => {
  return (
    <div>
       <table border={1}>
          <thead>
            <tr>
              <th>University </th>
              <th>Institute</th>
              <th>Brach</th>
              <th>Degree</th>
              <th>Status</th>
              <th>Average</th>
              <th>Experience</th>
              <th>Website</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {students.map((usr, i) => {
              return (
                <tr key={i}>
                  <td>{usr.university}</td>
                  <td>{usr.institute}</td>
                  <td>{usr.branch}</td>
                  <td>{usr.degree}</td>
                  <td>{usr.status}</td>
                  <td>{usr.averageCPI}</td>
                  <td>{usr.experience}</td>
                  <td>{usr.website}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleEditStudent(usr, i);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleDelete(usr, i);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
    </div>
  )
}

export default StudentsTable
