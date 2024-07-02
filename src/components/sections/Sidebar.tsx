import React from "react";
import Timeline from "../Timeline";
import Wip from "../Wip";
import About from "./About";

interface sidebarProps {
  activeNavTab: string | undefined;
}

const Sidebar = ({ activeNavTab }: sidebarProps) => {
  const componentRender = () => {
    switch (activeNavTab) {
      case "timeline":
        return <Timeline />;
        break;

      case "projects":
        return <Wip />;
        break;

      case "about":
        return <About />;
        break;

      default:
        break;
    }
  };

  return <div className='flex w-full h-full p 8'>{componentRender()}</div>;
};

export default Sidebar;
