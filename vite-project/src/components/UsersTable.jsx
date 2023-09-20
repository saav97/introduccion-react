// components/UserTable.js 

import useUsers from '../hooks/useUsers';

function UserTable() {
  
  const lista = useUsers();
  console.log(lista);
  const users = lista.users

  if (lista.length === 0){
    return (
      <h1>Cargando usuarios</h1>
    )
  }else{
    return (
      <table>
         <thead>
          <tr>
            <th>Username</th>
            <th>Password</th>
            <th>Email</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.email}</td>
              <td>{user.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }

  /**/
}

export default UserTable