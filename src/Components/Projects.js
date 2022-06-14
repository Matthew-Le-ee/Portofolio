import React, { Component } from 'react'
import company from '../Components/images/Company.jpeg'
import todolist from '../Components/images/TodoList.webp'
import Google from './images/Google.jpg'
import { AiOutlineArrowRight } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

class Projects extends Component {
	componentDidMount(){
		AOS.init({
			offset: 0,
			duration:2000,
		})
	}
  render() {
    return (
		<>
			<section id="project" className="project">
				<h2 style={{ textAlign: "center" }}>My Projects</h2>
				<p style={{ textAlign: "center", fontWeight: "bold" }}>
					projects
				</p>
				<div className="hi" data-aos="fade-right">
					<div className="first">
						<img
							src={company}
							alt="company"
							style={{ width: "100%" }}
						/>
						<div className="second" style={{ padding: "20px" }}>
							<h3>Start-Up Company Website</h3>
							<a href="https://remake-web.netlify.app">
								<button className="btn">
									Live Demo <AiOutlineArrowRight />
								</button>
							</a>
						</div>
					</div>
					<div className="first" data-aos="fade-up">
						<img
							src={todolist}
							alt="Todo list"
							style={{ width: "100%" }}
						/>
						<div className="second" style={{ padding: "20px" }}>
							<h3>Todo List React</h3>
							<a href="https://matthew-le-ee.github.io/Todo-list/">
								<button className="btn">
									Live Demo <AiOutlineArrowRight />
								</button>
							</a>
						</div>
					</div>
					<div className="first" data-aos="fade-up">
						<img
							src={Google}
							alt="Google-clone"
							style={{ width: "100%" }}
						/>
						<div className="second" style={{ padding: "20px" }}>
							<h3>Google Clone</h3>
							<a href="https://matthew-le-ee.github.io/Google-clone/">
								<button className="btn">
									Live Demo <AiOutlineArrowRight />
								</button>
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
  }
}

export default Projects;
