import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { shuffle } from "lodash";
import "./animate-three.css";

const spring = {
    type: "spring",
    damping: 20,
    stiffness: 300
};

const AnimateThree = () => {

    const [colors, setColors] = useState(initialColors);

    useEffect(() => {
        setTimeout(() => setColors(shuffle(colors)), 1000);
    }, [colors]);

    return (
        <div className="AnimateThree">
            <div className="AnimateThree-Header">
                <ul>
                    {colors.map(background => (
                        <motion.li
                            key={background}
                            layoutTransition={spring}
                            style={{ background }}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

const initialColors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF"];

export default AnimateThree;