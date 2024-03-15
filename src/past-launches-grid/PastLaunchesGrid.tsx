import Grid from "@mui/material/Grid";
import "./PastLaunchesGrid.scss";
import { LaunchModel } from "../models/LaunchModel";
import LaunchBox from "./launch-box/LaunchBox";

function PastLaunchesGrid({launches}: Readonly<{launches: LaunchModel[]}>) {

  const launchesComponent = launches.map((launchModel: LaunchModel) => (
    <Grid key={launchModel.id} item md={1}>
      <LaunchBox launch={launchModel} />
    </Grid>
  ));
  return (
    <div className="past-launches-grid">
      <h3>Past launches</h3>
      <Grid
        container
        columns={{ xs: 1, md: 3 }}
        spacing={2}
        justifyContent="center"
      >
        {launchesComponent}
      </Grid>
    </div>
  );
}
export default PastLaunchesGrid;
