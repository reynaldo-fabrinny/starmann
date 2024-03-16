import Grid from "@mui/material/Grid";
import "./PastLaunchesGrid.scss";
import { LaunchModel } from "../models/LaunchModel";
import LaunchBox from "./launch-box/LaunchBox";

function PastLaunchesGrid({launches}: Readonly<{launches: LaunchModel[]}>) {

  const launchesComponent = launches.map((launchModel: LaunchModel) => (
    <Grid key={launchModel.id} item xs={12} md={4} >
      <LaunchBox launch={launchModel} />
    </Grid>
  ));
  return (
    <div className="past-launches-grid">
      <h3>Past launches</h3>
      <Grid container spacing={1} justifyContent="left">
        {launchesComponent}
      </Grid>
    </div>
  );
}
export default PastLaunchesGrid;
