import { useGlobalContext } from "./context";

// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

const App = () => {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
};

export default App;