import React from "react";
import { Outlet } from "react-router-dom";

const OurTemplate = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default OurTemplate;
