import React, {useState, useEffect} from 'react';
import axios from 'axios';


const UsersPsge = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://btpeel.com/back/test/userlist')
      .then(response => {
        setUsers(response.data.data);
      })
      .catch(error => {
        console.error('error:', error);
      });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Patronymic</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Role</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.patname}</td>
              <td>{user.surname}</td>
              <td>{user['e-mail']}</td>
              <td>{user.role}</td>
              <td>{user.active}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { UsersPsge }
