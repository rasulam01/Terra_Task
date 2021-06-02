import './TheFormCreater.css'
import axios from "axios";
import { useState } from "react";

import CloseIcon from '../Assets/close_button.png'
export const TheFormCreater = ({url, hideCreateForm }) => {
  const [value, setValue] = useState("");

  const setInputValue = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let r = Math.round(Math.random(0, 255) * 255)
    let g = Math.round(Math.random(0, 255) * 255)
    let b = Math.round(Math.random(0, 255) * 255)
    let a = (Math.random().toFixed(2) * .5) 
  

    const object = {
      description: value,
      background: `rgb(${r},${g},${b},${a})`
    };
    axios
      .post(url, object)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const elements = [
    {
      id: 1,
      open: false,
      api: 'https://60a7a2c88532520017ae4a3b.mockapi.io/analytics'
    },
    {
      id: 2,
      open: false,
      api: 'api///'
    }
  ]
  

  return (
    <form className="theFormCreater" onSubmit={handleSubmit}>
      <h2>Put a plan for the week</h2>
      <img src={CloseIcon} onClick={hideCreateForm} alt="Close"/>
      <div>
        <input
          type="text"
          name="text"
          placeholder="Plan description"
          onChange={setInputValue}
          value={value}
        />
      </div>
      <div>
        <button type="submit" className="pushButton">
          Post a post
        </button>
        
      </div>
    </form>
  );
};
