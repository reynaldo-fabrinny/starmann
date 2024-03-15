import Alert from "@mui/material/Alert";
import { AxiosError } from "axios";

function SearchResultError({ error }: Readonly<{ error: AxiosError }>) {
  return <Alert severity="error">{error.message}</Alert>;
}

export default SearchResultError;