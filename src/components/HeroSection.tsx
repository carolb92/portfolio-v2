import { Button } from "./ui/button";
// import { Badge } from "./ui/badge";

const HeroSection = () => {
	const scrollToProjects = () => {
		const element = document.getElementById("projects");
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section
			id="hero"
			className="min-h-screen flex items-center justify-center hero-gradient"
		>
			<div className="container mx-auto px-6 text-center">
				{/* <div className="floating-animation">
					<Badge className="mb-8 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30 px-6 py-2 text-sm">
						✨ Frontend Developer & Former Healthcare Professional
					</Badge>
				</div> */}

				<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
					<span className="text-gradient">Carol Bruggeman</span>
					<br />
					<span className="text-white">Software Developer</span>
				</h1>

				<p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
					{/* Bridging clinical insight with technical expertise to build intuitive,
					scalable web applications that enhance healthcare workflows and
					patient care. */}
					From clinical care to code—building intuitive, scalable web
					applications that simplify complex workflows and improve outcomes.
				</p>

				<div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
					<Button
						onClick={scrollToProjects}
						size="lg"
						className="accent-gradient hover:scale-105 transition-transform duration-300 px-8 py-4 text-lg font-semibold pulse-glow"
					>
						View My Work
						<svg
							className="w-5 h-5 ml-2"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M19 14l-7 7m0 0l-7-7m7 7V3"
							/>
						</svg>
					</Button>

					<Button
						variant="outline"
						size="lg"
						className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-300 px-8 py-4 text-lg"
						onClick={() =>
							window.open(
								"https://www.linkedin.com/in/carolbruggemandeveloper/",
								"_blank"
							)
						}
					>
						Connect on LinkedIn
						<svg
							className="w-5 h-5 ml-2"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
						</svg>
					</Button>
				</div>

				<div className="mt-16 text-center">
					<div className="inline-flex items-center space-x-2 text-gray-400">
						<span>Scroll to explore</span>
						<svg
							className="w-4 h-4 animate-bounce"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M19 14l-7 7m0 0l-7-7m7 7V3"
							/>
						</svg>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
