import { useState, useEffect, useCallback } from "react";
import {
  FaUser,
  FaEnvelopeOpen,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";
import axios from "axios";

const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState([]);
  const [title, setTitle] = useState("name");
  const [value, setValue] = useState("random person");

  const fetchUsers = useCallback(async () => {
    const { data } = await axios(url);
    const person = data.results[0];
    const { phone, email } = person;
    const { large: image } = person.picture;
    const {
      login: { password },
    } = person;
    const { first, last } = person.name;
    const {
      dob: { age },
    } = person;
    const {
      street: { number, name },
    } = person.location;
    const newPerson = {
      phone,
      email,
      image,
      password,
      age,
      street: `${number} ${name}`,
      name: `${first} ${last}`,
    };

    setPerson(newPerson);
    setLoading(false);
    setTitle("name");
    setValue(newPerson.name);
  }, [url]);

  const handleValue = e => {
    if (e.target.classList.contains("icon")) {
      const newValue = e.target.dataset.label;
      setTitle(newValue);
      setValue(person[newValue]);
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img
            src={(person && person.image) || defaultImage}
            alt="defaultImg"
            className="user-img"
          />
          <p className="user-title">{`my ${title} is`}</p>
          <p className="user-value">{value}</p>
          <div className="values-list">
            <button
              className="icon"
              data-label="name"
              onMouseOver={handleValue}
            >
              <FaUser />
            </button>
            <button
              className="icon"
              data-label="email"
              onMouseOver={handleValue}
            >
              <FaEnvelopeOpen />
            </button>
            <button className="icon" data-label="age" onMouseOver={handleValue}>
              <FaCalendarTimes />
            </button>
            <button
              className="icon"
              data-label="street"
              onMouseOver={handleValue}
            >
              <FaMap />
            </button>
            <button
              className="icon"
              data-label="phone"
              onMouseOver={handleValue}
            >
              <FaPhone />
            </button>
            <button
              className="icon"
              data-label="password"
              onMouseOver={handleValue}
            >
              <FaLock />
            </button>
          </div>
          <button className="btn" type="button" onClick={handleSubmit}>
            {loading ? "loading..." : "random user"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default App;
