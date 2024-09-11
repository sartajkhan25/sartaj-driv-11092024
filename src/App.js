import React, { useState } from "react";
import "./App.css";
import dataObj from "./source_file.js";

export default function App() {
  const [isVisible, setVisible] = useState(true);

  console.log("rendered");
  return (
    <div className="App">
      <h2 onClick={() => setVisible(!isVisible)} className="root-parent">{dataObj.name}</h2>
      {!!dataObj.items &&
        isVisible &&
        dataObj.items.map((item) => {
          if (item.isFolder) return <Folder data={item} />;
          else return <Item itemData={item} />;
        })}
    </div>
  );
}

const Folder = ({ data }) => {
  const [isVisible, setVisible] = useState(true);

  return (
    <div className="parent">
      <h3 onClick={() => setVisible(!isVisible)}>{data.name}</h3>
      {isVisible &&
        data.items.map((b) => {
          if (b.isFolder) {
            return <Folder data={b} />;
          } else {
            return <Item itemData={b} />;
          }
        })}
    </div>
  );
};

const Item = ({ itemData }) => {
  return (
    <div className="item">
      <p>{itemData.name}</p>
    </div>
  );
};
