"use client";

import  { ReactNode } from "react";



interface ButtonProps {
	name: string;
	icon?: ReactNode;
	background?: string;
	color?: string;
	border?: string;
}

const Button = ({ name, icon, background, color, border }: ButtonProps) => {
	return (
		<div
			style={{
				color: color,
				background: background,
				border: border,
			}}
		>
			{icon && icon}
			{name && name}
			<style jsx>
				{`
        div{
          padding: 0.8rem 1.5rem;
          border : 2px solid var(--color-border);
          border-radius: 25px;
          cursor:pointer;
          display:flex;
          align-items:center;
          gap:1rem;
          transition: all 0.3s ease-in-out;
          &:hover{
            background-color:var(--color-border);
            color: #fff;
          }
        }
        `}
			</style>
		</div>
	);
};

export default Button;
