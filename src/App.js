
import React, { useState, useEffect } from 'react';
import Style from './App.module.css';
import axios from 'axios';


let url = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [data, setData] = useState([]);


  const removeUser = (index) => {
    data.splice(index, 1);
    setData([...data]);
  };

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className={Style.Wrapper}>
      <table classname={Style.container}>
        <thead className={Style.body}>
          <tr>
            <td>Id</td>
            <td>UserName</td>
            <td>Email</td>
            <td>Action</td>

          </tr>
        </thead>
        <tbody className={Style.Subcontainer}>
          {
            data.length > 0 &&
            data.map((items, index) => {
              return (
                <tr key={items.id}>
                  <td>{items.id}</td>
                  <td>{items.username}</td>
                  <td>{items.email}</td>
                  <td onClick={() => removeUser(index)} className="actions">
                    ❌
                  </td>

                </tr>
              )
            })
          }
        </tbody>
      </table>

    </div>
  );
}



export default App;
