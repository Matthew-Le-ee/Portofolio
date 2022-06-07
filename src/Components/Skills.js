import React, {useEffect} from 'react'
import '../styles.css'
import AOS from "aos";
import "aos/dist/aos.css";

const Lists = ({data}) => {
    useEffect(() => {
		AOS.init({
            offset: 0,
			duration: 2000,
		});
	}, []);
    const lists = data.map((list)=> {
        return(
            <>
                <button className='btn' data-aos = "fade-left">
                    {list}
                </button>
            </>
        )
    }) 
    return lists
}

const Skills = () => {
    const skills = ['HTML5', 'CSS3', "JavaScript", "React", "Sass"];
  return (
		<>
			<section id="skills" className='skills'>
				<h2 style={{ textAlign: "center" }}>My Skills</h2>
				<p style={{ textAlign: "center", fontWeight : "bold" }}>Skills</p>
				<div className="wrapper">
					<Lists data={skills} />
				</div>
			</section>
		</>
  );
}

export default Skills