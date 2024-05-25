'use client'

import Image from "next/image"
import styled from "styled-components"
import logo from "/public/logo.png";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { footer } from '../../utils/footer'
import { Abril_Fatface } from "next/font/google";


const abril = Abril_Fatface({
    subsets: ["latin"],
    weight: "400",
});

const Footer = () => {
    return (
        <FooterStyled>
            <nav>
                <div className="logo-container">
                    <div className="logo">
                        <Image src={logo} alt="logo" width={80} />
                        <h2
                            className={`hover:text-gray-200 hover:scale-110 ${abril.className}`}
                        >logo</h2>
                    </div>
                    <div className="input">
                        <input type="text" placeholder="subscribe ...." />
                        <button>&#8594;</button>
                    </div>
                    <p className="text-base">Create, sell and collect the best NFTs. powered by Mojtaba.Web3 !</p>
                    <div className="socials">
                        <AiFillGithub />
                        <AiFillTwitterCircle />
                        <AiFillInstagram />
                        <BsDiscord />
                        <AiFillLinkedin />
                    </div>
                </div>
                <div className="links">
                    {footer.map((item, index) => (
                        <div key={index}>
                            <h4>{item.title}</h4>
                            <ul>
                                {item.links.map((txt, index) => (
                                    <li key={index}>
                                        <a href="">{txt.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </nav>
            <p className="rights">
                <a href="/">&copy; Mojtaba web3. All rights reserved!</a>
                <a href="/">Privacy Policy | Terms of services.</a>
            </p>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
    position: relative;
    z-index: 15;
    padding: 5rem 10rem 0 10rem;
    background-color: var(--color-bg);
    border-top: 1px solid var(--color-border);

    nav{
        display: flex;
        justify-content: space-between;
        gap: 3rem;

        .logo-container{
            display: flex;
            flex-direction: column;
            gap: 2rem;
            width: 50%;

            .logo{
                display: flex;
                align-items: center;
                gap: 1rem;
            }
            .input{
                position: relative;

                input{
                    width: 100%;
                    padding: 1rem 0.8rem;
                    border-radius: 10px;
                    background-color: #161616;
                    border: 1px solid var(--color-border);

                    &::placeholder{
                        font-weight: 600;
                        color: var(--color-border);
                    }
                }

                button{
                    position: absolute;
                    top: 50%;
                    right:2rem;
                    transform: translateY(-50%);
                    background: transparent;
                    cursor: pointer;
                    transition: all 0.5s ease-in-out;
                    &:hover{
                        color: #fff;
                        transform: translateY(-50%) translateX(0.5rem) scale(1.5);
                    }
                }
            }
            .socials{
                display: flex;
                gap: 1rem;
                font-size: 1.6rem;
                svg{
                    cursor: pointer;
                    transition: all 0.2s ease-in-out;
                    &:hover{
                        color: #fff;
                    }
                }
            }
        }
        .links{
            flex: 1;
            display: grid;
            grid-template-columns: repeat(3,1fr);
            gap: 2rem;

            h4{
                font-size: 1.5rem;
                margin-bottom: 1.5rem;
            }
            li:not(:last-child){
                margin-bottom: 1rem;
            }

            a{
                transition: all 0.3s ease-in-out;

                &:hover{
                    color: #fff;
                }
            }
        }

    }
    .rights{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 2rem;
        padding: 2rem 0;
        border-top: 1px solid var(--color-border);

        a{
            font-size: 1rem;
        }
    }
`

export default Footer
