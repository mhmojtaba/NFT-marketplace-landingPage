'use client'

import React, { useRef } from 'react'
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion'

const VideoSection = () => {
    const videoRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: videoRef,
        offset: ['start center', 'end start']
    })

    const opacity: MotionValue<number> = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [1, 1, 0],
    )

    const scale: MotionValue<number> = useTransform(
        scrollYProgress,
        [0, 0.6, 0.8, 1],
        [1, 0.8, 0.7, 0],
    )

    return (
        <motion.div className='p-8 bg-[#212121] rounded-2xl' ref={videoRef} style={{
            opacity,
            scale
        }}>
            {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
            <iframe src="https://www.aparat.com/v/a781l84" title='video'
                className='border-none w-full h-[52rem]'
                allowFullScreen
                allow='accelerometer; autoplay; clipboard-write; encrypted-media;'
            ></iframe>

        </motion.div>
    )
}

export default VideoSection
