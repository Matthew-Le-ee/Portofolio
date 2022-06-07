import React, {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
	useEffect(() => {
		AOS.init({
			offset: 0,
			duration: 2000,
		});
	}, []);
	return(
		<>
			<div className="edu" data-aos = "fade-down">
						<div className="polaroid">
							<h4
								style={{
									textAlign: "left",
									fontSize: "1.3rem",
								}}
							>
								Tiga Bintang Kreasi Company InternShip
							</h4>
							<h5 style={{fontStyle : "italic"}}>Junior FrondEnd Developer</h5>
							<ul>
								<li>
									Used coordination and planning skills to
									achieve results according to schedule.
								</li>
								<li>
									Conducted research, gathered information
									from multiple sources and presented results.
								</li>
								<li>
									Experience building a start-up company
									website.
								</li>
								<li>
									Experience using a figma for the first time.
								</li>
								<li>
									Helped company designing some product using
									photoshop cs6.
								</li>
							</ul>
						</div>
					</div>
		</>
	)
}

const Educatio = () => {
	return (
		<>
			<div className="edu" data-aos = "fade-up">
				<div className="polaroid">
					<h4
						style={{
							textAlign: "left",
							fontSize: "1.3rem",
						}}
					>
						University of Prima Indonesian
					</h4>
					<h5 style={{fontStyle : "italic"}}>Bachelor of Technology : Computer Programming</h5>
					<ul>
						<li>
							Cumulative GPA : 3.89/4.0 Dean's List for 5
							Semesters.
						</li>
						<li>
							Member of national seminar on technological
							innovation and computer science.
						</li>
						<li>
							Great development completed in website for the first
							time using HTML, CSS and JavaScript. .
						</li>
						<li>Experience using a figma for the first time.</li>
						<li>
							Relevant Coursework Completed: algorithm &
							programming building a "sale and purchase" system
							using a C++.
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

class Education extends React.Component {
	state = {
		show : false,
		show1 : false,
		show2 : true,
	}
	render(){
		const handleShow = () => {
			this.setState({show : true})
			this.setState({show1 : false})
			this.setState({show2 : false})
		}
		const handleShow1 = () => {
			this.setState({show1 : true})
			this.setState({show : false})
			this.setState({show2 : false})
		}
		return (
			<>
					<section id="education&experience" className="education">
						<h2 style={{ textAlign: "center" }}>
							My Education & Experience
						</h2>
						<p style={{ textAlign: "center", fontWeight: "bold" }}>
							Education & Experience
						</p>
						<div className="wrapper">
							<button className="btn" onClick={handleShow} data-aos = "slide-right">
								Education
							</button>
							<button className="btn" onClick={handleShow1} data-aos = "slide-left">
								Experience
							</button>
							{this.state.show && <Educatio /> }
							{this.state.show1 && <Experience />}
							{this.state.show2 && <Educatio/> }
						</div>
					</section>
			</>
		);
	}
}

export default Education;

