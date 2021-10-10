import { useEffect, useState } from "react";
import { getByCategories } from "../api";
import { useJokes } from "../context";
import ChuckNorris from "../assets/chuck-norris 1.svg";

const Category = (props) => {
  const { value, setValue } = useJokes();
  const [loading, setLoading] = useState(false);
  const { word } = props.location.state;

  useEffect(() => {
    setValue([]);
    const fetchData = async () => {
      setLoading(true);
      let response = await getByCategories(word);
      if (response !== undefined) {
        setValue([response.data]);
      }
      setLoading(false);
    };
    fetchData();
  }, [word, setValue]);

  return (
    <div className="pages category-page">
      <div className="content-wrapper">
        <div>
          <img src={ChuckNorris} alt="ChuckNorris" />
        </div>
        <div className="search-result-info">Category: {word}</div>
        {loading ? (
          <div className="jokes-teks">Loading. . .</div>
        ) : value.length === 0 ? (
          <div className="jokes-teks">Sorry!, can't find any result</div>
        ) : (
          value.map((e) => {
            return (
              <div className="jokes-teks" key={e.id}>
                "{e.value}"
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Category;
