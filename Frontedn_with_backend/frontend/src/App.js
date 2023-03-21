// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [err, setError] = useState("");
  if (users.length == 0) {

    axios.get("http://localhost:5000/Users")
      .then((res) => { console.log(res.data); setUsers(res.data); })
      .catch((err) => { setError(err) });
  }
  const UserList=users.map((value)=><tr key={value._id}> <td>Email Id is : {value.email_id}</td><td>Name is : {value.name}</td></tr>);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          List of Users
        </p>
      </header>
      <table>
        <tr>
          <th>Email Id</th>
          <th>Name</th>
        </tr>
        {UserList}
      </table>
    </div>
  );
}

export default App;
