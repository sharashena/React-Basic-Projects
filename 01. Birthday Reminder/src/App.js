import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthday today</h3>
        {people.map(person => {
          return <List key={person.id} {...person} />;
        })}
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
};

export default App;
