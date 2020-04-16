import React from "react";
import { Frame } from "framer";
import "./animate-four.css";

const AnimateFour = () => {

    return (
        <div className="AnimateFour">
            <div className="AnimateFour-Header">
                <Frame
                    animate={{ background: ["#F05", "#85F", "#0CF"] }}
                    transition={{
                        duration: 2,
                        yoyo: Infinity
                    }}
                    size={150}
                    radius={30}
                    background={"#0CF"}
                />
            </div>
        </div>
    )
}

export default AnimateFour;