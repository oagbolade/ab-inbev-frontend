import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [formData, updateFormData] = useState({});

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async () => {
    console.log(formData);

    const URL = "http://localhost:5000/login";

    try {
      const resp = await axios.post(URL, {
        firstName: "Fred",
        lastName: "Flintstone",
      });
      console.log(resp.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div class="main-w3layouts wrapper">
        <h1>Oladayo Agbolade</h1>
        <div class="main-agileinfo">
          <div class="agileits-top">
            <form action="#" method="post">
              <input
                class="text"
                type="text"
                name="name"
                placeholder="Name"
                required=""
                onChange={handleChange}
              />
              <input
                class="text email"
                type="email"
                name="email"
                placeholder="Email"
                required=""
                onChange={handleChange}
              />
              <input
                class="text email"
                type="number"
                name="phone"
                placeholder="Phone Number"
                required=""
                onChange={handleChange}
              />
              <input
                class="text"
                type="password"
                name="password"
                placeholder="Password"
                required=""
                onChange={handleChange}
              />
              <input
                class="text w3lpass"
                type="password"
                name="password2"
                placeholder="Confirm Password"
                required=""
                onChange={handleChange}
              />
              <input
                class="text w3lpass"
                type="file"
                name="passport"
                placeholder="Confirm Password"
                required=""
                onChange={handleChange}
              />
              <input onClick={handleSubmit} type="button" value="SIGNUP" />
            </form>
            <p>
              Don't have an Account? <a href="/login"> Login Now!</a>
            </p>
          </div>
        </div>
        <ul class="colorlib-bubbles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
