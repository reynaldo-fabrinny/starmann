import Box from '@mui/material/Box';
import './LaunchBox.scss';
import { LaunchModel } from "../../models/LaunchModel";

function LaunchBox({launch}: Readonly<{launch: LaunchModel}>) {
  return (
    <Box className="box launch-box">
      <span className="name">{launch.name}</span>
      <span className="id">#{launch.id}</span>
    </Box>
  );
}
export default LaunchBox