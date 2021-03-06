import { useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Paper from "@mui/material/Paper";
import Button from "../components/PrimaryBtn";

const BottomSearchBar = ({ categories }) => {
  const history = useHistory();
  const [textInput, setTextInput] = useState("");

  const handleBot = () => {
    textInput === ""
      ? alert("Category can't be empty!")
      : history.push({
          pathname: "/category",
          search: `?query=${textInput}`,
          state: { word: textInput },
        });
  };

  const handleKey = (e) => {
    setTextInput(e.target.value);
    if (e.key === "Enter") {
      textInput === ""
        ? alert("Category can't be empty!")
        : history.push({
            pathname: "/category",
            search: `?query=${textInput}`,
            state: { word: textInput },
          });
    }
    return;
  };

  return (
    <div className="bottom-search-bar">
      <Autocomplete
        id="select-category"
        sx={{ width: 223 }}
        options={categories}
        autoHighlight
        onChange={(e) => setTextInput(e.target.innerHTML)}
        getOptionLabel={(option) => option}
        PaperComponent={({ children }) => (
          <Paper
            style={{
              textTransform: "capitalize",
              fontWeight: "600",
              fontStyle: "normal",
              fontFamily: "Open Sans",
              fontSize: "16px",
            }}
          >
            {children}
          </Paper>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search jokes by category"
            size="small"
            onKeyUp={(e) => handleKey(e)}
          />
        )}
      />
      <Button text={"Search!"} clickHandler={handleBot} />
    </div>
  );
};

export default BottomSearchBar;
