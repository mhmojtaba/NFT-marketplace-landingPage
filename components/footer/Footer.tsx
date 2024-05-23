'use client'

import Image from "next/image"
import styled from "styled-components"
import logo from "/public/logo.png";

const Footer = () => {
    return (
        <FooterStyled>
            <nav>
                <div className="logo-container">
                    <div className="logo">
                        <Image src={logo} alt="logo" width={36} />
                        <h2>logo</h2>
                    </div>
                </div>
            </nav>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
    
`

export default Footer
