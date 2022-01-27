import { TextField } from "@material-ui/core";

const SearchTextField = () => {
  return (
    <div style={{ paddingLeft: 20 }}>
      <TextField
        id="outlined-basic"
        label="search"
        variant="outlined"
        size="small"
      />
    </div>
  );
};

export default SearchTextField;
