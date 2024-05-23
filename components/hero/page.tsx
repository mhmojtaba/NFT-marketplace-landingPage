'use client'

import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import space from '/public/poster.jpg'

const Hero = () => {
    return (
        <PageStyled>
            <div className="image">
                <Image src={space} alt='image' fill={true} className=' object-cover object-center' />

            </div>
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
