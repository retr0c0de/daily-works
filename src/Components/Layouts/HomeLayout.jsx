import React from "react";
import PicWithInfo from "./Contents/templates/PicWithInfo";

const HomeLayout = () => {
  return (
    <div className="space-y-20">
      <PicWithInfo isRowInvert={false} />
      <PicWithInfo isRowInvert={true} />
      <PicWithInfo isRowInvert={false} />
      <PicWithInfo isRowInvert={true} />
    </div>
  );
};

export default HomeLayout;
