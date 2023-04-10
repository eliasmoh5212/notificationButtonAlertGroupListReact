import { Button } from "./components/Button";
import Alert from "./components/Alert";
import React, { useState } from "react";
import ListGroup from "./components/ListGroup";
import { successNotification } from "./notification";
function App() {
  const [onChange, setOnChange] = useState(false);
  let items = [
    { name: "NewYork", disc: "This is the City of United States" },
    { name: "Kabul", disc: "This is the Capital of Afghanistan" },
    { name: "Tehran", disc: "This is the Capital of Tehran" }
  ];
  const handleSelectedItem = (name: String, Disc: String) => {
    successNotification(name, Disc);
  };

  return (
    <>
      {onChange == true && (
        <Alert onClose={() => setOnChange(false)}>Some Messaeg for Alert</Alert>
      )}
      <Button color="danger" onClick={() => setOnChange(true)}>
        New Button
      </Button>
      <ListGroup
        items={items}
        heading="Miami"
        onSelectItem={handleSelectedItem}
      ></ListGroup>
    </>
  );
}

export default App;
