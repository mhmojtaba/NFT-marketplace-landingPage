'use client'

import React, { useRef } from 'react'
import type { ReactNode } from 'react'
import styled from 'styled-components'
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion'

interface sectionProps {
    children: ReactNode
}

const TextWrapper = ({ children }: sectionProps) => {
    const textRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: textRef,
        offset: ['start center', 'end start']
    })

    const opacity: MotionValue<number> = useTransform(
        scrollYProgress,
        [1, 0.8, 0],
        [1, 1, 0],
    )

    const x: MotionValue<number> = useTransform(
        scrollYProgress,
        [1, 0.4, 0],
        [0, 0, -1000],
    )

    const color: MotionValue<string> = useTransform(
        scrollYProgress,
        [1, 0.4, 0],
        ['#f2994a', "#edd2ba", "#fff"],
    )


    return <div ref={textRef}>
        <motion.p
            style={{
                opacity,
                x,
                color
            }}
        >
            {children}
        </motion.p>
    </div>
}

const TextSection = () => {
    return (
        <TextStyled>
            <TextWrapper>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, ipsam?
            </TextWrapper>
            <TextWrapper>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, ipsam?
            </TextWrapper>
            <TextWrapper>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, ipsam?
            </TextWrapper>
            <TextWrapper>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, ipsam?
            </TextWrapper>
            <TextWrapper>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, ipsam?
            </TextWrapper>
            <TextWrapper>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, ipsam?
            </TextWrapper>
        </TextStyled>
    )
}

const TextStyled = styled.section`
    p{
        font-size: 3.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 3rem;
    }
`
export default TextSection
