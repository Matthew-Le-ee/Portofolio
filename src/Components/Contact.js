import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);
   const form = useRef();

   const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"gmail",
				"template_8bjx2uf",
				form.current,
				"-R1vnD5PGYI3EkTH6"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
			e.target.reset()
   };
  return (
		<>
			<section id="contact" className="contact">
				<h2 style={{ textAlign: "center" }}>My Contact</h2>
				<p style={{ textAlign: "center", fontWeight: "bold" }}>
					Contact
				</p>
				<form ref={form} onSubmit={sendEmail} className="form" data-aos = "fade-down">
					<div className="one">
						<label htmlFor="name" style={{ fontWeight: "bold" }}>
							Name :
						</label>
						<br></br>
						<input
							type="text"
							id="name"
							required
							style={{ borderRadius: "5px", fontSize: "1rem" }}
							name="user_name"
						/>
					</div>
					<div className="two">
						<label htmlFor="email" style={{ fontWeight: "bold" }}>
							Email :
						</label>
						<br></br>
						<input
							type="email"
							id="email"
							required
							style={{ borderRadius: "5px", fontSize: "1rem" }}
							name="user_email"
						/>
					</div>
					<div className="three">
						<label htmlFor="tel">Phone Number</label>
						<br />
						<input
							type="text"
							required
							style={{ borderRadius: "5px", fontSize: "1rem" }}
							name="number"
						></input>
					</div>
					<div className="four">
						<label htmlFor="message" style={{ fontWeight: "bold" }}>
							Message :
						</label>
						<br></br>
						<textarea
							id="message"
							required
							style={{ borderRadius: "5px", fontSize: "1rem" }}
							name="message"
						/>
					</div>
					<button type="submit" className="btn">
						Submit
					</button>
				</form>
			</section>
		</>
  );
};

export default Contact;