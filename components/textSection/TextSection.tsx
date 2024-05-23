'use client'

import React, { useRef } from 'react'
import type { ReactNode } from 'react'
import styled from 'styled-components'

interface sectionProps {
    children: ReactNode
}

const TextWrapper = ({ children }: sectionProps) => {
    const textRef = useRef<HTMLDivElement>(null);

    return <div ref={textRef}>
        <p>
            {children}
        </p>
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
