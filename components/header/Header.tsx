"use client";

import Image from "next/image";
import logo from "/public/logo.png";
import Button from "../button/Button";
import styled from "styled-components";
import { BiWallet } from "react-icons/bi";
import { Abril_Fatface } from "next/font/google";
import { FaRocket } from "react-icons/fa";
import hover3d from "@/utils/hover";
import { useRef } from "react";



const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
});


const Header = () => {

  const ref = useRef<HTMLDivElement>(null);

  const { transform, transition } = hover3d(ref, {
    x: 30,
    y: -30,
    z: 30,
  })

  const { transform: imageTransform, transition: imageTransition } = hover3d(ref, {
    x: 20,
    y: -10,
    z: 11,
  })


  return (
    <HeaderStyle >
      <nav>
        <div className=" flex items-center gap-1 cursor-pointer">
          <Image src={logo} alt="logo" width={100} height={77} />
          <h2
            className={`hover:text-gray-200 hover:scale-110 ${abril.className}`}
          >
            MarketPlace
          </h2>
        </div>
        <div className="input">
          <input type="text" placeholder="search" />
        </div>
        <ul className="nav-items">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Marketplace</a>
          </li>
          <li>
            <a href="/">Auctions</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <Button name="Connect Wallet" icon={<BiWallet />} />
        </ul>
      </nav>
      <div
        className="flex flex-col md:flex-row justify-between items-center gap-16 header-content"
        ref={ref}>
        <div className="text-content">
          <h1 className={abril.className}>Buy, sell and collect your NFTs.</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
            accusantium, quod in voluptate impedit illo dolor asperiores eius
            minus, suscipit ipsum quasi nemo odit. Sed, placeat! Consequatur
            exercitationem incidunt consectetur.
          </p>
          <div className="flex mt-10 gap-4 max-w-screen-sm">
            <Button
              name="Get Started"
              color="#fff"
              background="#f2994a"
              border="1px solid #f2994a"
              icon={<FaRocket />}
            />

            <Button name="Learn More!" />
          </div>
        </div>
        <div className="image-container" >
          <div className="image shadow-zinc-200 shadow-lg" style={{
            transform: transform, transition: transition
          }}>
            <Image src={"/nft_prev_ui.png"} width={2000} height={2000} alt="NFT ape" style={{
              transform: imageTransform, transition: imageTransition
            }} />
          </div>
        </div>
      </div>
    </HeaderStyle >
  );
};

const HeaderStyle = styled.header`
    nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4rem;
    min-height: 10vh;
    border-bottom: 1px solid var(--color-border);
    .input {
      flex: 2;
    display: flex;
    justify-content: center;
    input {
      width: 60%;
    background-color: transparent;
    color: #fff;
    border: 1px solid var(--color-border);
    padding: 5px 10px;
    border-radius: 10px;
    outline: none;
    &::placeholder {
      font-weight: 600;
    color: var(--color-border);
        }
      }
    }
    .nav-items {
      display: flex;
    align-items: center;
    gap: 2rem;

    li a{

      transition: all 0.2s ease-in-out;
       &:hover {

       color: #fff;
        transform: scale(1.1);
      }
    }
    }
  }

    .header-content {
      min-height: calc(100vh - 10vh);
    padding: 0 10rem 2rem 10rem;

    .text-content {
      > h1 {
      font-size: clamp(2rem, 4vw, 5rem);
    color: #f2994a;
    padding-bottom: 1.5rem;
    transition: all 0.2s linear;
      }
    }

    .image-container .image{
      padding: 2rem 0 0 0;
    border-radius: 10px;
    background-color: var(--color-bg);
    border: 1px solid var(--color-border);
   
     
    }
  }
    `;

export default Header;
