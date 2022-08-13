import axios from "axios";
import React, { useState, useContext } from "react";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const API_KEY = "https://opentdb.com/api.php?";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [error, setError] = useState(false);
  const [modal, setModal] = useState(false);
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: "sports",
    difficulty: "easy",
  });

  const fetchQuestions = async url => {
    try {
      setWaiting(false);
      const response = await axios(url);
      if (response) {
        const data = response.data.results;
        if (data.length > 0) {
          setQuestions(data);
          setLoading(false);
          setWaiting(false);
          setError(false);
        } else {
          setWaiting(true);
          setError(true);
        }
      } else {
        setWaiting(true);
      }
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  };

  const nextQuestion = () => {
    setIndex(currIndex => {
      const next = currIndex + 1;
      if (next > questions.length - 1) {
        openModal();
        return 0;
      } else {
        return next;
      }
    });
  };

  const checkAnswer = value => {
    if (value) {
      setCorrect(correct + 1);
    }
    nextQuestion();
  };

  const openModal = () => setModal(true);
  const closeModal = () => {
    setWaiting(true);
    setCorrect(0);
    setModal(false);
  };

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setQuiz({ ...quiz, [name]: value });
  };
  const handleSubmit = e => {
    const { amount, category, difficulty } = quiz;
    const url = `${API_KEY}amount=${amount}&category=${table[category]}&difficulty=${difficulty}&type=multiple`;
    e.preventDefault();
    fetchQuestions(url);
  };

  return (
    <AppContext.Provider
      value={{
        waiting,
        loading,
        questions,
        index,
        correct,
        error,
        modal,
        nextQuestion,
        checkAnswer,
        closeModal,
        quiz,
        handleChange,
        handleSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
