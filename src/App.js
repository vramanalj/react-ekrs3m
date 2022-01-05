import React, { useState } from 'react';
import './style.scss';
import axios from 'axios';

export default function App() {
  const [name, setName] = useState('Venkat');
  const [list, setList] = useState([]);

  const setInput = (e) => {
    setName(e.target.value);
  };

  const fetchData = () => {
    const url = 'https://api.nationalize.io/';
    // Use query string with https://api.nationalize.io/ to get data from API.
    // e.g. https://api.nationalize.io?name=michael

    //Insert code here
    axios.get(url + '?name=' + name).then((res) => {
      console.log(res.data);
      setList(res.data.country);
    });
  };

  return (
    <div className="container">
      <div className="form">
        <div className="inputDiv">
          <label>
            Enter First Name (No Spaces) :
            <input
              type="text"
              value={name}
              onChange={(e) => setInput(e)}
            ></input>
          </label>
        </div>
        <button onClick={fetchData}>Get Nationality</button>
      </div>
      <h2 style={{ 'text-align': 'center' }}>Countries with probability</h2>
      <div className="dataList">
        {/* insert code here to display list of possible countries sorted by highest probability */}
        {list.map((entry) => {
          return (
            <div className="listEntry">
              <div>{entry.country_id}</div>
              <div>{entry.probability}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
