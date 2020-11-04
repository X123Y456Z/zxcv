import React, { useState } from "react";
import "./styles.css";
import CAT1 from "./cat1.jpg";
import CAT2 from "./cat2.jpg";
import { useForm } from "react-hook-form";

const colorSelect = {
  firstName: CAT1,
  lastName: CAT2
};

const mainContainer = {
  display: "flex",
  justifyContent: "space-around"
};

const singleContainer = {
  display: "block",
  heigth: "100%",
  width: "50%"
};

const inputField = {
  display: "block",
  margin: "20px",
  height: "40px",
  borderRadius: "5px"
};

const button = {
  display: "block",
  margin: "0 0 0 20px",
  height: "40px",
  widht: "80px",
  fontSize: "14px",
  backgroundColor: "white",
  borderRadius: "5px"
};

export default function App() {
  const [color, setColor] = useState(colorSelect.firstName);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: ""
    }
  });

  const onFieldClick = (event) => {
    setColor(colorSelect[event.target.name]);
  };

  const buttonClicked = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <div style={mainContainer}>
        <div style={singleContainer}>
          <input
            type="text"
            name="firstName"
            onFocus={onFieldClick}
            style={inputField}
            ref={register}
          />
          <input
            type="text"
            name="lastName"
            onFocus={onFieldClick}
            style={inputField}
            ref={register}
          />
          <button
            style={button}
            onClick={handleSubmit(buttonClicked)}
            type="button"
          >
            Submit me
          </button>
        </div>
        <div style={singleContainer}>
          <img src={color} style={{ width: "400px" }} />
        </div>
      </div>
    </div>
  );
}
