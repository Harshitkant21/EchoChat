// import React from "react";
// import OtherUser from "./OtherUser";

// const OtherUsers = () => {
//   return (
//     <div className="overflow-y-auto h-full">
//       <OtherUser />
//       <OtherUser />
//       <OtherUser />
//       <OtherUser />
//       <OtherUser />
//       <OtherUser />
//       <OtherUser />
//       <OtherUser />
//     </div>
//   );
// };

// export default OtherUsers;

import React from "react";
import OtherUser from "./OtherUser";
import "../App.css";
import useGetOtherUsers from "../hooks/useGetOtherUsers";

const OtherUsers = () => {
  useGetOtherUsers();
  return (
    <div className="overflow-y-auto h-full scrollbar-custom pr-1">
      <OtherUser />
      <OtherUser />
      <OtherUser />
      <OtherUser />
      <OtherUser />
      <OtherUser />
      <OtherUser />
      <OtherUser />
    </div>
  );
};

export default OtherUsers;
