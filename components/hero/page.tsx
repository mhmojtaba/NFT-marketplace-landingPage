'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import styled from 'styled-components'
import space from '/public/poster.jpg'
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion'

const Hero = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start center', 'end start']
    })

    const scale: MotionValue<number> = useTransform(
        scrollYProgress,
        [0, 0.5],
        [0.6, 1],
    )

    const translateX: MotionValue<number> = useTransform(
        scrollYProgress,
        [1, 0.5, 0.1, 0],
        [-1000, 0, 0, 0],
    )
    return (
        <PageStyled ref={sectionRef}>
            <motion.div className="image" style={{
                scale: scale,
                translateX: translateX
            }}>
                <Image src={space} alt='image' fill={true} className=' object-cover object-center' />

            </motion.div>
        </PageStyled>
    )
}

const PageStyled = styled.div`
    .image{
        position: relative;
        height: 1000px;
        width: calc(100% - 10px);
        border-radius: 1rem;
        border: 1px solid var(--bg-border);
        transition: border 0.5s ease-in-out;

        &:hover{
            border: 1px solid #f2994a;
        }

        img{
            padding: 1.5rem;
        }
    }
`

export default Hero
