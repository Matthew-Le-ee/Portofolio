import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import {AiFillCopyrightCircle} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import { IconContext } from "react-icons";
const Footer = () => {
  return (
		<div className="footer">
			<footer>
				<p style={{fontWeight : "bold", fontSize : "1.2rem", padding : "10px"}}>
					{" "}
					<AiFillCopyrightCircle /> Matthew Lee
				</p>
				<div className="icon">
					<IconContext.Provider
						value={{
							size: "25px",
							style: { margin: "0px 8px", cursor: "pointer" },
						}}
					>
						<a href="https://github.com/Matthew-Le-ee/Matthew-Le-ee">
							<AiFillGithub />
						</a>
						<a href="https://www.linkedin.com/in/matthew-lee-83bb5221b/">
							<AiFillLinkedin />
						</a>
						<a href="https://www.instagram.com/lee_wenkuang/">
							<AiFillInstagram />
						</a>
					</IconContext.Provider>
				</div>
			</footer>
		</div>
  );
}

export default Footer