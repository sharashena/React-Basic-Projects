import { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";

const App = () => {
  const { data, loading } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  const checkNumber = number => {
    if (number > data.length - 1) {
      setPage(0);
    } else if (number < 0) {
      setPage(data.length - 1);
    }
    return number;
  };

  const nextBtn = () => {
    setPage(currPage => {
      let newPage = currPage + 1;
      return checkNumber(newPage);
    });
  };

  const prevBtn = () => {
    setPage(currPage => {
      let newPage = currPage - 1;
      return checkNumber(newPage);
    });
  };

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);
  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "pagination"}</h1>
        <div className="underline"></div>
        <section className="followers">
          <div className="container">
            {followers.map(follower => {
              return <Follower key={follower.id} {...follower} />;
            })}
          </div>
          {!loading && (
            <div className="btn-container">
              <button className="prev-btn" onClick={prevBtn}>
                prev
              </button>
              {data.map((_, index) => {
                return (
                  <button
                    key={index}
                    className={
                      page === index ? "page-btn active-btn" : "page-btn"
                    }
                    onClick={() => setPage(index)}
                  >
                    {index + 1}
                  </button>
                );
              })}
              <button className="next-btn" onClick={nextBtn}>
                next
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default App;
