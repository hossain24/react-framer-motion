import React from "react";
import { motion } from "framer-motion";
import "./animate.css";

const Animate = () => {
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    return (
        <div className="Animate">
            <div className="Animate-header">
                <motion.h1 initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{ duration: 5, loop: "Infinity" }}>
                    Portfolio
                </motion.h1>

                <motion.p initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{ duration: 10 }}>
                    A combination of some projects
                </motion.p>

                <div className="Animate-body">
                    <motion.p initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ duration: 15 }}>
                        The technologies are used to build this web app:
                </motion.p>

                    <motion.p initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ duration: 20 }}>
                        Front-end: React, React-bootstrap, Framer-motion, HTML, CSS.
                    <br /> Back-end: Node, Express, MongoDB, Google API.
                </motion.p>
                </div>
            </div>

        </div >
    )
}

export default Animate;