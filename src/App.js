import React,{useState} from 'react';
import './App.css';

function App() {
 
    const [logs, setLogs] = useState([]);

    function handleMouseOver() {
      const time = new Date().toLocaleString();
      const event = { time, eventName:  "in" };
      setLogs((prevLogs) => [...prevLogs, event]);
    }
  
    function handleMouseOut() {
      const time = new Date().toLocaleString();
      const event = { time, eventName:  "out" };
      setLogs((prevLogs) => [...prevLogs, event]);
    }
  
    return (
      <div className="container">
        <div className="sub-container" >
          <div className="header">
        <h1 onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          Mouse Moment
        </h1>
        <h2>.......</h2>
       </div>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th> Date & Time</th>
                <th>Event Name</th>
              </tr>
            </thead>
            <tbody>
              {
              logs.map((log, index) => (
                <tr key={index}>
                  <td>{log.time}</td>
                  <td>{log.eventName}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    );
 
}

export default App;
