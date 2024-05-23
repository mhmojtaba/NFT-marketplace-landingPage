"use client"
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import React from 'react'
import styled from 'styled-components'

interface CardProps {
    id?: number;
    title: string;
    description?: string;
    image?: StaticImageData;
    link?: string;
}


const Card = ({ title, description, image }: CardProps) => {
    return (
        <CardStyled>
            <div className="image w-full h-full">
                <p className="new">New</p>
                <div className="text">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <Image
                    src={image}
                    alt='cardImage'
                    className='w-full h-full object-cover object-center rounded-lg'
                />
            </div>
            <div className="overlay" />
        </CardStyled>
    )
}

const CardStyled = styled.div`
    position: relative;
    background-color: var(--color-bg);
    height: 100%;
    padding: 1.5rem;
    border-radius: 10px;
    border: 1px solid var(--color-border);
    transition: all 0.4s ease-in-out;

    .new{
        position: absolute;
        top: 3rem;
        right: 2.5rem;
        z-index: 10;
        color:#fff;
        padding: 0.2rem 1rem;
        background: #222260;
        font-weight: 700;
        font-size: 1rem;
        border-radius: 20px;
    }

    .text{
        position: absolute;
        bottom: 3rem;
        left: 2.5rem;
        z-index: 10;
        h3{
            display: inline-block;
            font-size: 1.5rem;
            background: var(--color-bg);
            color: #f2994a;
            padding: 0.2rem 1rem;
            margin-bottom: 0.5rem;
            border: 1px solid var(--color-border);
            border-radius: 35px;
        }
        
    }

    .overlay{
        position:absolute;
        bottom: -2px;
        left: -2px;
        height: 25%;
        width: calc(100% + 4px);
        border-bottom-left-radius:8px;
        border-bottom-right-radius: 8px;
        background: linear-gradient(0deg , #111111 10%, rgba(17,17,17,0.06) 90%);

    }
`

export default Card
