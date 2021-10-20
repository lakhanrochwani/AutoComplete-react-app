import React, { useState } from 'react';
import './style.css';

export default function App() {
  let arr = [
    'Adam',
    'Ash',
    'Ashley',
    'Abhi',
    'Anna',
    'Bob',
    'Baley',
    'Dank',
    'David',
    'Lakhan',
    'Lucky',
  ];
  const [name, setName] = useState();
  const [list, setList] = useState();
  let suggestion = [];

  const autoComplete = (e) => {
    let { value } = e.target;
    setName(value);
    arr.forEach((x) => {
      if (x.substr(0, value.length).toUpperCase() === value.toUpperCase()) {
        suggestion.push(x);
        setList(
          suggestion.map((x) => {
            return (
              <li
                onClick={() => {
                  setName(x);
                }}
              >
                {x}
              </li>
            );
          })
        );
      }
    });
    if (value.length === 0) {
      setList([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          autoComplete(e);
        }}
        value={name}
      />
      <p>{list}</p>
    </div>
  );
}
