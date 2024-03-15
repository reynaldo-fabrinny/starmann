import { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import "./SearchForm.scss"; 

const FETCH_LAUNCH_URL = "https://api.spacexdata.com/v4/launches/";

function SearchForm({AppState}) {
  const { setLaunchResult, setLaunchResultError } = AppState;
  const [inputValue, setInputValue] = useState('');

  const search = async (event) => {
    event.preventDefault();
    
    try {
      axios
        .get(`${FETCH_LAUNCH_URL}${inputValue}`)
        .then((response) => {
          setLaunchResult(response.data);
          setLaunchResultError("");
        })
        .catch((error) => {
          setLaunchResultError(error);
          setLaunchResult({});
        });

      setInputValue("");
    } catch (error) {
      console.error("Error trying to find a launch:", error);
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form className="search-form" onSubmit={search}>
      <Input
        required
        name="query"
        className="input"
        value={inputValue}
        onChange={handleChange}
        size="small"
        placeholder="Search for a launch ID"
      />
      <Button type="submit" variant="outlined">
        Search
      </Button>
    </form>
  );
}

export default SearchForm;