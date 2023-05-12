"use client";
import left from "./public/left.png";
import right from "./public/right.png";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function ParallaxComponent() {
  return (
    <div>
      <Parallax pages={2}>
        <ParallaxLayer offset={0} speed={0.5}>
          <div style={{ width: "65%", height: "100%", position: "absolute"}}>
            <img src="left.png" alt="Left image" style={{ width: "100%", height: "auto"}} />
          </div>
          <div style={{ width: "65%", height: "100%", position: "absolute", right: 269 }}>
            <img src="right.png" alt="Right image" style={{ width: "100%", height: "auto" }} />
          </div>
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default ParallaxComponent;
