import { useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "../components/PrimaryBtn";

const TopSearchBar = () => {
  const history = useHistory();
  const [textInput, setTextInput] = useState("");

  const handleTop = () => {
    textInput === ""
      ? alert("Text can't be empty!")
      : history.push({
          pathname: "/search",
          search: `?query=${textInput}`,
          state: { word: textInput },
        });
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      textInput === ""
        ? alert("Text can't be empty!")
        : history.push({
            pathname: "/search",
            search: `?query=${textInput}`,
            state: { word: textInput },
          });
    }
    return;
  };

  return (
    <div className="top-search-bar">
      <TextField
        id="outlined-basic"
        label="Search jokes by text"
        variant="outlined"
        size="small"
        onKeyUp={(e) => handleKey(e)}
        onChange={(e) => setTextInput(e.target.value)}
      />
      <Button text={"Search!"} clickHandler={handleTop} />
    </div>
  );
};

export default TopSearchBar;
