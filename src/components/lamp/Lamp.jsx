import React from "react";
import videoPlayback from "../../assets/videoplayback.webm";
function Lamp() {
  return (
    <video autoPlay loop id="myVideo" width="100%" height="100%">
      <source src={videoPlayback} type="video/webm" />
    </video>
  );
}

export default Lamp;
