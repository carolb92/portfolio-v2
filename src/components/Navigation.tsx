import { useState } from "react";
import { Button } from "./ui/button";
import { Drawer } from "./ui/drawer";

const Navigation = ({ activeSection }: { activeSection: string }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navItems = [
		{ id: "hero", label: "Home" },
		{ id: "projects", label: "Projects" },
		{ id: "skills", label: "Skills" },
		{ id: "about", label: "About" },
		{ id: "contact", label: "Contact" },
	];

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		setIsMenuOpen(false);
	};

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 nav-blur">
			<div className="container mx-auto px-6 py-4">
				<div className="flex items-center justify-between">
					<div
						className="nav-wordmark cursor-pointer select-none"
						onClick={() => scrollToSection("hero")}
					>
						carol.
					</div>
					<div className="hidden md:flex space-x-8">
						{navItems.map((item) => (
							<Button
								key={item.id}
								variant="ghost"
								onClick={() => scrollToSection(item.id)}
								className={`text-white transition-colors duration-300 ${
									activeSection === item.id ? "text-accent" : ""
								}`}
							>
								{item.label}
							</Button>
						))}
					</div>
					<div className="md:hidden">
						<Button
							variant="ghost"
							className="text-white hover:text-accent"
							aria-label="Toggle menu"
							aria-expanded={isMenuOpen}
							onClick={() => setIsMenuOpen(true)}
						>
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</Button>
					</div>
				</div>
			</div>

			<Drawer open={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
				<div className="flex flex-col p-6 gap-2">
					{navItems.map((item) => (
						<Button
							key={item.id}
							variant="ghost"
							onClick={() => scrollToSection(item.id)}
							className={`justify-start text-white transition-colors duration-300 ${
								activeSection === item.id ? "text-accent" : ""
							}`}
						>
							{item.label}
						</Button>
					))}
				</div>
			</Drawer>
		</nav>
	);
};

export default Navigation;
