import React, { useState } from 'react'
import '../styles.css'
import Switch from 'react-switch';

const Navbar = () => {
    const [checked, setChecked] = useState(false);
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const handleChange = (next) => {
        setChecked(next)
        let element = document.body;
        element.classList.toggle("dark-mode")
    }
    const navToggle = () =>{
        if(active === "nav__menu"){
            setActive('nav__menu nav__active')
        }
        else{
            setActive("nav__menu")
        }

        if(icon === "nav__toggler"){
            setIcon("nav__toggler toggle")
        }
        else{
            setIcon("nav__toggler")
        }
    }
    const hamburger = document.querySelector(".nav__toggler");
	const navMenu = document.querySelector(".nav__menu");
    const navLink = document.querySelectorAll(".nav__link");
	navLink.forEach((n) => n.addEventListener("click", closeMenu));

	function closeMenu() {
		hamburger.classList.remove("toggle");
		navMenu.classList.remove("nav__active");
	}
  return (
		<>
			<nav className="nav">
				<a href="#lee" className="nav__brand">
					Lee
				</a>
				<ul className={active}>
					<li>
						<a href="#about" className="nav__link">
							About
						</a>
					</li>
					<li>
						<a href="#skills" className="nav__link">
							Skills
						</a>
					</li>
					<li>
						<a href="#education&experience" className="nav__link">
							Education & Experience
						</a>
					</li>
					<li>
						<a href="#project" className="nav__link">
						    Projects
						</a>
					</li>
					<li>
						<a href="#contact" className="nav__link">
							Contact
						</a>
					</li>
				</ul>
				<Switch
					onChange={handleChange}
					checked={checked}
					className="switch"
					boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
					activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
					height={20}
					width={48}
					uncheckedIcon={false}
					checkedIcon={false}
					onColor="#d5bdaf"
				/>
				<div onClick={navToggle} className={icon}>
					<div className="line1"></div>
					<div className="line2"></div>
					<div className="line3"></div>
				</div>
			</nav>
		</>
  );
}

export default Navbar