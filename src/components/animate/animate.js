import React, { useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "./animate.css";

const Animate = () => {

    const [value, setValue] = useState(0);
    const [isToggled, setToggle] = useState(1);

    const constraintsRef = useRef(null)
    const x = useMotionValue(0)
    const rotateY = useTransform(x, [-200, 0, 200], [-45, 0, 45], {
        clamp: false
    })

    return (
        <div className="Animate">
            <div className="Animate-header">
                <motion.h1 animate={{ x: value + "px" }} >Portfolio</motion.h1>
                <input type="range" min="-100" max="100" value={value} onChange={e => setValue(e.target.value)} />

                <motion.p animate={{ opacity: isToggled }}>A combination of some projects</motion.p>
                <button onClick={() => setToggle(prevalue => { return prevalue ? 0 : 1 })}>Click Me</button>

                <motion.div ref={constraintsRef} style={{ rotateY }}>
                    <motion.p drag="x" dragConstraints={constraintsRef} style={{ x }}>Slide this line back and forth</motion.p>
                </motion.div>
            </div>

        </div>
    )
}

export default Animate;