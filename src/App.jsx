import { useState, useEffect } from "react";
import "./App.css";
import Array1 from "./data/Array_1.json";
import Array2 from "./data/Array_2.json";

function App() {
  const [array, setArray] = useState([...Array1, ...Array2]);

  const [uniqArray, setUnicArray] = useState([]);

  useEffect(() => {
    const uniqueNumbers = [];
    for (let i = 0; i < array.length; i++) {
      let isUnique = true;
      for (let j = 0; j < uniqueNumbers.length; j++) {
        if (array[i].id === uniqueNumbers[j].id) {
          isUnique = false;
          break;
        }
      }
      if (isUnique) {
        uniqueNumbers.push(array[i]);
      }
    }
    setUnicArray(uniqueNumbers);
  }, [array]);

  const DeleteList = (id) => {
    const filterArray = uniqArray.filter((item) => item.id !== id);
    setUnicArray(filterArray);
  };

  return (
    <>
      <div>
        {uniqArray.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.body}</p>
            <button onClick={() => DeleteList(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
