import React, { useState, useEffect } from "react";
import Person from "./Person";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import data from "./data";

const App = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  const prevBtn = () => {
    setIndex(oldIndex => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = people.length - 1;
      }
      return index;
    });
  };
  const nextBtn = () => {
    setIndex(oldIndex => {
      let index = oldIndex + 1;
      if (index > people.length - 1) {
        index = 0;
      }
      return index;
    });
  };

  useEffect(() => {
    const slider = setTimeout(() => {
      setIndex(oldIndex => {
        let index = oldIndex + 1;
        if (index > people.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 4000);
    return () => clearTimeout(slider);
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>
          reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, personIndex) => {
          return (
            <Person
              key={person.id}
              {...person}
              personIndex={personIndex}
              index={index}
              people={people}
            />
          );
        })}
        <button className="prev" onClick={prevBtn}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextBtn}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default App;
