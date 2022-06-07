import React, {useEffect} from 'react'
import '../styles.css'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import Purple from './images/purple.jpg'
import { IconContext } from 'react-icons'
import {FiDownload} from 'react-icons/fi'
import Resume from '../files/Resume_Matthew-Lee.docx'
import AOS from "aos";
import 'aos/dist/aos.css'

const About = () => {
	useEffect(()=> {
		AOS.init({
			offset: 0,
			duration : 2000,
		});
	}, [])
  return (
		<>
			<section id="about" className="home">
				<div className="container">
					<div className="image">
						<img src={Purple} alt="purple" className="img"  data-aos="fade-down"/>
					</div>
					<div className="text">
						<div className="title" data-aos = "fade-left">
							<h2 className="name">Matthew Lee</h2>
							<img
								src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
								alt="hi"
								style={{ width: "25px" }}
							></img>
						</div>
						<h4 data-aos = "fade-right">Student</h4>
						<p className="description" data-aos = "fade-left">
							'I'm a student at the University of Prima Indonesia
							with a major in Computer Information Systems . I
							have a passion for computer programming. My passion
							has given me the ability to develop programs for a
							multitude of things using various programming
							languages and technologies such as JavaScript,
							React.js, HTML5, CSS3, Sass and more.
						</p>
					</div>
				</div>
				<div className="icons" data-aos = "slide-left">
					<IconContext.Provider
						value={{
							size: "25px",
							style: { margin: "0px 7px", cursor: "pointer" },
						}}
					>
						<a href="https://github.com/Matthew-Le-ee/Matthew-Le-ee">
							<AiFillGithub />
						</a>
						<a href="https://www.linkedin.com/in/matthew-lee-83bb5221b/">
							<AiFillLinkedin />
						</a>
						<a href={Resume} download style={{color : "brown"}}>
							<FiDownload />
						</a>
					</IconContext.Provider>
				</div>
			</section>
		</>
  );
}

export default About