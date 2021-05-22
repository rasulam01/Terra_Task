import './TheFormCreater.css'
import axios from "axios";
import { useState } from "react";
import CloseIcon from '../Assets/close_button.png'
export const TheFormCreater = ( hideCreateForm ) => {
  const [value, setValue] = useState("");

  const setInputValue = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const object = {
      createdAt: value,
      name: "flip-flop",
      avatar: "111"
    };
    axios
      .post(`https://60a7a2c88532520017ae4a3b.mockapi.io/weekgoal`, object)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deletePosts = () => {
      axios.delete(`https://60a7a2c88532520017ae4a3b.mockapi.io/weekgoal`)
  }

  return (
    <form className="theFormCreater" onSubmit={handleSubmit}>
      <h2>Put a plan for the week</h2>
      <div>
        <input
          type="text"
          name="text"
          placeholder="Plan description"
          onChange={setInputValue}
          value={value}
        ></input>
      </div>
      <div>
        <button type="submit" className="pushButton">
          Post a post
        </button>
        <button onClick={deletePosts} className="pushButton" >
          Delete posts
        </button>
      </div>
    </form>
  );
};
