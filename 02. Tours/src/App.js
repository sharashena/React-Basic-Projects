import Tours from "./Tours";
import Loading from "./Loading";
import { useFetch } from "./useFetch";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const { loading, tours, setTours, getTours } = useFetch(url);

  const removeTour = id => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button onClick={getTours} className="btn">
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};

export default App;
