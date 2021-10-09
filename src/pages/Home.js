import { useState, useEffect } from "react";
import { getRandomOne, getCategories } from "../api";
import TopSearchBar from "../components/TopSearchBar";
import BottomSearchBar from "../components/BottomSearchBar";
import Button from "../components/PrimaryBtn";
import ChuckNorris from "../assets/chuck-norris 1.svg";
import { useJokes } from "../context";

const Home = () => {
  const { value, setValue } = useJokes();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAnother = async () => {
    setLoading(true);
    let joke = await getRandomOne();
    setValue([joke.data]);
    setLoading(false);
  };

  useEffect(() => {
    const initialFetch = async () => {
      setLoading(true);
      let joke = await getRandomOne();
      let categories = await getCategories();
      setValue([joke.data]);
      setCategories(categories.data);
      setLoading(false);
    };
    initialFetch();
  }, [setValue]);

  return (
    <div className="pages home-page">
      <TopSearchBar />
      <div className="content-wrapper">
        <div>
          <img src={ChuckNorris} alt="ChuckNorris" />
        </div>
        {loading ? (
          <div className="jokes-teks">Loading. . .</div>
        ) : (
          value.map((e) => {
            return (
              <div className="jokes-teks" key={e.id}>
                {e.value}
              </div>
            );
          })
        )}
        <div className="btn-another-wrapper">
          <Button text={"Another!"} clickHandler={() => getAnother()} />
        </div>
        <div className="bottom-search-wrapper">
          <BottomSearchBar categories={categories} />
        </div>
      </div>
    </div>
  );
};

export default Home;
