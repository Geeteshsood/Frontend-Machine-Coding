import React from "react";
import explorer from "../data/folderData";
import File from "./File";

const Body = () => {
  return (
    <div>
      <File key={explorer.id} explorer={explorer} />
    </div>
  );
};

export default Body;
