import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "../components/PrimaryBtn";

const BottomSearchBar = ({ categories }) => {
  return (
    <div className="bottom-search-bar">
      <Autocomplete
        id="select-category"
        sx={{ width: 223 }}
        options={categories}
        autoHighlight
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search jokes by category"
            size="small"
          />
        )}
      />
      <Button text={"Search!"} clickHandler={() => alert("Search Home")} />
    </div>
  );
};

export default BottomSearchBar;
