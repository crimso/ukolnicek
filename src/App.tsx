import "./App.css";
import { Item } from "./components/Item";
import { useState } from "react";
import { ItemProps } from "./components/Item";

function App() {
  const [tasks, setTasks] = useState<ItemProps[]>([]);

  return (
    <>
      <Item done={false} title={"Ukol"} description={"testovat"} />
    </>
  );
}

export default App;
