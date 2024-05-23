'use client'

import React from 'react'

const VideoSection = () => {
    return (
        <div className='p-8 bg-[#212121] rounded-2xl'>
            {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
            <iframe src="https://www.aparat.com/v/a781l84" title='video'
                className='border-none w-full h-[52rem]'
                allowFullScreen
                allow='accelerometer; autoplay; clipboard-write; encrypted-media;'
            ></iframe>

        </div>
    )
}

export default VideoSection
