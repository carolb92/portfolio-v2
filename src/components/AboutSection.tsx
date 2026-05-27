import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import headshot from "../assets/images/headshot-tiny.jpg";

const AboutSection = () => {
	return (
		<section id="about" className="py-20">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-6">
						About <span className="text-gradient">Me</span>
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-8"></div>
				</div>

				<div className="max-w-4xl mx-auto">
					<Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm card-hover">
						<CardContent className="p-8">
							<div className="overflow-hidden">
								<div className="float-left mr-6 mb-2">
									<div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-2xl font-bold text-white pulse-glow">
										<img
											src={headshot}
											alt="Carol Bruggeman"
											className="rounded-full w-full h-full object-cover"
										/>
									</div>
								</div>

								<div className="flex items-center space-x-4 mb-6">
									<Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
										Frontend Developer
									</Badge>
								</div>

								<p className="text-gray-300 leading-relaxed text-lg mb-6">
									I'm a frontend-focused developer with a background in
									emergency medicine, which mostly means I'm calm when things
									break and I think about the end user before I think about the
									code.
								</p>

								<p className="text-gray-300 leading-relaxed text-lg mb-6">
									Currently contributing to practice management software for
									diabetes education practices at{" "}
									<a href="https://www.palisaid.com/" target="_blank">
										<span className="text-emerald-400 font-semibold">
											Palisaid.
										</span>{" "}
									</a>
									My stack is React.js, Next.js, TypeScript, Tailwind CSS, and
									Supabase.
								</p>

								<p className="text-gray-300 leading-relaxed text-lg">
									I care about interfaces that don't complicate things with
									unnecessary complexity. That instinct came from clinical work,
									where a confusing UI isn't just annoying, it's a problem. My
									goal as a developer stems from that: empower the user with a
									frictionless interface they actually enjoy using. Everything
									else follows.
								</p>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
