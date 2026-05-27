import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import farAway from "../assets/images/far-away-tiny.png";
import hangMon from "../assets/images/hang-mon-start.png";
// import stickyNotes from "../assets/images/tiny-sticky.png";
import planets from "../assets/images/planets-tiny.png";
// import perimeterHealth from "../assets/images/perimeter-health-tiny.png";
import spooky from "../assets/images/tiny-spooky.png";

const ProjectsSection = () => {
	const projects = [
		// {
		// 	id: 5,
		// 	title: "Perimeter Health Company Site",
		// 	description:
		// 		"A modern, responsive company website for an early-stage startup, built with Webflow. The site features Calendly widget integration for demo booking, onboarding forms, and showcases the company's mission and services.",
		// 	skills: [
		// 		"Webflow",
		// 		"Responsive Design",
		// 		"Template Customization",
		// 		"SEO",
		// 		"CMS",
		// 	],
		// 	tools: ["Webflow", "CMS"],
		// 	link: "https://www.perimeter.health/",
		// 	gradient: "from-green-500 to-teal-500",
		// 	image: perimeterHealth,
		// 	gitHubRepo: "",
		// },
		{
			id: 6,
			title: "Spooky Book Club FL",
			description:
				'A full-stack community platform for a horror book club. Members can add books to the TBR queue, vote on what to read next, rate finished books, and let the "chaos algorithm" decide when picking the next book.', //It has actual active users, which I\'m unreasonably proud of.
			skills: [
				"Supabase (auth + database)",
				"Google Books API",
				"React",
				"custom hooks",
				"React Context API",
				"async state management",
				"TypeScript",
				"Shadcn + Tailwind CSS",
			],
			tools: ["Vite", "Vercel", "ESLint"],
			link: "https://spookybookclubfl.vercel.app/",
			gradient: "from-purple-500 to-pink-500",
			image: spooky,
			gitHubRepo:
				"https://github.com/carolb92/spookybookclubfl?tab=readme-ov-file#readme",
			videoDemo: "https://www.loom.com/share/146932929e1d4fed817678115b378634",
		},
		{
			id: 2,
			title: "Hang 'Mon",
			description:
				"A Pokémon hangman game with Region and Type filters. Built with React, TypeScript, and the PokéAPI — URL state keeps your filter selections intact if you share a link or refresh mid-game. Guess the randomly generated Pokemon before your seven attempts run out; don't let Pikachu down.",
			skills: [
				"React",
				"TypeScript",
				"Tailwind CSS",
				"custom hooks",
				"URL state management",
				"REST APIs",
			],
			tools: ["Vite", "Vercel", "Chrome DevTools"],
			link: "https://hang-mon.vercel.app/",
			gradient: "from-purple-500 to-pink-500",
			image: hangMon,
			gitHubRepo:
				"https://github.com/carolb92/hang-mon?tab=readme-ov-file#readme",
		},
		{
			id: 4,
			title: "Planets Fact Site",
			description:
				"A mobile-first planet encyclopedia built with Next.js and TypeScript. Mostly a deep dive into Next.js routing and responsive layout. It's aesthetically pleasing, it looks great on every screen size, and now I know more about Neptune than I ever expected to.",
			skills: [
				"React",
				"Next.js",
				"TypeScript",
				"Tailwind CSS",
				"Responsive Web Design",
				"Next.js Routing",
			],
			tools: ["Vite", "Vercel", "Chrome DevTools", "Next.js"],
			link: "https://planets-fact-site-gamma-six.vercel.app/",
			gradient: "from-yellow-500 to-orange-500",
			image: planets,
			gitHubRepo: "https://github.com/carolb92/planets-fact-site",
		},
		{
			id: 3,
			title: "Far Away",
			description:
				"A packing list app that persists between sessions via local storage. Sort by name, input order, or packed status. Built with React and TypeScript. Simple problem, but getting the state management and sort logic clean was the actual exercise.",
			skills: [
				"React",
				"TypeScript",
				"Tailwind CSS",
				"local storage",
				"sorting",
			],
			tools: ["Vite", "Vercel", "Chrome DevTools"],
			link: "https://far-away-v2.vercel.app/",
			gradient: "from-blue-500 to-cyan-500",
			image: farAway,
			gitHubRepo: "https://github.com/carolb92/far-away-v2",
		},
		// {
		// 	id: 1,
		// 	title: "Super Sticky Notes",
		// 	description:
		// 		"A single page application built with React that allows users to add, edit, delete, and search sticky notes for to-dos or task management, utilizing local storage for data persistence.",
		// 	skills: [
		// 		"React",
		// 		"TypeScript",
		// 		"Tailwind CSS",
		// 		"local storage",
		// 		"CRUD operations",
		// 	],
		// 	tools: ["Vite", "Vercel", "Chrome DevTools"],
		// 	link: "https://sticky-notes-v2-peach.vercel.app/",
		// 	gradient: "from-yellow-500 to-orange-500",
		// 	image: stickyNotes,
		// 	gitHubRepo: "https://github.com/carolb92/sticky-notes-v2",
		// },
	];

	const handleProjectClick = (link: string) => {
		window.open(link, "_blank");
	};

	return (
		<section id="projects" className="py-20">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-6">
						Featured <span className="text-gradient">Projects</span>
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-8"></div>
					<p className="text-gray-300 text-lg max-w-2xl mx-auto">
						{/* Explore my latest work showcasing modern web development techniques
						and user-centered design. */}
						Small apps that work exactly like they should and look good doing
						it.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-x-1 lg:gap-y-12">
					{/* lg:grid-cols-3 */}
					{projects.map((project) => (
						<Card
							key={project.id}
							className="bg-gray-900/50 border-gray-800 backdrop-blur-sm card-hover cursor-pointer group flex flex-col h-full lg:w-[80%] lg:justify-self-center lg:gap-1 xl:w-[65%]"
							onClick={() => handleProjectClick(project.link)}
						>
							<CardContent className="p-6 flex flex-col h-full">
								{/* Image placeholder */}
								{/* <div
									className={`w-full h-48 bg-gradient-to-br ${project.gradient} rounded-lg mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 flex-shrink-0`}
								>
									<div className="text-white text-6xl font-bold opacity-20">
										{project.title.charAt(0)}
									</div>
								</div> */}
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-48 object-cover rounded-lg mb-6 group-hover:scale-105 transition-transform duration-300"
								/>

								<div className="flex flex-col flex-grow justify-evenly">
									<h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
										{project.title}
									</h3>

									<p className="text-gray-300 mb-4 leading-relaxed">
										{/* flex-grow */}
										{project.description}
									</p>

									<div className="mb-10">
										<p className="text-sm text-emerald-400 font-semibold mb-2">
											Skills:
										</p>
										<div className="flex flex-wrap gap-2">
											{project.skills.map((skill, index) => (
												<Badge key={index} className="skill-tag text-xs">
													{skill}
												</Badge>
											))}
										</div>
									</div>

									{/* <div className="mb-6">
										<p className="text-sm text-teal-400 font-semibold mb-2">
											Tools:
										</p>
										<div className="flex flex-wrap gap-2">
											{project.tools.map((tool, index) => (
												<Badge
													key={index}
													className="bg-teal-500/20 text-teal-400 border-teal-500/30 text-xs"
												>
													{tool}
												</Badge>
											))}
										</div>
									</div> */}
									<div className="flex flex-col gap-y-2">
										<Button
											className="font-semibold w-full accent-gradient hover:scale-105 transition-transform duration-300 group-hover:shadow-lg mt-auto"
											onClick={(e) => {
												e.stopPropagation();
												handleProjectClick(project.link);
											}}
										>
											View Live Project
											<svg
												className="w-4 h-4 ml-2"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
												/>
											</svg>
										</Button>
										{project.gitHubRepo && (
											<Button
												onClick={(e) => {
													e.stopPropagation();
													handleProjectClick(project.gitHubRepo);
												}}
												variant="outline"
												className="w-full border-emerald-500 text-emerald-400 hover:scale-105 hover:bg-emerald-500 hover:text-white transition-all duration-300 group-hover:shadow-lg mt-auto font-semibold"
											>
												View GitHub Repo
												<svg
													className="w-4 h-4 ml-2"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
													/>
												</svg>
											</Button>
										)}
										{project.videoDemo && (
											<>
												<Button
													onClick={(e) => {
														e.stopPropagation();
														handleProjectClick(project.videoDemo!);
													}}
													variant="outline"
													className="w-full bg-emerald-500/[0.07] border border-emerald-500/25 text-emerald-300/75 hover:scale-105 hover:bg-emerald-500/15 hover:border-emerald-400/50 hover:text-emerald-200 hover:shadow-[0_0_16px_rgba(16,185,129,0.2)] transition-all duration-300 group-hover:shadow-lg mt-auto font-semibold"
												>
													Watch Demo
													<svg
														className="w-4 h-4 ml-2"
														fill="currentColor"
														viewBox="0 0 24 24"
													>
														<path d="M8 5v14l11-7z" />
													</svg>
												</Button>
												<p className="text-xs text-gray-500 text-center -mt-1">
													some features require sign-in — this walkthrough shows
													them all
												</p>
											</>
										)}
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectsSection;
