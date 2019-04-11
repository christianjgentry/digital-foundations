import React from "react";
import { Player } from "video-react";

const inception = require("../media/inception-video.mp4");

export default props => {
  return (
    <Player
      playsInline
      poster="/assets/poster.png"
      src={inception}
      fluid={true}
      poster="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7528fa32-f037-470a-831e-da5a7d6a2621/d37qerr-ed9651f5-024e-4b0f-a1e8-a4c2d4642c83.png/v1/fill/w_1192,h_670,q_70,strp/inception_maze_wallpaper_by_crzisme_d37qerr-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzc1MjhmYTMyLWYwMzctNDcwYS04MzFlLWRhNWE3ZDZhMjYyMVwvZDM3cWVyci1lZDk2NTFmNS0wMjRlLTRiMGYtYTFlOC1hNGMyZDQ2NDJjODMucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.GYZelCU7WMNST7COv1Ae0pXQsZtdiGKrjpVHwuV6oGU"
    />
  );
};
