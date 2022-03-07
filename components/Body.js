import React from "react";
import FirstSlice from "./FirstSlice";
import DiscoverSlice from "./DiscoverSlice";
import JargonsBusterSlice from "./JargonsBusterSlice";
import GetAppSlice from "./GetAppSlice";
import MobileAnimateSlice from "./MobileAnimateSlice";

function Body() {
  return (
    <div className="w-full">
      <FirstSlice />
      <DiscoverSlice />
      <JargonsBusterSlice />
      <GetAppSlice />
      <MobileAnimateSlice />
    </div>
  );
}

export default Body;
