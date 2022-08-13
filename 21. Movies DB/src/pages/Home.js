import React from "react";
import Form from "../components/Form";
import Movies from "../components/Movies";
import {useGlobalContext} from '../context';

const Home = () => {
  const data = useGlobalContext();
  return (
    <main>
      <Form />
      <Movies />
    </main>
  );
};

export default Home;
