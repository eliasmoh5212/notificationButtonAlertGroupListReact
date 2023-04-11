import React from "react";
import { useState, useEffect } from "react";

interface Props {
  items: { name: String; disc: String }[];
  heading: String;
  onSelectItem: (itemname: String, itemDisc: String) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // items.map(item => <li className="list-group-item">{item}</li>);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Items to Display</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            // onClick={() => console.log(item)}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item.name, item.disc);
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
