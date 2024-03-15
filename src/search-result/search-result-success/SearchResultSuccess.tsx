import Box from "@mui/material/Box";
import { useState } from "react";
import Chip from "@mui/material/Chip";
import "./SearchResultSuccess.scss";
import { LaunchModel } from "../../models/LaunchModel";


function SearchResultSuccess({ launch }: Readonly<{ launch: LaunchModel }>) {
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  setInterval(() => {
    const launchDate = new Date(launch.date_utc);
    const currentTime = new Date();

    const elapsed = Math.floor((currentTime.getTime() - launchDate.getTime()) / 1000);
    setElapsedTime(elapsed);
  }, 1000);


  function formatElapsedTime (seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }

  return (
    <Box className="box success-launch-box">
      <div className="header">
        <span className="name">{launch.name}</span>
        <Chip
          className="success-chip"
          label={launch.success ? "succeed" : "failled"}
          color={launch.success ? "success" : "error"}
        />
      </div>
      <div className="footer">
        <div className="time">
          <span className="label">Time Elapsed since launch</span>
          <span className="elapsed-time">{formatElapsedTime(elapsedTime)}</span>
        </div>
        <span className="id">#{launch.id}</span>
      </div>
    </Box>
  );
}

export default SearchResultSuccess;