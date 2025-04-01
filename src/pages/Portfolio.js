import React, {useEffect} from "react";
import projects from "../data/projects.js";
import InstantHook from "../components/InstantHook.js";

function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto py-10 px-6">
      {/* INSTANT HOOK SECTION */}
      <InstantHook />
    </div>
  );
}

export default Portfolio;
