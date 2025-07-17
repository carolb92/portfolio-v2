import { Badge } from "./ui/badge";

const SkillsSection = () => {
	// const skills = [
	//   "HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js",
	//   "Tailwind CSS", "Git & GitHub", "Vercel", "Figma", "Photoshop", "Agentic Coding"
	// ];

	const skillCategories = [
		{
			category: "Frontend Technologies",
			skills: [
				"HTML5",
				"CSS3",
				"JavaScript",
				"TypeScript",
				"React.js",
				"Next.js",
			],
			color: "emerald",
		},
		{
			category: "Styling & Design",
			skills: ["Tailwind CSS", "Figma", "Photoshop"],
			color: "teal",
		},
		{
			category: "Development Tools",
			skills: ["Git & GitHub", "Vite", "Vercel", "Agentic Coding"],
			color: "cyan",
		},
	];

	return (
		<section id="skills" className="py-20">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-6">
						Skills & <span className="text-gradient">Technologies</span>
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-8"></div>
					<p className="text-gray-300 text-lg max-w-2xl mx-auto">
						A comprehensive toolkit for building modern, scalable web
						applications with a focus on user experience and performance.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{skillCategories.map((category, categoryIndex) => (
						<div key={categoryIndex} className="text-center">
							<h3
								className={`text-xl font-bold mb-6 text-${category.color}-400`}
							>
								{category.category}
							</h3>
							<div className="flex flex-wrap gap-3 justify-center">
								{category.skills.map((skill, skillIndex) => (
									<Badge
										key={skillIndex}
										className={`skill-tag text-sm py-2 px-4 bg-${category.color}-500/20 text-${category.color}-400 border-${category.color}-500/30`}
									>
										{skill}
									</Badge>
								))}
							</div>
						</div>
					))}
				</div>

				<div className="mt-16 text-center">
					<div className="inline-flex items-center space-x-2 text-gray-400">
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M13 10V3L4 14h7v7l9-11h-7z"
							/>
						</svg>
						<span>Continuously learning and evolving</span>
						<svg
							className="w-5 h-5"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M13 10V3L4 14h7v7l9-11h-7z"
							/>
						</svg>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SkillsSection;
