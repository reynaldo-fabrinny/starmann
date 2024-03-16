import Grid from "@mui/material/Grid";
import "./SearchResult.scss"; 
import SearchResultError from "./search-result-error/SearchResultError";
import SearchResultSuccess from "./search-result-success/SearchResultSuccess";

function SearchResult({AppState}) {
  const { launchResult, launchResultError } = AppState;
  const showResultGrid = launchResult?.id || launchResultError?.code; 

  let messageComponent;
  if (launchResult?.id) {
    messageComponent = <SearchResultSuccess launch={launchResult} />;
  } else {
    messageComponent = <SearchResultError error={launchResultError} />;
  }

  if (showResultGrid) {
    return (
      <div className="search-result-grid">
        <h3>Search result</h3>
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={12}>
            {messageComponent}
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return <></>;
  }
}

export default SearchResult;