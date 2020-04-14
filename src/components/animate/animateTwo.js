import React from "react";
import { motion } from "framer-motion";
import "./animateTwo.css";

const AnimateTwo = () => {

    const icon = {
        hidden: {
            opacity: 0,
            pathLength: 0,
            fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            fill: "rgba(255, 255, 255, 1)"
        }
    };

    return (
        <div className="AnimateTwo">
            <div className="AnimateTwo-Header">
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    className="item"
                >
                    <motion.path
                        d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
                        variants={icon}
                        initial="hidden"
                        animate="visible"
                        transition={{

                            default: { duration: 10, ease: "easeInOut", loop: Infinity, },
                            fill: { duration: 5, ease: [1, 0, 1, 1] }
                        }}
                    />
                </motion.svg>
            </div>
        </div>
    )
}

export default AnimateTwo;