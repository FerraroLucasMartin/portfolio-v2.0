import React from "react";
import Timeline from "../Timeline";

const Sidebar = (props: any) => {
  const { component } = props;

  const componentRender = () => {
    switch (component) {
      case "timeline":
        break;

      default:
        break;
    }
  };

  return (
    <div className='flex overflow-hidden w-full h-full p 8'>
      <Timeline />
    </div>
  );
};

export default Sidebar;
