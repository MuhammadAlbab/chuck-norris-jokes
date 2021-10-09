import { useEffect, useState } from "react";
import { getByText } from "../api";
import { useJokes } from "../context";
import ChuckNorris from "../assets/chuck-norris 1.svg";

const Search = (props) => {
  const { value, setValue } = useJokes();
  const [loading, setLoading] = useState(false);
  const { word } = props.location.state;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let response = await getByText(word);
      setValue([...response.data.result]);
      setLoading(false);
    };
    fetchData();
  }, [word, setValue]);

  return (
    <div className="pages search-page">
      <div className="content-wrapper">
        <div>
          <img src={ChuckNorris} alt="ChuckNorris" />
        </div>
        <div className="search-result-info">Search text: {word}</div>
        {loading ? (
          <div className="jokes-teks">Loading. . .</div>
        ) : value.length === 0 ? (
          <div className="jokes-teks">Sorry!, can't find any result</div>
        ) : value.length > 5 ? (
          value.slice(0, 5).map((e) => {
            return (
              <div className="jokes-teks" key={e.id}>
                "{e.value}"
              </div>
            );
          })
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

export default Search;
