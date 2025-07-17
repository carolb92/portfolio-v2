import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import ContactSection from "./ContactSection";

const Portfolio = () => {
	const [activeSection, setActiveSection] = useState("hero");

	useEffect(() => {
		const handleScroll = () => {
			const sections = ["hero", "projects", "skills", "about", "contact"];
			const scrollPosition = window.scrollY + 100;

			for (let i = sections.length - 1; i >= 0; i--) {
				const element = document.getElementById(sections[i]);
				if (element && element.offsetTop <= scrollPosition) {
					setActiveSection(sections[i]);
					break;
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="min-h-screen parallax-bg">
			<Navigation activeSection={activeSection} />
			<HeroSection />
			<div className="section-divider"></div>
			<ProjectsSection />
			<div className="section-divider"></div>
			<SkillsSection />
			<div className="section-divider"></div>
			<AboutSection />
			<div className="section-divider"></div>
			<ContactSection />
		</div>
	);
};

export default Portfolio;
