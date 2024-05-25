'use client'

import React, { ReactNode, useRef } from 'react'
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

interface WrapperProps {
    children: ReactNode
    direction: number
    height: string
}

const HorizontalWrapper = ({ children, direction, height }: WrapperProps) => {


    const scrollRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ['start center', 'end start']
    })

    const translateX: MotionValue<number> = useTransform(
        scrollYProgress,
        [0, 0.1, 1],
        [0, 0, direction],
    )

    return (
        <div ref={scrollRef}
        >
            <motion.div
                style={{
                    height: height,
                    zIndex: 10,
                    position: 'relative',
                    translateX: translateX
                }}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default HorizontalWrapper
