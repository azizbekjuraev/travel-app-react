import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import list from "./components/Data";
console.log(list);
function App() {
  const cards = list.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <>
      <Navbar />
      <section>{cards}</section>
    </>
  );
}

export default App;
