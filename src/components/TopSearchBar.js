import { useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "../components/PrimaryBtn";

const TopSearchBar = () => {
  const history = useHistory();
  const [textInput, setTextInput] = useState("");

  return (
    <div className="top-search-bar">
      <TextField
        id="outlined-basic"
        label="Search jokes by text"
        variant="outlined"
        size="small"
        onChange={(e) => setTextInput(e.target.value)}
      />
      <Button text={"Search!"} clickHandler={() => history.push("/search")} />
    </div>
  );
};

export default TopSearchBar;
