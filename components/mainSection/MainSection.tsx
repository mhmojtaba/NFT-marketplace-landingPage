"use client"
import React from 'react'
import styled from 'styled-components'
import SectionLayout from '../sectionLayout/SectionLayout'
import { cards } from '../../utils/cards';
import Card from '../card/Card';
import Hero from '../hero/page';
import TextSection from '../textSection/TextSection';
import VideoSection from '../videoSection/VideoSection';
import Footer from '../footer/Footer';
import HorizontalWrapper from '../wrapper/HorizontalWrapper';


const MainSection = () => {
    return (
        <MainStyle>
            <SectionLayout >
                <HorizontalWrapper direction={-1400} height='30rem'>
                    <div className="cards">
                        {cards.map((card) => (
                            <Card
                                key={card.id}
                                {...card}
                            />
                        ))}
                    </div>
                </HorizontalWrapper>
            </SectionLayout>
            <Hero />
            <SectionLayout >
                <HorizontalWrapper direction={1400} height='20rem'>

                    <div className="cards" style={{
                        right: 0
                    }}>
                        {cards.map((card) => (
                            <Card
                                key={card.id}
                                {...card}
                            />
                        ))}
                    </div>
                </HorizontalWrapper>
            </SectionLayout>
            <SectionLayout>
                <TextSection />
            </SectionLayout>
            <SectionLayout>
                <VideoSection />
            </SectionLayout>

            <SectionLayout>
                <TextSection />
            </SectionLayout>


            <Footer />
        </MainStyle>
    )
}

const MainStyle = styled.main`
    min-height: 100vh;
    width: 100%;
    .cards{
        position: absolute;
        display: grid;
        gap: 4rem;
        grid-template-columns: repeat(6 , 30rem);
    }
`

export default MainSection
